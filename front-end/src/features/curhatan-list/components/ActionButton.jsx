import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import axiosInstance from '@/utils/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MessageSquareText, ThumbsDown, ThumbsUp } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function CurhatActionButton({ post }) {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const navigate = useNavigate();
  const handleReadMoreClick = () => {
    navigate(`/post/${post.id_post}`);
  };
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { mutate } = useMutation({
    mutationKey: ['like-post', post.id_post],
    mutationFn: (id) => axiosInstance.post('likes', { post_id: id }),
    onSuccess: () => {
      queryClient.invalidateQueries(['newest_curhatan', 'hottest_curhatan']);
      return toast({
        title: 'Like Post Successfully!',
        variant: 'success',
      });
    },
    onError: (err) => {
      return toast({
        title: 'Failed to Like Post!',
        description: `${err.response.data.message}`,
        variant: 'error',
      });
    },
  });

  return (
    <div className="flex justify-between flex-grow">
      <div className="flex gap-4">
        {post['Likes'].length === 0 ? (
          <Button
            variant="like"
            disabled={!isLoggedIn}
            onClick={() => mutate(post.id_post)}
          >
            <div className="flex items-center gap-2 text-md">
              <ThumbsUp size="24px" />
              {post.count_likes}
            </div>
          </Button>
        ) : (
          <Button
            variant="like"
            disabled={!isLoggedIn}
            onClick={() => mutate(post.id_post)}
          >
            <div className="flex items-center gap-2 text-md">
              <ThumbsDown size="24px" />
              {post.count_likes}
            </div>
          </Button>
        )}
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
            <Button size="sm" onClick={handleReadMoreClick}>
              Read More
            </Button>
          </DialogTrigger>
        </Dialog>
      </div>
    </div>
  );
}
