import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import DashCourses from '../../../Core/services/Fake Service/DashCourses';
import PanelTable from './PanelTable';
import PanelHeader from './PanelHeader';
import Pagination from '../../common/Pagination/Pagination';
import { paginate } from '../../../Core/utils/paginate';
const MyCourses = () => {
  const [allCourses, setAllCourses] = useState(DashCourses);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const handleSearch = (arr) => {
    setCurrentPage(1);
    setAllCourses(arr);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const next = () => {
    const pagesCount = Math.ceil(allCourses.length / pageSize);
    currentPage !== pagesCount &&
      setCurrentPage((currentPage) => currentPage + 1);
  };

  const prev = () => {
    currentPage !== 1 &&
      setCurrentPage((currentPage) => currentPage - 1);
  };

  const courses = paginate(allCourses, currentPage, pageSize);
  return (
    <div className="px-3 md:px-5">
      <PanelHeader data={DashCourses} onSearch={handleSearch} />
      <PanelTable
        data={courses}
        icon={<FaTrashAlt className="mx-auto" />}
      />
      <Pagination
        itemsCount={allCourses.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onNext={next}
        onPrev={prev}
      />
    </div>
  );
};

export default MyCourses;
