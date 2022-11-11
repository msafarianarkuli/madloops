import React, { useState, useEffect } from 'react';
import PanelTable from './PanelTable';
import PanelHeader from './PanelHeader';
import Pagination from '../../common/Pagination/Pagination';
import { paginate } from '../../../Core/utils/paginate';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../store/auth/authSlice';
import {
  useDeleteStudentFromCourseMutation,
  useGetCoursesQuery,
} from '../../../store/courses/coursesSlice';
import { toastifyToast } from '../../common/Toast/toast';
import { selectBookMarkItems } from '../../../store/bookmark/bookmarkSlice';
import { removeBookMark } from '../../../store/bookmark/bookmarkSlice';
import { selectSessionCurrentUser } from '../../../store/auth/authSessionSlice';

const MyBookMark = () => {
  const currentUser = useSelector(selectCurrentUser);
  const currentSessionUser = useSelector(selectSessionCurrentUser);
  const { data: allCourse, isLoading } = useGetCoursesQuery();
  const [
    deleteStudentFromCourse,
    { isSuccess, isError, error, isLoading: isLoad, data },
  ] = useDeleteStudentFromCourseMutation();

  const [count, setCount] = useState();
  const [pageSize, setPageSize] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const FavCourses = useSelector(selectBookMarkItems);
  const [myCourse, setMyCourse] = useState(FavCourses);
  const dispatch = useDispatch();

  useEffect(() => {
    const getCourseForUser = async () => {
      const studentInfo = currentUser || currentSessionUser;
      const response = await allCourse;

      const filteredData = response?.filter((row) => {
        const isInCourse = row.students.some(
          (student) => student._id === studentInfo._id
        );
        if (isInCourse) return row;
      });

      const paginateData = paginate(
        filteredData,
        currentPage,
        pageSize
      );
      const dataCount = filteredData?.length;
      setCount(dataCount);
      setMyCourse(paginateData);
    };
    getCourseForUser();
  }, [currentPage, isLoading]);

  useEffect(() => {
    if (isSuccess) {
      toastifyToast.success(data.message[0].message);
    }

    if (isError) {
      toastifyToast.error(error.data.message[0].message);
    }
  }, [isLoad]);

  const deleteCourse = async (courseId) => {
    await deleteStudentFromCourse({
      courseId: courseId,
      _id: currentUser?._id || currentSessionUser?._id,
    });

    setMyCourse((old) => {
      let newData = [...old];
      let newCoursesData = newData;
      newCoursesData = newCoursesData.filter(
        (item) => item._id !== courseId
      );
      newData = newCoursesData;
      return newData;
    });
  };

  const handleSearch = (arr) => {
    setCurrentPage(1);
    setMyCourse(arr);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log(page);
  };

  const handleNext = () => {
    const pagesCount = Math.ceil(myCourse.length / pageSize);
    currentPage !== pagesCount &&
      setCurrentPage((currentPage) => currentPage + 1);
  };

  const handlePrev = () => {
    currentPage !== 1 &&
      setCurrentPage((currentPage) => currentPage - 1);
  };

  const handleDelete = (id) => {
    dispatch(removeBookMark(id));
    const newFavs = myCourse.filter((course) => course._id !== id);
    setMyCourse(newFavs);
    console.log(id);
  };

  return (
    <div className="px-3 md:px-5">
      <PanelHeader data={FavCourses} onSearch={handleSearch} />
      <PanelTable data={myCourse} onDelete={handleDelete} />
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default MyBookMark;
