import { Button } from '@/components/ui/button';
import { DialogClose, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Field, Form, Formik } from 'formik';
import { LogIn, SquarePen } from 'lucide-react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { postCurhatan } from '../hooks/postCurhatan';
import { toast } from '@/components/ui/use-toast';
export default function CreateCurhatForm({ toggleOff }) {
  const authState = useSelector((state) => state.auth);
  const queryClient = useQueryClient();
  const { user_id } = authState;
  const { mutate, isError } = useMutation({
    mutationKey: ['curhat', user_id],
    mutationFn: (values) => postCurhatan(values),
    onSuccess: () => {
      toggleOff();
      queryClient.invalidateQueries('curhatan');
      return toast({
        title: 'Post Curhat Successfull',
        variant: 'success',
      });
    },
  });
  const initialValue = {
    content: '',
  };
  const validationSchema = Yup.object().shape({
    content: Yup.string('Isi harus berupa teks').required('Tidak boleh kosong'),
  });

  const handleSubmit = (values, action) => {
    const payload = {
      user_id,
      content: values.content,
    };
    mutate(payload);
    if (isError) {
      return toast({
        title: 'Post Curhat Successfull',
        variant: 'error',
      });
    }
    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, isValid, dirty, errors, touched }) => (
        <Form autoComplete="off">
          <div className="flex flex-col gap-4">
            <Label htmlFor="content">What's in your mind ? </Label>
            <Field name="content">
              {({ field }) => (
                <div className="text-right">
                  <Textarea {...field} />
                  {errors.content && touched.content ? (
                    <Label htmlFor="content" className="text-red-600">
                      Content is Required
                    </Label>
                  ) : null}
                </div>
              )}
            </Field>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="destructive" onClick={toggleOff}>
                  Close
                </Button>
              </DialogClose>
              <Button
                type="submit"
                disabled={isSubmitting || !isValid || !dirty}
              >
                <SquarePen size="18px" style={{ marginRight: '8px' }} /> Posts
              </Button>
            </DialogFooter>
          </div>
        </Form>
      )}
    </Formik>
  );
}
