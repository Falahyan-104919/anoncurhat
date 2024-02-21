import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { User } from 'lucide-react';

export default function PostListContainer() {
  const { id }  = useParams ();
    const {isLoading, data} = useMutation ();
  return (
    <div className="bg-black justify-center h-[1200px]">
            <div className="flex justify-center h-screen pt-20">
            <div className="bg-white bg-opacity-90 pt-10 pl-10 h-screen w-screen ">
                <div className="flex ">
                <User size="40px" />
          <div className="flex flex-col">
          </div>
          <div className="flex items-center ml-4"> {/* Adjust the margin as needed */}
          <span className="text-black">Username</span>
          </div>
          
            </div>
            <div className="mt-2 p-5 ">
            <textarea
              className="w-full h-20 border rounded p-2 h-[200px]"
              placeholder="Write your comment..."
            />
            </div>
            <div className="flex pl-20 pt-10 ">
                <User size="40px" />
          <div className="flex flex-col">
          </div>
          <div className="flex items-center ml-4"> {/* Adjust the margin as needed */}
          <span className="text-black">Commentator</span>
          </div>
            </div>
            <div className="mt-2 pl-20 pt-5 pr-5 ">
            <textarea
              className="w-full border rounded p-2 h-[100px]"
              placeholder="Write your comment..."
            />
            </div>
            </div>
            </div>
        
        </div>
     
  );
}