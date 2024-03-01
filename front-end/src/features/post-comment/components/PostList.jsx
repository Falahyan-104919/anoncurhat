import PostCard from './PostCard';
import PostCardSekeleton from './PostCardSkeleton';
import CurhatanCard from '@/features/curhatan-list/components/CurhatanCard';
import CurhatanCardSekeleton from '@/features/curhatan-list/components/CurhatanCardSkeleton';


export default function PostList({ loading, data }) {
  return !loading ? (
    data['posts'].map((items, index) => {
      return <PostCard key={index} post={items} />;
    })
  ) : (
    <PostCardSekeleton />
    
  );
}
