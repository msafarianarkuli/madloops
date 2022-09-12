import { BsFillCircleFill } from 'react-icons/bs';
import logo from '../../Assets/img/site-logo.png';
import { Button } from '../common/button-component/button.component';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-300 py-8 px-4 lg:px-28">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 divide-gray-400 md:divide-y-0">
        <div className="flex flex-col items-center pb-5">
          <div className="flex items-center">
            <img className="w-20" src={logo} alt="" />
            <p className="text-2xl">Mad Loops</p>
          </div>
          <p className="text-lg">تیم مد لوپس زیر نظر آکادمی بحر</p>
          <p className="font-bold text-xl mt-7 mb-2">
            اشتراک در خبرنامه
          </p>
          <Formik>
            <Form>
              <input
                type="text"
                className="py-3 px-3 md:py-2 md:px-2 lg:py-3 lg:px-3 ml-3 md:ml-1 lg:ml-3 rounded-lg border-2 border-gray-400 focus:outline-gray-500"
                placeholder="ایمیل خود را وارد نمایید"
              />
              <Button
                ButtonType="submit"
                classButton="btn btn-primary py-2 px-5 md:px-2 md:py-2 lg:py-2 lg:px-5 text-lg md:text-base lg:text-lg"
              >
                اشتراک
              </Button>
            </Form>
          </Formik>
        </div>
        <div className="text-2xl flex flex-col items-center justify-between md:justify-evenly py-5">
          <Link
            to="/"
            className="hover:text-gray-500 transition ease-in duration-150"
          >
            منو
          </Link>
          <Link
            to="/"
            className="hover:text-gray-500 transition ease-in duration-150"
          >
            خانه
          </Link>
          <Link
            to="/"
            className="hover:text-gray-500 transition ease-in duration-150"
          >
            دوره ها
          </Link>
          <Link
            to="/"
            className="hover:text-gray-500 transition ease-in duration-150"
          >
            اخبار و مقالات
          </Link>
          <Link
            to="/"
            className="hover:text-gray-500 transition ease-in duration-150"
          >
            تماس با ما
          </Link>
        </div>
        <div className="py-5">
          <h6 className="text-3xl font-bold mb-2">درباره ما</h6>
          <p className="text-lg">
            آکادمی بحر اولین بار در سال 88 توسط دکتر محمد حسین بحر
            العلومی به وجود آمد. در مراطب اول دانشجویان خوبی را جذب
            کرد و حتی دانشجویانی با گرفتن درخواست کاری از کشور خارج
            شدند. بعد ها آکادمی بحر با توسعه به یکی از برترین آکادمی
            های برنامه نویسی زیر نظر دکتر بحر شد و استادانی با سطح
            بالا همچون دکتر بحر وارد جامعه شدند و دانشجویانی را تربیت
            میکنند شعار آکادمی بحر این است که دانشجویانی با سواد و
            برتر را وارد جامعه کند تا نامش به نیک یاد شود
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
