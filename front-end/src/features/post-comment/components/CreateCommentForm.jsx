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
//import { postCurhatan } from '@/features/curhatan-list/hooks/postCurhatan';
import { postComments } from '../hooks/postComments';
import { toast } from '@/components/ui/use-toast';
export default function CreateCommentForm({ postId }) {
  const authState = useSelector((state) => state.auth);
  const queryClient = useQueryClient();
  const { user_id } = authState;
  const { mutate, isError } = useMutation({
    mutationKey: ['comments', user_id],
    mutationFn: (values) => postComments(values),
    onSuccess: () => {
      queryClient.invalidateQueries('commented');
      return toast({
        title: 'Post Comment Successfull',
        variant: 'success',
      });
    },
  });
  const initialValue = {
    content: '',
  };
  const validationSchema = Yup.object().shape({
    content: Yup.string('Isi harus berupa teks'),
  });

  const handleSubmit = (values, action) => {
  
    const payload = {
      user_id,
      post_id : postId,
      content: values.content,
    };

// return console.log (payload);

    mutate(payload);
    if (isError) {
      return toast({
        title: 'Post Comment Successfull',
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
                  <Button
                type="submit"
                disabled={isSubmitting || !isValid || !dirty}
              >
                <SquarePen size="18px" style={{ marginRight: '8px' }} /> Submit
              </Button>
                </div>
              )}
            </Field>
            
          </div>
        </Form>
      )}
    </Formik>
  );
}
