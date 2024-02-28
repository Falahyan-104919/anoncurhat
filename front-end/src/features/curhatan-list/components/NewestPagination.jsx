import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function NewestPagination({
  totalPages,
  currentPage,
  toggleRefetch,
}) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    console.log('clicked handle page change', page);
    navigate(`/newest?page=${page}`);
    queryClient.invalidateQueries(['curhatan', page]);
    toggleRefetch();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePreviousPage = (page) => {
    if (page == 0) return;
    console.log('clicked handle prev', page);
    navigate(`/newest?page=${page}`);
    queryClient.invalidateQueries(['curhatan', page]);
    toggleRefetch();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextPage = (page) => {
    if (page == totalPages + 1) return;
    console.log('clicked handle next', page);
    navigate(`/newest?page=${page}`);
    queryClient.invalidateQueries(['curhatan', page]);
    toggleRefetch();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  let startPage = currentPage - 1;
  let endPage = currentPage + 1;

  if (currentPage <= 2) {
    startPage = 1;
    endPage = Math.min(3, totalPages);
  }
  if (currentPage >= totalPages - 1) {
    startPage = Math.max(totalPages - 2, 1);
    endPage = totalPages;
  }

  startPage = Math.max(startPage, 1);
  endPage = Math.min(endPage, totalPages);

  const pagesToDisplay = endPage - startPage + 1;

  if (pagesToDisplay < 1 || !Number.isInteger(pagesToDisplay)) {
    return null;
  }

  return (
    <Pagination>
      <PaginationContent className="bg-white rounded-sm">
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handlePreviousPage(currentPage - 1)}
          />
        </PaginationItem>
        {[...Array(pagesToDisplay)].map((_, index) => {
          const pageNumber = startPage + index;
          return (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                onClick={() => handlePageChange(pageNumber)}
                disabled={currentPage === pageNumber}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationNext onClick={() => handleNextPage(currentPage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
