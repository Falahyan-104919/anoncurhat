import { useQuery } from '@tanstack/react-query';
import CurhatanList from './components/CurhatanList';
import getCurhatan from './hooks/getCurhatan';
import CustPagination from './components/Pagination';
import { useLocation } from 'react-router-dom';

export default function CurhatanListContainer() {
  const location = useLocation();
  const pageParams = new URLSearchParams(location.search);
  const currentPage = parseInt(pageParams.get('page'), 10) || 1;
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['curhatan', currentPage],
    queryFn: () => getCurhatan(currentPage),
  });
  const totalPages = data?.totalPages;
  return (
    <div className="grid grid-cols-3 sm:flex-row gap-8 p-16 items-center h-max bg-zinc-950">
      <CurhatanList loading={isLoading} data={data} />
      <div className="col-span-3 sm:w-full">
        <CustPagination
          totalPages={totalPages}
          currentPage={currentPage}
          toggleRefetch={refetch}
        />
      </div>
    </div>
  );
}
