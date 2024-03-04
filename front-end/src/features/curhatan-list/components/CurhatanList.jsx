import CurhatanCard from './CurhatanCard';
import CurhatanCardSekeleton from './CurhatanCardSkeleton';


export default function CurhatanList({ loading, data }) {
  return !loading ? (
    data['posts'].map((items, index) => {
      return <CurhatanCard key={index} post={items} />;
    })
  ) : (
    <CurhatanCardSekeleton />
    
  );
}
