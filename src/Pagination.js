import React from 'react';

function Pagination({ currentPage, totalPages }) {
  return (
    <div className="pagination">
      Page {currentPage} out of {totalPages}
    </div>
  );
}

export default Pagination;
