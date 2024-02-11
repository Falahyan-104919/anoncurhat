import { Button } from '@/components/ui/button';
import { MessageSquareText, ThumbsUp } from 'lucide-react';

export default function CurhatActionButton({ post }) {
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
        <Button size="sm">Read More</Button>
      </div>
    </div>
  );
}
