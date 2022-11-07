import { v4 as uuidv4 } from "uuid";
const Data = {
  filterList: [
    {
      id: 1,
      title: "موضوع",
      active: true,
      filterServices: [
        { id: uuidv4(), title: "Javascript", total: 110, checked: false },
        { id: uuidv4(), title: "PHP", total: 20, checked: false },
        { id: uuidv4(), title: "Laravel", total: 10, checked: false },
        { id: uuidv4(), title: "Spring", total: 1, checked: false },
        { id: uuidv4(), title: "Java", total: 18, checked: false },
        { id: uuidv4(), title: "#C", total: 16, checked: false },
        { id: uuidv4(), title: "React", total: 46, checked: false },
        { id: uuidv4(), title: "Node.Js", total: 35, checked: false },
        { id: uuidv4(), title: "Django", total: 31, checked: false },
        { id: uuidv4(), title: "Python", total: 32, checked: false },
        { id: uuidv4(), title: "HTML", total: 140, checked: false },
        { id: uuidv4(), title: "CSS", total: 150, checked: false },
        { id: uuidv4(), title: "WordPress", total: 191, checked: false },
        { id: uuidv4(), title: "Angular", total: 70, checked: false },
        { id: uuidv4(), title: "Vue", total: 90, checked: false },
      ],
    },
    {
      id: 2,
      title: "سطح",
      active: false,
      filterServices: [
        { id: uuidv4(), title: "همه", total: 1000, checked: false },
        { id: uuidv4(), title: "ساده", total: 1000, checked: false },
        { id: uuidv4(), title: "حد واسط", total: 230, checked: false },
        { id: uuidv4(), title: "پیشرفته", total: 56, checked: false },
      ],
    },
    {
      id: 3,
      title: "رتبه بندی",
      active: false,
      filterServices: [
        { id: uuidv4(), rate: 3.4, total: 1000, checked: false },
        { id: uuidv4(), rate: 3.2, total: 1000, checked: false },
        { id: uuidv4(), rate: 3.1, total: 1000, checked: false },
        { id: uuidv4(), rate: 3.7, total: 1000, checked: false },
      ],
    },
    {
      id: 4,
      title: "مدت زمان دوره",
      active: false,
      filterServices: [
        { id: uuidv4(), duration: "1 ماه", total: 10000, checked: false },
        { id: uuidv4(), duration: "3 ماه", total: 20000, checked: false },
        { id: uuidv4(), duration: "6 ماه", total: 30000, checked: false },
        { id: uuidv4(), duration: "9 ماه", total: 40000, checked: false },
      ],
    },
    {
      id: 5,
      title: "حدود قیمت",
      active: false,
      filterServices: [
        { id: uuidv4(), title: "پولی", total: 3000, checked: false },
        { id: uuidv4(), title: "رایگان", total: 200, checked: false },
      ],
    },
  ],
};

export default Data;

// export const getCourse = (id) => {
//   return Data.courses.find((item) => item.id === id);
// };
