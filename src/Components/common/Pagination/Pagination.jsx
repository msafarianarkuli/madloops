import React from 'react';
import _ from 'lodash';
const Pagination = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
  onNext,
  onPrev,
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1 || pagesCount === 0) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <nav className="flex justify-center py-4 mt-10">
      <ul className="flex">
        <li>
          <a onClick={onPrev} className="pagination-prev">
            قبلی
          </a>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <a
              className={`pagination-item  ${
                currentPage === page
                  ? 'pagination-active'
                  : 'pagination-hover'
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}

        <li>
          <a onClick={onNext} className="pagination-next">
            بعدی
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
