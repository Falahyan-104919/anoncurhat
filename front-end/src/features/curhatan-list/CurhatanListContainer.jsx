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
    <div className="grid grid-cols-3 sm:flex-row gap-8 p-16 items-center h-full bg-zinc-950">
      <CurhatanList loading={isLoading} data={data} />
      <div className="col-span-3 sm:w-full">
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
