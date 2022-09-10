import React, { useState } from 'react';
import { Button } from '../button-component/button.component';
import faq from '../../../Assets/faq.png';
import chatDisable from '../../../Assets/chat-dis.png';
import chat from '../../../Assets/chat.png';
import Accordion from '../Accordion/Accordion';
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
            {faqList.map((faq) => (
              <Accordion
                key={faq.id}
                item={faq}
                items={faqList}
                setItems={setFaqList}
                dir="rtl"
                headerActiveStyle="border-b-0 rounded-bl-none rounded-br-none"
                headerInactiveStyle="border-b-2 rounded-bl-xl rounded-br-xl"
                headerMainStyle="p-4 bg-white border-t-2 border-r-2 border-l-2 border-gray-200 w-full
                rounded-tl-xl rounded-tr-xl"
                bodyMainStyle="w-full bg-white p-4 rounded-bl-xl rounded-br-xl border-b-2 border-r-2 border-l-2"
                activeIcon={<FaMinus />}
                inactiveIcon={<FaPlus />}
              />
            ))}
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
