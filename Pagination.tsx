interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 border rounded-md disabled:opacity-50 hover:bg-gray-100 transition">Previous</button>
      <span className="px-4 py-2 text-gray-700 font-medium">Page {currentPage} of {totalPages}</span>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 border rounded-md disabled:opacity-50 hover:bg-gray-100 transition">Next</button>
    </div>
  );
}