import React, { useState } from 'react';
import DashCourses from '../../../Core/services/Fake Service/DashMyCourses';
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
  const handleNext = () => {
    const pagesCount = Math.ceil(allCourses.length / pageSize);
    currentPage !== pagesCount &&
      setCurrentPage((currentPage) => currentPage + 1);
  };

  const handlePrev = () => {
    currentPage !== 1 &&
      setCurrentPage((currentPage) => currentPage - 1);
  };

  const handleDelete = (id) => {
    setAllCourses(allCourses.filter((course) => course.id !== id));
  };

  const courses = paginate(allCourses, currentPage, pageSize);
  return (
    <div className="px-3 md:px-5">
      <PanelHeader data={DashCourses} onSearch={handleSearch} />
      <PanelTable data={courses} onDelete={handleDelete} />
      <Pagination
        itemsCount={allCourses.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default MyCourses;
