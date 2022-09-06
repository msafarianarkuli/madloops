import { BsFillCircleFill } from 'react-icons/bs';
import logo from '../../Assets/img/site-logo.png';
import { Button } from '../common/button-component/button.component';
import { Formik, Form } from 'formik';

const Footer = () => {
  return (
    <footer className="bg-gray-300 py-8 px-16">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div>
          <div className="flex justify-start items-center">
            <img className="w-20" src={logo} alt="" />
            <p className="text-2xl">Mad Loops</p>
          </div>
          <p className="text-lg">تیم مد لوپس زیر نظر آکادمی بحر</p>
          <p className="font-bold text-xl">اشتراک در خبرنامه</p>
          <div className="flex items-center">
            <Formik>
              <form>
                <input
                  type="text"
                  className="py-3 rounded-lg px-3"
                  placeholder="ایمیل خود را وارد نمایید"
                />
                <Button
                  ButtonType="submit"
                  classButton="btn btn-primary py-2 px-5 text-lg"
                >
                  اشتراک
                </Button>
              </form>
            </Formik>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between">
          <span className="text-xl">منو</span>
          <span className="text-xl">خانه</span>
          <span className="text-xl">دوره ها</span>
          <span className="text-xl">اخبار و مقالات</span>
          <span className="text-xl">تماس با ما</span>
        </div>
        <div>
          <h6 className="text-3xl font-black">درباره ما</h6>
          <p>
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
