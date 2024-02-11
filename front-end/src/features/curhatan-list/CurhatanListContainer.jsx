import { useQuery } from '@tanstack/react-query';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import CurhatanList from './components/CurhatanList';
import getCurhatan from './hooks/getCurhatan';

export default function CurhatanListContainer() {
  const { data, isLoading } = useQuery({
    queryKey: ['curhatan'],
    queryFn: getCurhatan,
  });
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 p-16 items-center h-fit bg-zinc-950 ">
      <CurhatanList loading={isLoading} data={data} />
      <div className="col-span-3">
        <Pagination>
          <PaginationContent className="bg-white">
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
