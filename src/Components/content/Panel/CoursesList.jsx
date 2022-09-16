import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import DashCourses from '../../../Core/services/Fake Service/DashCourses';
import PanelTable from './PanelTable';
const CoursesList = () => {
  return (
    <PanelTable
      data={DashCourses}
      icon={<FaTrashAlt className="mx-auto" />}
    />
  );
};

export default CoursesList;
