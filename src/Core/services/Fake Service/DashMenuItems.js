import { v4 as uuidv4 } from 'uuid';
import { BsFillGridFill, BsFillPlayCircleFill } from 'react-icons/bs';
import {
  FaClipboardList,
  FaUserEdit,
  FaTimesCircle,
} from 'react-icons/fa';
const Data = [
  {
    id: uuidv4(),
    icon: <BsFillGridFill className="" />,
    title: 'داشبورد',
    path: '',
  },
  {
    id: uuidv4(),
    icon: <BsFillPlayCircleFill />,
    title: 'دوره های من',
    path: 'myCourses',
  },
  {
    id: uuidv4(),
    icon: <FaClipboardList />,
    title: 'لیست دوره ها',
    path: 'courseList',
  },
  {
    id: uuidv4(),
    icon: <FaUserEdit />,
    title: 'ویرایش پروفایل',
    path: 'editProfile',
  },
  {
    id: uuidv4(),
    icon: <FaTimesCircle />,
    title: 'خروج',
    path: 'fff',
  },
];

export default Data;
