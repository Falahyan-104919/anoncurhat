import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import axiosInstance from '@/utils/axios';
import { useMutation } from '@tanstack/react-query';
import { Upload } from 'lucide-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function FormProfilePicture() {
  const { user_id } = useSelector((state) => state.auth);
  const toast = useToast();
  const [profilePicture, setProfilePicture] = useState({});
  const { mutate } = useMutation({
    mutationKey: ['upload_profile_pic'],
    mutationFn: (value) => axiosInstance.post('/profile_picture', value),
    onSuccess: () => {
      toast({
        title: 'Upload Profile Pictures Successfull ✅',
        variant: 'success',
      });
    },
  });
  const submitProfilePic = async (file) => {
    const fd = new FormData();
    fd.append('profile_picture', file, file.name);
    console.log(fd);
    return mutate(fd);
  };
  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-8 tracking-tight">
        Upload Profile Picture
      </h2>
      <div className="flex items-center border-b pb-8 border-zinc-700 gap-8">
        <Avatar className="h-40 w-40">
          {profilePicture.name ? (
            <AvatarImage
              src={URL.createObjectURL(profilePicture)}
              alt="Profile Picture"
            />
          ) : (
            <AvatarImage
              src={
                `http://localhost:8888/public/img/profile_picture/${user_id}.webp` ||
                '/image_placeholder.webp'
              }
              alt="Profile Picture"
            />
          )}
          <AvatarFallback>PP</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-4">
          <Label htmlFor="profile_picture">Select File</Label>
          <div className="flex gap-4">
            <Input
              name="profile_picture"
              type="file"
              accept="image/*"
              className="max-w-[160px]"
              onChange={(e) => setProfilePicture(e.target.files[0])}
            />
            <Button
              variant="secondary"
              disabled={!profilePicture.name}
              onClick={() => submitProfilePic(profilePicture)}
            >
              <Upload style={{ marginRight: '8px' }} />
              Upload
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
