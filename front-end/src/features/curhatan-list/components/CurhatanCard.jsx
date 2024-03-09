import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { calculateAge, capitalizeGender, getMoment } from '@/utils/helper';
import { User } from 'lucide-react';
import CurhatActionButton from './ActionButton';

export default function CurhatanCard({ post }) {
  console.log(post);
  if (!post || !post.User) {
    return null; // You can also render a placeholder or an error message
  }
  return (
    <Card className="flex flex-col justify-between h-[255px] max-w-[385px] mb-4">
      <CardHeader>
        <CardTitle className="flex gap-4 h-fit items-center">
          <User size="40px" />
          <div className="flex flex-col">
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
        <CurhatActionButton post={post} />
      </CardFooter>
    </Card>
  );
}
