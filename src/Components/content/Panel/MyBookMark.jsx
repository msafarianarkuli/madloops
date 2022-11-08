import React, { useState, useEffect } from 'react';
import PanelTable from './PanelTable';
import PanelHeader from './PanelHeader';
import Pagination from '../../common/Pagination/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { selectBookMarkItems } from '../../../store/bookmark/bookmarkSlice';
import { removeBookMark } from '../../../store/bookmark/bookmarkSlice';
import { paginate } from '../../../Core/utils/paginate';

const MyBookMark = () => {
  const [count, setCount] = useState();
  const [pageSize, setPageSize] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const FavCourses = useSelector(selectBookMarkItems);
  const [myCourse, setMyCourse] = useState(FavCourses);
  const dispatch = useDispatch();

  useEffect(() => {
    const paginateData = paginate(myCourse, currentPage, pageSize);
    const dataCount = myCourse?.length;
    setCount(dataCount);
    setMyCourse(paginateData);
  }, [currentPage]);

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
