import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import DashCourses from '../../../Core/services/Fake Service/DashCourses';
import PanelHeader from './PanelHeader';
import PanelTable from './PanelTable';
const CoursesList = () => {
  const [filteredCourses, setFilteredCourses] = useState(DashCourses);
  const handleSearch = (arr) => {
    setFilteredCourses(arr);
  };
  return (
    <div className="px-3 md:px-5">
      <PanelHeader data={DashCourses} onSearch={handleSearch} />
      <PanelTable
        data={filteredCourses}
        icon={<FaTrashAlt className="mx-auto" />}
      />
    </div>
  );
};

export default CoursesList;
