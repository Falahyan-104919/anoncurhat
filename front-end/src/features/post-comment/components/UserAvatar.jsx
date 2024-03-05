import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function UserAvatar({ id }) {
  return (
    <Avatar className="h-[50px] w-[50px]">
      <AvatarImage
        src={
          `http://localhost:8888/public/img/profile_picture/${id}.webp` ||
          '/image_placeholder.webp'
        }
        alt="Profile Picture"
      />
      <AvatarFallback>PP</AvatarFallback>
    </Avatar>
  );
}
