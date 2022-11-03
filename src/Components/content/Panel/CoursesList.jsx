import React, { useState } from "react";
import DashCourses from "../../../Core/services/Fake Service/DashCoursesList";
import DashUserCourses from "../../../Core/services/Fake Service/DashMyCourses";
import PanelHeader from "./PanelHeader";
import PanelTable from "./PanelTable";
import Pagination from "../../common/Pagination/Pagination";
import { paginate } from "../../../Core/utils/paginate";
import {
  useGetCoursesByPaginationQuery,
  useGetCoursesQuery,
} from "../../../store/courses/coursesSlice";

const CoursesList = () => {
  const {
    data: coursePagi,
    isLoading,
    isSuccess,
  } = useGetCoursesByPaginationQuery();
  const { date: allCourse } = useGetCoursesQuery();
  console.log(allCourse);
  const [allCourses, setAllCourses] = useState([]);
  const [pageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const handleSearch = (arr) => {
    setCurrentPage(1);
    setAllCourses(arr);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    const pagesCount = Math.ceil(allCourse.result.length / pageSize);
    currentPage !== pagesCount &&
      setCurrentPage((currentPage) => currentPage + 1);
  };

  const handlePrev = () => {
    currentPage !== 1 && setCurrentPage((currentPage) => currentPage - 1);
  };
  const handleAdd = (course) => {
    console.log(course);
  };
  const courses = paginate(allCourse, currentPage, pageSize);

  // const dataFetching = async () => {
  //   const response = await coursePagi(currentPage, pageSize);
  //   console.log(response);
  // };
  // dataFetching();
  return (
    <div className="px-3 md:px-5">
      <PanelHeader data={allCourse} onSearch={handleSearch} />
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
