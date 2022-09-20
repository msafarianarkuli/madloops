import React, { useState } from 'react';
import DashCourses from '../../../Core/services/Fake Service/DashCoursesList';
import DashUserCourses from '../../../Core/services/Fake Service/DashMyCourses';
import PanelHeader from './PanelHeader';
import PanelTable from './PanelTable';
import Pagination from '../../common/Pagination/Pagination';
import { paginate } from '../../../Core/utils/paginate';

const CoursesList = () => {
  const [allCourses, setAllCourses] = useState(DashCourses);
  const [userCourses, setUserCourses] = useState(DashUserCourses);
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
  const handleAdd = (course) => {
    console.log(course);
  };
  const courses = paginate(allCourses, currentPage, pageSize);
  return (
    <div className="px-3 md:px-5">
      <PanelHeader data={DashCourses} onSearch={handleSearch} />
      <PanelTable data={courses} onAdd={handleAdd} />
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

export default CoursesList;
