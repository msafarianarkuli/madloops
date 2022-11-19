import { v4 as uuidv4 } from 'uuid';
const Data = {
  filterList: [
    {
      id: 1,
      title: 'موضوع',
      active: true,
      filterServices: [
        {
          id: 101,
          title: 'javascript',
          total: 110,
          checked: false,
        },
        { id: 102, title: 'php', total: 20, checked: false },
        { id: 103, title: 'laravel', total: 10, checked: false },
        { id: 104, title: 'spring', total: 1, checked: false },
        { id: 105, title: 'java', total: 18, checked: false },
        { id: 106, title: '#c', total: 16, checked: false },
        { id: 107, title: 'react', total: 46, checked: false },
        { id: 108, title: 'node js', total: 35, checked: false },
        { id: 109, title: 'django', total: 31, checked: false },
        { id: 110, title: 'python', total: 32, checked: false },
        { id: 111, title: 'html', total: 140, checked: false },
        { id: 112, title: 'css', total: 150, checked: false },
        {
          id: 113,
          title: 'wordpress',
          total: 191,
          checked: false,
        },
        { id: 114, title: 'angular', total: 70, checked: false },
        { id: 115, title: 'vue', total: 90, checked: false },
      ],
    },
    {
      id: 2,
      title: 'سطح',
      active: false,
      filterServices: [
        { id: uuidv4(), title: 'همه', total: 1000, checked: false },
        { id: uuidv4(), title: 'ساده', total: 1000, checked: false },
        {
          id: uuidv4(),
          title: 'حد واسط',
          total: 230,
          checked: false,
        },
        { id: uuidv4(), title: 'پیشرفته', total: 56, checked: false },
      ],
    },
    {
      id: 3,
      title: 'رتبه بندی',
      active: false,
      filterServices: [
        { id: uuidv4(), title: 3.4, total: 1000, checked: false },
        { id: uuidv4(), title: 3.2, total: 1000, checked: false },
        { id: uuidv4(), title: 3.1, total: 1000, checked: false },
        { id: uuidv4(), title: 3.7, total: 1000, checked: false },
      ],
    },
    {
      id: 4,
      title: 'مدت زمان دوره',
      active: false,
      filterServices: [
        {
          id: uuidv4(),
          title: '1 ماه',
          total: 10000,
          checked: false,
        },
        {
          id: uuidv4(),
          title: '3 ماه',
          total: 20000,
          checked: false,
        },
        {
          id: uuidv4(),
          title: '6 ماه',
          total: 30000,
          checked: false,
        },
        {
          id: uuidv4(),
          title: '9 ماه',
          total: 40000,
          checked: false,
        },
      ],
    },
    {
      id: 5,
      title: 'حدود قیمت',
      active: false,
      filterServices: [
        { id: uuidv4(), title: '0', total: 3000, checked: false },
        { id: uuidv4(), title: '1', total: 200, checked: false },
      ],
    },
  ],
};

export default Data;

// export const getCourse = (id) => {
//   return Data.courses.find((item) => item.id === id);
// };
