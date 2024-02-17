import { useQuery } from '@tanstack/react-query';
import CurhatanList from './components/CurhatanList';
import getCurhatan from './hooks/getCurhatan';
import CustPagination from './components/NewestPagination';
import { useLocation } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, History } from 'lucide-react';
import NewestPagination from './components/NewestPagination';
import HottestPagination from './components/HottestPagination';

export default function CurhatanListContainer() {
  const location = useLocation();
  const pageParams = new URLSearchParams(location.search);
  const currentPage = parseInt(pageParams.get('page'), 10) || 1;
  const {
    data: newest,
    isLoading: loadingNewest,
    refetch: refetchNewest,
  } = useQuery({
    queryKey: ['newest_curhatan', currentPage],
    queryFn: () => getCurhatan(currentPage, 'newest'),
  });
  const {
    data: hottest,
    isLoading: loadingHottest,
    refetch: refetchHottest,
  } = useQuery({
    queryKey: ['hottest_curhatan', currentPage],
    queryFn: () => getCurhatan(currentPage, 'hottest'),
  });
  const newestTotalPages = newest?.totalPages;
  const hottestTotalPages = hottest?.totalPages;
  return (
    <div className="flex justify-center bg-zinc-950">
      <Tabs defaultValue="newest">
        <div className="flex flex-grow justify-center">
          <TabsList>
            <TabsTrigger value="newest">
              <History style={{ marginRight: '8px' }} />
              Newest
            </TabsTrigger>
            <TabsTrigger value="hottest">
              <BarChart3 style={{ marginRight: '8px' }} />
              Hottest
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="newest">
          <div className="grid grid-cols-3 sm:flex-row gap-8 p-8 items-center">
            <CurhatanList loading={loadingNewest} data={newest} />
            <div className="col-span-3 sm:w-full">
              <NewestPagination
                totalPages={newestTotalPages}
                currentPage={currentPage}
                toggleRefetch={refetchNewest}
              />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="hottest">
          <div className="grid grid-cols-3 sm:flex-row gap-8 p-8 items-center">
            <CurhatanList loading={loadingHottest} data={hottest} />
            <div className="col-span-3 sm:w-full">
              <HottestPagination
                totalPages={hottestTotalPages}
                currentPage={currentPage}
                toggleRefetch={refetchHottest}
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
