import React, { useState } from 'react';
import { Button } from '../button-component/button.component';
import faq from '../../../Assets/faq.png';
import chatDisable from '../../../Assets/chat-dis.png';
import chat from '../../../Assets/chat.png';
import FAQ from '../FAQ/FAQ';
import { FaMinus, FaPlus } from 'react-icons/fa';
import user from '../../../Assets/user.png';
import profile from '../../../Assets/profile.png';
import like from '../../../Assets/likee.png';
import likeFill from '../../../Assets/likesolid.png';
import disLike from '../../../Assets/dislikee.png';
import disLikeFill from '../../../Assets/dislikesolid.png';
const Tab = () => {
  const [faqList, setFaqList] = useState([
    {
      id: 1,
      title: 'انگولار چیست؟',
      description:
        'انگولار فارسی وجود ندارد. در دوره ی هیولای جاوااسکریپت همه مباحث جاوااسکریپت به صورت پروژه محور و کاربردی آموزش داده می شه.',
      active: false,
    },
    {
      id: 2,
      title: 'انگولار چیست؟',
      description:
        'انگولار فارسی وجود ندارد. در دوره ی هیولای جاوااسکریپت همه مباحث جاوااسکریپت به صورت پروژه محور و کاربردی آموزش داده می شه.',
      active: false,
    },
    {
      id: 3,
      title: 'انگولار چیست؟',
      description:
        'انگولار فارسی وجود ندارد. در دوره ی هیولای جاوااسکریپت همه مباحث جاوااسکریپت به صورت پروژه محور و کاربردی آموزش داده می شه.',
      active: false,
    },
    {
      id: 4,
      title: 'انگولار چیست؟',
      description:
        'انگولار فارسی وجود ندارد. در دوره ی هیولای جاوااسکریپت همه مباحث جاوااسکریپت به صورت پروژه محور و کاربردی آموزش داده می شه.',
      active: false,
    },
    {
      id: 5,
      title: 'انگولار چیست؟',
      description:
        'انگولار فارسی وجود ندارد. در دوره ی هیولای جاوااسکریپت همه مباحث جاوااسکریپت به صورت پروژه محور و کاربردی آموزش داده می شه.',
      active: false,
    },
    {
      id: 6,
      title: 'انگولار چیست؟',
      description:
        'انگولار فارسی وجود ندارد. در دوره ی هیولای جاوااسکریپت همه مباحث جاوااسکریپت به صورت پروژه محور و کاربردی آموزش داده می شه.',
      active: false,
    },
  ]);

  const handleToggle = (id) => {
    setFaqList(
      faqList.map((faq) => {
        return faq.id === id
          ? { ...faq, active: !faq.active }
          : { ...faq, active: false };
      })
    );
  };
  return (
    <div className="rounded-xl mt-4 mx-10">
      <ul className="inline-flex pt-2 pr-12 w-full  border-[#7F56DA]">
        <li className="tab tab-active">
          <img src={faq} className="w-6 inline ml-3" />
          <a>سوالات متداول</a>
        </li>
        <li className="tab tab-disabled">
          <img src={chatDisable} className="w-6 inline ml-3" />
          <a>نظرات</a>
          {/* <span className="rounded-full bg-[#7F56DA]">
            5
          </span> */}
        </li>
      </ul>

      <div>
        <div
          id="first"
          className="border-l-2 border-r-2 border-b-2 border-t-2 border-[#7F56DA]  rounded-xl"
        >
          <div
            className="m-4 p-2 overflow-y-scroll h-96 faq-container"
            dir="ltr"
          >
            {/* {faqList.map((faq) => (
              <FAQ
                key={faq.id}
                faq={faq}
                onToggle={handleToggle}
                dir="rtl"
              />
            ))} */}
            <div className="border-2 rounded-xl p-3" dir="rtl">
              <div className="flex justify-between">
                <div className="flex">
                  <img
                    src={user}
                    alt=""
                    className="w-14 h-14 rounded-full ml-3"
                  />
                  <div className="flex flex-col">
                    <p className="text-2xl mb-1">سید پلنگ</p>
                    <div className="flex">
                      <p className="text-sm text-gray-400 ml-4">
                        16 خرداد 1401
                      </p>
                      <p className="text-sm text-gray-400">14:53</p>
                    </div>
                  </div>
                </div>
                <div>
                  <Button classButton="border border-[#7F56DA] text-[#7F56DA] px-5 py-1 text-sm rounded-md">
                    پاسخ
                  </Button>
                </div>
              </div>
              <div>
                <p className="text-xl text-gray-400 mt-2 mb-3 mr-8">
                  انگولار فارسی وجود ندارد. در دوره هیولای جاوااسکریپت
                  همه؟
                </p>
              </div>
              <div className="border-2 border-[#7F56DA] rounded-xl">
                <div className="flex justify-between p-5">
                  <div className="flex">
                    <img
                      src={profile}
                      alt=""
                      className="w-14 h-14 rounded-full ml-3"
                    />
                    <div className="flex flex-col">
                      <p className="text-2xl mb-1">میکائیل محسنی</p>
                      <div className="flex">
                        <p className="text-sm text-gray-400 ml-4">
                          16 خرداد 1401
                        </p>
                        <p className="text-sm text-gray-400">14:53</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400 text-lg">
                    <span className="mx-2 mb-2">4</span>
                    <img src={like} className="w-8 h-8 mb-5" />{' '}
                    <span className="mx-2 mb-2">12</span>
                    <img src={disLike} className="w-8 h-8" />{' '}
                  </div>
                </div>
                <div>
                  <p className="text-xl text-gray-400 mt-2 mb-3 mr-8">
                    پروژه محور و کاربردی آموزش داده میشه تا شما عزیزان
                    مطابق با نیاز بازار کار، نمونه کار حرفه ای داشته
                    باشید. (حالا باید فهمیده باشید چرا اسم دوره رو
                    گذاشتم هیولای جاوااسکریپت)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="second" className="hidden p-4">
          Second tab
        </div>
      </div>
    </div>
  );
};

export default Tab;
