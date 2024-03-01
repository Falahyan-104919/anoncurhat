import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MessageSquareText, ThumbsUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CurhatActionButton({ post }) {
  const navigate = useNavigate();
  const handleReadMoreClick = () => {
    console.log(post, "curhatactionbutton" );
    navigate(`/post/${post.id_post}`);
  };


  return (
    <div className="flex justify-between flex-grow">
      <div className="flex gap-4">
        <Button variant="like">
          <div className="flex items-center gap-2 text-md">
            <ThumbsUp size="24px" />
            {post.count_likes}
          </div>
        </Button>
        <Button variant="like">
          <div className="flex items-center gap-2 text-md">
            <MessageSquareText size="24px" />
            {post.count_comments}
          </div>
        </Button>
      </div>
      <div>
        <Dialog>
          <DialogTrigger asChild>
          <Button size="sm" onClick={handleReadMoreClick}>Read More</Button>
          </DialogTrigger>
         

        </Dialog>
       
      </div>
    </div>
  );
}
