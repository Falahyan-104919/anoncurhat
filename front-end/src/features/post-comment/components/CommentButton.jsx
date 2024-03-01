import React from 'react';
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from '@tanstack/react-query';

const CommentReplyButton = ({ onClick }) => {
  return (
    <Button variant="reply" onClick={onClick}>
      Reply
    </Button>
  );
};

const CommentDeleteButton = ({ commentId, postId }) => {
  const queryClient = useQueryClient();

  const deleteComment = useMutation(
    async () => {
      await axiosInstance.delete(`/comments/${commentId}`);
    },
    {
      onSuccess: () => {
        // After successful deletion, refetch the comments to update the UI
        queryClient.invalidateQueries(['comments', postId]); // Invalidate the 'comments' query for the specific post
      },
    }
  );

  return (
    <Button
      variant="delete"
      onClick={() => deleteComment.mutate()}
      disabled={deleteComment.isLoading}
    >
      Delete
    </Button>
  );
};

export default CommentReplyButton; CommentDeleteButton;
