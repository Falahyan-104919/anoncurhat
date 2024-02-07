import CurhatanCard from './CurhatanCard';
import { useQuery } from '@tanstack/react-query';
import getCurhatan from '../hooks/getCurhatan';
import CurhatanCardSekeleton from './CurhatanCardSkeleton';

export default function CurhatanList() {
  const { data, isLoading } = useQuery({
    queryKey: ['curhatan'],
    queryFn: getCurhatan,
  });
  return (
    <div className="flex flex-row flex-wrap flex-grow-0 p-8 gap-8 items-center justify-center bg-zinc-950">
      {isLoading ? (
        data['posts'].map((items, index) => {
          return <CurhatanCard key={index} post={items} />;
        })
      ) : (
        <CurhatanCardSekeleton />
      )}
    </div>
  );
}
