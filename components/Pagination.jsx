import { useState } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [inputPage, setInputPage] = useState("");

  const handleGoToPage = () => {
    const page = Number(inputPage);
    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      onPageChange(page);
      setInputPage(""); // clear input after jump
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
      <div className="flex items-center gap-2">
        <button
          className="px-4 py-2 border rounded hover:bg-gray-500 disabled:opacity-50"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ← Prev
        </button>
        <span className="text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 border rounded hover:bg-gray-500 disabled:opacity-50"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </div>

      {/* Go to Page Input */}
      <div className="flex items-center gap-2">
        <input
          type="number"
          min="1"
          max={totalPages}
          value={inputPage}
          onChange={(e) => setInputPage(e.target.value)}
          className="border rounded px-2 py-1 w-20 text-center"
          placeholder="Page"
        />
        <button
          onClick={handleGoToPage}
          className="px-3 py-1 border rounded bg-violet-600 text-white hover:bg-violet-700"
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default Pagination;
