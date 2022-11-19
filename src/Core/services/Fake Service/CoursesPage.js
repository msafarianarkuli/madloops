import { v4 as uuidv4 } from "uuid";
const Data = {
  filterList: [
    {
      id: 1,
      title: "موضوع",
      active: true,
      filterServices: [
        {
          id: 101,
          title: "Javascript",
          total: 110,
          checked: false,
        },
        { id: 102, title: "PHP", checked: false },
        { id: 103, title: "Laravel", checked: false },
        { id: 104, title: "Spring", checked: false },
        { id: 105, title: "Java", checked: false },
        { id: 106, title: "#C", checked: false },
        { id: 107, title: "React", checked: false },
        { id: 108, title: "Node.Js", checked: false },
        { id: 109, title: "Django", checked: false },
        { id: 110, title: "Python", checked: false },
        { id: 111, title: "HTML", checked: false },
        { id: 112, title: "CSS", checked: false },
        {
          id: 113,
          title: "WordPress",

          checked: false,
        },
        { id: 114, title: "Angular", checked: false },
        { id: 115, title: "Vue", checked: false },
      ],
    },
    {
      id: 2,
      title: "مدت زمان دوره",
      active: false,
      filterServices: [
        {
          id: uuidv4(),
          title: "1 ماه",

          checked: false,
        },
        {
          id: uuidv4(),
          title: "3 ماه",

          checked: false,
        },
        {
          id: uuidv4(),
          title: "6 ماه",

          checked: false,
        },
        {
          id: uuidv4(),
          title: "9 ماه",

          checked: false,
        },
      ],
    },
    {
      id: 3,
      title: "حدود قیمت",
      active: false,
      filterServices: [
        { id: uuidv4(), title: "0", checked: false },
        { id: uuidv4(), title: "1", checked: false },
      ],
    },
  ],
};

export default Data;

// export const getCourse = (id) => {
//   return Data.courses.find((item) => item.id === id);
// };
