import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import DashCourses from '../../../Core/services/Fake Service/DashCourses';
import PanelHeader from './PanelHeader';
import PanelTable from './PanelTable';
const CoursesList = () => {
  return (
    <div className="px-3 md:px-5">
      <PanelHeader />
      <PanelTable
        data={DashCourses}
        icon={<FaTrashAlt className="mx-auto" />}
      />
    </div>
  );
};

export default CoursesList;
