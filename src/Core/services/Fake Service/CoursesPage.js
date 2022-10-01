import { v4 as uuidv4 } from "uuid";
const Data = {
  courses: [
    {
      id: 1,
      title: "دوره تخصصی جمشید کَل",
      description:
        "با برگزاری دوباره دوره انگولار خود را در مسیری که انتخاب کردید به سمت موفقیت در فریمورک آنگولار سوق دهید. این دوره ...",
      teacher: "مازیار قلی پور",
      lesson: 180,
      likeCount: 3,
      date: "2001-02-12",
      price: "999999",
      numberOfStudents: 50,
      archive: "پُگ شده",
      image: require("../../../Assets/alexander-shatov.jpg"),
      level: "همه سطح",
      view: 190,
      hour: 42.5,
    },
    {
      id: 2,
      title: "دوره تخصصی تقی کُمیسر",
      description:
        "با برگزاری دوباره دوره انگولار خود را در مسیری که انتخاب کردید به سمت موفقیت در فریمورک آنگولار سوق دهید. این دوره ...",
      teacher: "مازیار قلی پور",
      lesson: 180,
      likeCount: 2.1,
      date: "1984-02-04",
      price: "999999",
      numberOfStudents: 50,
      archive: "تکمیل شده",
      image: require("../../../Assets/img/htmlback.jpg"),
      level: "ساده",
      view: 180,
      hour: 42.5,
    },
    {
      id: 3,
      title: "دوره تخصصی احمدی نژاد",
      description:
        "با برگزاری دوباره دوره انگولار خود را در مسیری که انتخاب کردید به سمت موفقیت در فریمورک آنگولار سوق دهید. این دوره ...",
      teacher: "مازیار قلی پور",
      lesson: 180,
      likeCount: 5,
      price: "999999",
      date: "1994-02-12",
      numberOfStudents: 50,
      archive: "آرشیو شده",
      image: require("../../../Assets/img/cssback.jpg"),
      level: "پیشرفته",
      view: 110,
      hour: 42.5,
    },
    {
      id: 4,
      title: "دوره تخصصی علی خوش بخت",
      description:
        "با برگزاری دوباره دوره انگولار خود را در مسیری که انتخاب کردید به سمت موفقیت در فریمورک آنگولار سوق دهید. این دوره ...",
      teacher: "مازیار قلی پور",
      lesson: 180,
      likeCount: 2.8,
      date: "1980-01-12",
      price: "999999",
      numberOfStudents: 50,
      archive: "ضپط شده",
      image: require("../../../Assets/img/nodejsback.png"),
      level: "نرمال",
      view: 140,
      hour: 42.5,
    },
    {
      id: 5,
      title: "دوره عمومی حاج حسن کریمی",
      description:
        "با برگزاری دوباره دوره انگولار خود را در مسیری که انتخاب کردید به سمت موفقیت در فریمورک آنگولار سوق دهید. این دوره ...",
      teacher: "مازیار قلی پور",
      lesson: 180,
      likeCount: 2.7,
      date: "1990-02-12",
      price: "999999",
      numberOfStudents: 50,
      archive: "وجی شده",
      image: require("../../../Assets/img/maxresdefault.jpg"),
      level: "نرمال",
      view: 130,
      hour: 42.5,
    },
    {
      id: 6,
      title: "دوره تخصصی سید کبیر کوچک نژاد",
      description:
        "با برگزاری دوباره دوره انگولار خود را در مسیری که انتخاب کردید به سمت موفقیت در فریمورک آنگولار سوق دهید. این دوره ...",
      teacher: "مازیار قلی پور",
      lesson: 180,
      likeCount: 4.8,
      date: "1985-02-12",
      price: "999999",
      numberOfStudents: 50,
      archive: "کُمیسر شده",
      image: require("../../../Assets/img/react-hooks.png"),
      level: "نرمال",
      view: 100,
      hour: 42.5,
    },
    {
      id: 7,
      title: "دوره عمومی ناصر نصاب",
      description:
        "با برگزاری دوباره دوره انگولار خود را در مسیری که انتخاب کردید به سمت موفقیت در فریمورک آنگولار سوق دهید. این دوره ...",
      teacher: "مازیار قلی پور",
      lesson: 180,
      likeCount: 1.3,
      date: "1980-02-12",
      price: "999999",
      numberOfStudents: 50,
      archive: "بخت چه",
      image: require("../../../Assets/img/csharp.JPG"),
      level: "نرمال",
      view: 200,
      hour: 42.5,
    },
    {
      id: 8,
      title: "دوره عمومی چنگیز چنگال",
      description:
        "با برگزاری دوباره دوره انگولار خود را در مسیری که انتخاب کردید به سمت موفقیت در فریمورک آنگولار سوق دهید. این دوره ...",
      teacher: "مازیار قلی پور",
      lesson: 180,
      likeCount: 0.6,
      date: "1980-02-12",
      price: "999999",
      numberOfStudents: 50,
      archive: "بخت چه",
      image: require("../../../Assets/img/nativeimg.JPG"),
      level: "نرمال",
      view: 200,
      hour: 42.5,
    },
  ],
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
      title: "مدت زمان ویدیو",
      active: false,
      filterServices: [
        { id: uuidv4(), start: 0, end: 1, total: 10000, checked: false },
        { id: uuidv4(), start: 1, end: 3, total: 20000, checked: false },
        { id: uuidv4(), start: 3, end: 6, total: 30000, checked: false },
        { id: uuidv4(), start: 6, end: 17, total: 40000, checked: false },
        { id: uuidv4(), start: 17, total: 50000, checked: false },
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

export const getCourse = (id) => {
  return Data.courses.find((item) => item.id === id);
};
