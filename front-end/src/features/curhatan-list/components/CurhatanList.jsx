import CurhatanCard from './CurhatanCard';
import CurhatanCardSekeleton from './CurhatanCardSkeleton';

<<<<<<< HEAD
export default function CurhatanList() {
  const { data, isLoading } = useQuery({
    queryKey: ['curhatan'],
    queryFn: getCurhatan,
  });
  return (
    <div className="flex flex-row flex-wrap flex-grow-0 p-8 gap-8 items-center justify-center bg-zinc-950">
      {!isLoading ? (
        data['posts'].map((items, index) => {
          return <CurhatanCard key={index} post={items} />;
        })
      ) : (
        <CurhatanCardSekeleton />
      )}
    </div>
=======
export default function CurhatanList({ loading, data }) {
  return !loading ? (
    data['posts'].map((items, index) => {
      return <CurhatanCard key={index} post={items} />;
    })
  ) : (
    <CurhatanCardSekeleton />
>>>>>>> 1a6524bc813ae0d5a97dcc92d1c27ec7e284cd63
  );
}
