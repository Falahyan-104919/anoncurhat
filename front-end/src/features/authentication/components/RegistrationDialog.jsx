import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import RegistrationForm from './RegistrationForm';

export default function RegistrationDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Sign Up</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Register</DialogTitle>
        </DialogHeader>
        <RegistrationForm />
      </DialogContent>
    </Dialog>
  );
}
