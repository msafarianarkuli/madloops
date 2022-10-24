import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaTelegramPlane,
} from "react-icons/fa";
import { Button, Input } from "..";
import logo from "../../Assets/img/site-logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="bg-lite-gray dark:bg-dark-secondary">
        <div className="px-4 lg:px-28 divide-y divide-gray-400 w-11/12 container mx-auto pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y divide-gray-400 md:divide-y-0 ">
            <div className="flex flex-col pb-5" data-aos="fade-down">
              <div className="flex items-center">
                <img className="w-20" src={logo} alt="" />
                <p className="text-2xl dark:text-dark-primary-title">
                  Mad Loops
                </p>
              </div>
              <div>
                <p className="text-lg dark:text-dark-secondary-title">
                  تیم مد لوپس زیر نظر آکادمی بحر
                </p>
                <p className="font-bold text-xl mt-7 mb-2 dark:text-dark-secondary-title">
                  اشتراک در خبرنامه
                </p>
                <Formik
                  initialValues={{ newsletter: "" }}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                >
                  {({ values }) => (
                    <Form className="flex">
                      <Input
                        name="newsletter"
                        type="text"
                        placeholder="ایمیل خود را وارد نمایید"
                        className="flex-1 py-3 px-3 md:py-2 md:px-2 lg:py-3 lg:px-3 ml-3 md:ml-1 lg:ml-3 rounded-lg border-2 border-gray-300 dark:bg-dark-tertiary dark:text-gray-400 focus:outline-gray-400 focus:input-shadow outline-0 duration-200"
                      />
                      <Button
                        ButtonType="submit"
                        disabled={!values.newsletter}
                        classButton="btn btn-primary py-2 px-5 md:px-2 md:py-2 lg:py-2 lg:px-5 text-lg md:text-base lg:text-lg cursor-pointer"
                      >
                        اشتراک
                      </Button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <div className="text-2xl flex flex-col justify-between md:justify-evenly py-5 pr-5 lg:mx-auto" data-aos="fade-down">
              <p className="dark:text-dark-primary-title"> &#9679; منو</p>
              <Link
                to="/"
                className="hover:text-gray-400 text-gray-600 dark:text-dark-secondary-title dark:hover:text-white transition ease-in duration-150"
              >
                خانه
              </Link>
              <Link
                to="/courses"
                className="hover:text-gray-400 text-gray-600 dark:text-dark-secondary-title dark:hover:text-white transition ease-in duration-150"
              >
                دوره ها
              </Link>
              <Link
                to="/blogs"
                className="hover:text-gray-400 text-gray-600 dark:text-dark-secondary-title dark:hover:text-white transition ease-in duration-150"
              >
                اخبار و مقالات
              </Link>
              <Link
                to="/contactUs"
                className="hover:text-gray-400 text-gray-600 dark:text-dark-secondary-title dark:hover:text-white transition ease-in duration-150"
              >
                تماس با ما
              </Link>
            </div>

            <div className="py-5" data-aos="fade-down">
              <h6 className="text-3xl font-bold mb-2 dark:text-dark-primary-title">
                &#9679; درباره ما
              </h6>
              <p className="text-lg text-gray-600 dark:text-dark-text">
                آکادمی بحر اولین بار در سال 88 توسط دکتر محمد حسین بحر العلومی
                به وجود آمد. در مراطب اول دانشجویان خوبی را جذب کرد و حتی
                دانشجویانی با گرفتن درخواست کاری از کشور خارج شدند. بعد ها
                آکادمی بحر با توسعه به یکی از برترین آکادمی های برنامه نویسی زیر
                نظر دکتر بحر شد و استادانی با سطح بالا همچون دکتر بحر وارد جامعه
                شدند و دانشجویانی را تربیت میکنند شعار آکادمی بحر این است که
                دانشجویانی با سواد و برتر را وارد جامعه کند تا نامش به نیک یاد
                شود
              </p>
            </div>
          </div>
          <div className="py-4 grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="flex justify-center md:justify-start gap-8 text-3xl mb-4 md:mb-0">
              <a
                href="https://www.instagram.com/mary_sfry/"
                className="footer-socialMedia group"
              >
                <FaInstagram className="group-hover:text-lite-purple text-gray-700 dark:text-gray-400" />
              </a>
              <a
                href="https://web.whatsapp.com/send?phone=+989116935706&text=سلام من از طریق سایت مد لوپس پیام میفرستم و سوالی دارم."
                className="footer-socialMedia group"
              >
                <FaWhatsapp className="group-hover:text-green-600 text-gray-700 dark:text-gray-400" />
              </a>
              <a
                href="https://t.me/+989116935706"
                className="footer-socialMedia group"
              >
                <FaTelegramPlane className="group-hover:text-blue-600 text-gray-700 dark:text-gray-400" />
              </a>

              <a
                href="https://www.facebook.com/digivillacom"
                className="footer-socialMedia group"
              >
                <FaFacebookF className="group-hover:text-blue-800 text-gray-700 dark:text-gray-400" />
              </a>
            </div>
            <div className="text-lg text-center md:text-left dark:text-dark-text">
              <p>© 2022, تمامی حقوق این سایت محفوظ می باشد</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
