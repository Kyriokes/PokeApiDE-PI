import style from './Pagination.module.css';

const Pagination = ({ thisPage, totalPages, pageChange }) => {
  const handlePrePage = () => {
    if (thisPage > 1) {
      pageChange(thisPage - 1);
    }
  };

  const handleNextPage = () => {
    if (thisPage < totalPages) {
      pageChange(thisPage + 1);
    }
  };

  const handlePageOnClick = (page) => {
    pageChange(page);
  };

  const displayedPages = [];
  const visiblePageCount = 9;

  const startPage = Math.max(1, thisPage - Math.floor(visiblePageCount / 2));
  const endPage = Math.min(startPage + visiblePageCount - 1, totalPages);

  return (
    <div className={style.container}>
      <button onClick={handlePrePage} disabled={thisPage === 1} className={style.pag}>
        Previous
      </button>
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map((page) => (
        <button
          className={style.pag}
          key={page}
          onClick={() => handlePageOnClick(page)}
          disabled={thisPage === page}
        >
          {page}
        </button>
      ))}
      <button onClick={handleNextPage} disabled={thisPage === totalPages} className={style.pag}>
        Next
      </button>
    </div>
  );
};

export default Pagination;