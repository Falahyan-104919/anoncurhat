import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getMoment } from '@/utils/helper';
import { User } from 'lucide-react';
import UserAvatar from './UserAvatar';

export default function CommentCard({ user, comment }) {
  return (
    <Card
      key={comment.id_comment}
      className="mt-4 justify-between max-w-[90%] mx-auto rounded-lg bg-white bg-opacity-80"
    >
      <CardHeader>
        <CardTitle className="flex gap-4 h-fit items-center">
          <UserAvatar id={user.id_user} />
          <div className="flex flex-col">
            <span>{user.username}</span>
            <h2 className="text-xs font-bold tracking-tight">
              {getMoment(comment.createdAt)}
            </h2>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>{comment.content}</div>
      </CardContent>
    </Card>
  );
}
