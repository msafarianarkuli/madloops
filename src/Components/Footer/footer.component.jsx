import { BsFillCircleFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container m-auto w-11/12">
      <div className="grid grid-cols-3">
        <div className="bg-orange-200">
          {/* <div className="grid grid-rows-2">
            <div className="bg-blue-300 flex justify-center">
              <BsFillCircleFill className="w-2" />
              <h1 className="text-xl p-2">درباره ما</h1>
            </div>
            <div className="bg-blue-400 w-80 mx-auto text-base">
              آکادمی بحر اولین بار در سال 88 توسط دکتر محمد حسین بحر العلومی به
              وجود آمد. در مراطب اول دانشجویان خوبی را جذب کرد و حتی دانشجویانی
              با گرفتن درخواست کاری از کشور خارج شدند. بعد ها آکادمی بحر با
              توسعه به یکی از برترین آکادمی های برنامه نویسی زیر نظر دکتر بحر شد
              و استادانی با سطح بالا همچون دکتر بحر وارد جامعه شدند و دانشجویانی
              را تربیت میکنند شعار آکادمی بحر این است که دانشجویانی با سواد و
              برتر را وارد جامعه کند تا نامش به نیک یاد شود
            </div>
          </div> */}
        </div>
        <div className="bg-orange-300">
          <div className="grid grid-rows-5">
            <div className="bg-blue-100">1</div>
            <div className="bg-blue-200">2</div>
            <div className="bg-blue-300">3</div>
            <div className="bg-blue-400">4</div>
            <div className="bg-blue-500">5</div>
          </div>
        </div>
        <div className="bg-orange-400">
          <div className="grid grid-rows-5">
            <div className="bg-blue-100">1</div>
            <div className="bg-blue-200">2</div>
            <div className="bg-blue-300">3</div>
            <div className="bg-blue-400">4</div>
          </div>
        </div>
      </div>
      <div className="bg-red-900 border-t-2 border-t-black">123</div>
    </div>
  );
};

export default Footer;
