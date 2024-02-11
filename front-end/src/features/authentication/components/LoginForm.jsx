import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { LogIn } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { login } from '@/features/authentication/hooks/authSlice';

export default function LoginForm() {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const validationSchema = Yup.object().shape({
    username: Yup.string('Username Must Be String').required('Required'),
    password: Yup.string().required('Password is Required'),
  });
  const initialValue = {
    username: '',
    password: '',
  };
  const handleSubmit = (values) => {
    dispatch(login(values));
    return toast({
      variant: 'success',
      title: 'Logged In ✅ ',
      description: 'Authentication is Success!',
    });
  };
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, isValid, dirty, errors, touched }) => (
        <Form autoComplete="off">
          <div className="flex flex-col gap-4 mb-4 mt-4">
            <Label htmlFor="username">Username</Label>
            <Field name="username">
              {({ field }) => (
                <div className="text-right">
                  <Input type="text" {...field} />
                  {errors.username && touched.username ? (
                    <Label htmlFor="username" className="text-red-600">
                      Username is Required
                    </Label>
                  ) : null}
                </div>
              )}
            </Field>
            <Label htmlFor="username">Password</Label>
            <Field name="password">
              {({ field }) => (
                <div className="text-right">
                  <Input id="password" type="password" {...field} />
                  {errors.password && touched.password ? (
                    <Label htmlFor="username" className="text-red-600">
                      Password is Required
                    </Label>
                  ) : null}
                </div>
              )}
            </Field>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting || !isValid || !dirty}>
              <LogIn size="18px" style={{ marginRight: '8px' }} /> Login
            </Button>
          </DialogFooter>
        </Form>
      )}
    </Formik>
  );
}
