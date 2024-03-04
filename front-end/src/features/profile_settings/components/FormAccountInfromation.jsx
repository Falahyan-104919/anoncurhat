import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import FormProfilePicture from './FormProfilePicture';
import { useSelector } from 'react-redux';
import axiosInstance from '@/utils/axios';
import { Field, Form, Formik } from 'formik';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import * as Yup from 'yup';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import { SelectValue } from '@radix-ui/react-select';
import { capitalizeGender } from '@/utils/helper';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function FormAccountInformation() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { user_id } = useSelector((state) => state.auth);
  const fetchAccInfo = async (id) => {
    const res = await axiosInstance
      .get(`users/${id}`)
      .then((res) => res.data)
      .catch((err) => err.response.data);
    return res;
  };
  const { data, isFetched } = useQuery({
    queryKey: ['account_info', user_id],
    queryFn: () => fetchAccInfo(user_id),
  });
  const { mutate } = useMutation({
    mutationKey: ['update_user', user_id],
    mutationFn: (values) => axiosInstance.put(`users/${user_id}`, values),
    onSuccess: () => {
      queryClient.invalidateQueries('account_info');
      return toast({
        title: 'Successfully Updated Account Information',
        variant: 'success',
      });
    },
    onError: (err) => {
      return toast({
        title: 'Failed to Update Account Information',
        description: `${err}`,
        variant: 'error',
      });
    },
  });
  if (isFetched) {
    const validationSchema = Yup.object().shape({
      username: Yup.string().required('Username is Required'),
      gender: Yup.string()
        .required('Gender is required')
        .oneOf(['male', 'female']),
      date_of_birth: Yup.date().required('Date of Birth is Required'),
    });
    const initialValue = {
      username: data.username,
      gender: data.gender,
      date_of_birth: data.date_of_birth,
    };
    const handleSubmit = async (values, actions) => {
      return mutate(values);
    };
    return (
      <div className="flex flex-col gap-8 p-8">
        <FormProfilePicture />
        <h2 className="text-xl font-bold text-white tracking-tight">
          Account Settings
        </h2>
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values, isValid, errors, touched }) => (
            <Form autoComplete="off">
              <Field name="username">
                {({ field }) => (
                  <div className="flex gap-4 items-center">
                    <Label className="mr-4">Username</Label>
                    <Input
                      name="username"
                      type="text"
                      {...field}
                      className="max-w-[480px] text-black focus:border-zinc-900"
                      values={data.username}
                    />
                    {errors.username && touched.username ? (
                      <Label className="text-red-500 text-right">
                        {errors.username}
                      </Label>
                    ) : null}
                  </div>
                )}
              </Field>
              <Field name="gender">
                {({ field, form }) => (
                  <div className="flex gap-4 items-center mt-8">
                    <Label className="mr-9">Gender</Label>
                    <Select
                      value={field.value}
                      onValueChange={(value) =>
                        form.setFieldValue('gender', value)
                      }
                    >
                      <SelectTrigger className="text-black max-w-[480px]">
                        <SelectValue
                          placeholder="Pick a Gender"
                          name="gender"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {errors.gender && touched.gender ? (
                      <Label className="text-red-500 text-right">
                        {errors.gender}
                      </Label>
                    ) : null}
                  </div>
                )}
              </Field>
              <Field name="date_of_birth">
                {({ field }) => (
                  <div className="flex gap-4 items-center mt-8">
                    <Label>Date of Birth</Label>
                    <Input
                      type="date"
                      name="date_of_birth"
                      className="max-w-[480px] text-black"
                      {...field}
                    />
                  </div>
                )}
              </Field>
              <div className="flex justify-center mt-5 ml-[56px]">
                <Button variant="secondary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

/*
active: true
createdAt: "2024-02-02T12:44:53.627Z"
date_of_birth: "2001-07-24"
gender: "male"
id_user: "563b65f7-c5aa-4897-9134-c83d04f04e29"
password: "$2b$10$VrCyX8EaiOwC8PkQyKrJIuPsWjRi0.alnmkXGm25rWqfVnJozibpO"
role: "admin"
updatedAt: "2024-02-02T12:44:53.627Z"
username: "admin1"
*/
