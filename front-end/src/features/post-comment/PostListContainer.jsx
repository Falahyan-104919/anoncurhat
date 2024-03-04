import { useMutation } from '@tanstack/react-query';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { calculateAge, capitalizeGender, getMoment } from '@/utils/helper';
import { useParams } from 'react-router-dom';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MessageSquareText, ThumbsUp } from 'lucide-react';

import axiosInstance from '@/utils/axios';
import CreateCommentForm from './components/CreateCommentForm';


export default function PostListContainer() {
  const { id }  = useParams ();
  console.log('Current id:', id);

  const { isLoading: postLoading, data: postData, error: postError } = useQuery({
    queryKey: ['post', id],
    queryFn: async () => {
      const result = await axiosInstance.get(`/posts/${id}`);
      return result.data;
    },
  });

  const {
    data: commentsData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['comments', id],
    queryFn: async ({ pageParam = 1 }) => {
      const result = await axiosInstance.get(`/comments?post_id=${id}&page=${pageParam}`);
      return result.data;
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasNextPage ? allPages.length + 1 : null;
    },
  });

  if (postLoading || commentsData === undefined) {
    return <div>Loading...</div>;
  }

  if (postError) {
    return <div>Error fetching post: {postError.message}</div>;
  }

  const post = postData;
  const comments = commentsData.pages.flat(); 


  console.log(post, 'debug gery')
  

  return (
    <div className="bg-black h-fit-screen pb-16">
{/* Post */}      
    <Card className="flex flex-col justify-between max-w-[90%] mx-auto rounded-lg bg-white bg-opacity-80">
      <CardHeader>
        <CardTitle className="flex gap-4 h-fit items-center">
          <User size="40px" />
          <div className="flex flex-col">
            <div>
              {capitalizeGender(post['User'].username)}
            </div>
            <div>
            {capitalizeGender(post['User'].gender)}
            {calculateAge(post['User'].date_of_birth)}
            </div>
            <div className="text-sm text-gray-500">
              {getMoment(post['createdAt'])}
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="line-clamp-3">{post.content}</div>
      </CardContent>
      <CardFooter className="flex items-center border-t-2 border-slate-500 border-solid">
      <div>
            <Button variant="like">
              <div className="flex items-center gap-2 text-md">
                <ThumbsUp size="24px" />
                {post.count_likes}
              </div>
            </Button>
          </div>
      </CardFooter>
    </Card>

{/* input comment */}
    <Card className="max-w-[90%] mx-auto mt-4">
        <CardHeader>
          <CardTitle>Comments</CardTitle>
        </CardHeader>
        <CardContent>
          <CreateCommentForm postId={id} />
          
        </CardContent>
      </Card>

{/* comment box result */}
    {comments.map((comment) => (
        <Card key={comment.id_comment} className="mt-4 justify-between max-w-[90%] mx-auto rounded-lg bg-white bg-opacity-80">
          <CardHeader>
            <CardTitle className="flex gap-4 h-fit items-center">
            <User size="40px" />
          <div className="flex flex-col">
              <span>{comment.User.username}</span>
              <span>{calculateAge(comment.User.date_of_birth)}</span>
              <span>{capitalizeGender(comment.User.gender)}</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>{comment.content}</div>
          </CardContent>
{/* comment button (like, reply, delete) */}
          
        </Card>
      ))}
    
    </div>
  );
}



 