import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { SquarePen } from 'lucide-react';
import CreateCurhatForm from './CreateCurhatForm';
import { useState } from 'react';

export default function CreateCurhatDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" onClick={handleModal}>
          <SquarePen style={{ marginRight: '8px' }} />
          Post Curhat
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] h-[325px]">
        <DialogHeader>
          <DialogTitle>New Curhat</DialogTitle>
        </DialogHeader>
        <CreateCurhatForm toggleOff={handleModal} />
      </DialogContent>
    </Dialog>
  );
}
