interface PaginationProps {
    currentPage: number;
    setCurrentPage: (page: number) => void;
  }
  
  const Pagination: React.FC<PaginationProps> = ({ currentPage, setCurrentPage }) => {
    return (
      <div className="flex justify-center mt-6">
        <button
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-l disabled:opacity-50"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-r ml-2"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;