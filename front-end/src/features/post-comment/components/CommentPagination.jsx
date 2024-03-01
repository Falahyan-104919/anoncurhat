import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from '@/components/ui/pagination';



{/* Pagination */}
<Pagination className="mt-4">
<PaginationContent>
  <PaginationPrevious
    onClick={() => fetchNextPage()}
    disabled={!hasNextPage || isFetchingNextPage}
  />
  <PaginationNext
    onClick={() => fetchNextPage()}
    disabled={!hasNextPage || isFetchingNextPage}
  />
</PaginationContent>
</Pagination>