import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import faq from '../../../Assets/faq.png';
import faqDisabled from '../../../Assets/faq-dis.png';
import chatDisable from '../../../Assets/chat-dis.png';
import chat from '../../../Assets/chat.png';
import Accordion from '../Accordion/Accordion';
import { FaMinus, FaPlus } from 'react-icons/fa';
import profile from '../../../Assets/profile.png';
import like from '../../../Assets/likee.png';
import likeFill from '../../../Assets/likesolid.png';
import disLike from '../../../Assets/dislikee.png';
import disLikeFill from '../../../Assets/dislikesolid.png';
import Comment from '../comments/Comment';
const CustomTab = () => {
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

  const [tabList, setTabList] = useState([
    {
      id: 1,
      title: 'سوالات متداول',
      activeImg: faq,
      inactiveImg: faqDisabled,
      active: false,
    },
    {
      id: 2,
      title: 'نظرات',
      activeImg: chat,
      inactiveImg: chatDisable,
      active: false,
    },
  ]);

  const [comments, setComments] = useState([
    {
      id: 1,
      refId: 0,
      userName: 'سید پلنگ',
      date: '16 خرداد 1401',
      time: '14:53',
      body: 'انگولار فارسی وجود ندارد. در دوره هیولای جاوااسکریپت همه؟',
      liked: false,
      disLiked: false,
      likeCount: 15,
      disLikeCount: 0,
      userImg: '',
    },
    {
      id: 2,
      refId: 0,
      userName: 'سید پلنگ',
      date: '16 خرداد 1401',
      time: '14:53',
      body: 'انگولار فارسی وجود ندارد. در دوره هیولای جاوااسکریپت همه؟',
      liked: false,
      disLiked: false,
      likeCount: 0,
      disLikeCount: 0,
      userImg: '',
    },
    {
      id: 3,
      refId: 1,
      userName: 'سید پلنگ',
      date: '16 خرداد 1401',
      time: '14:53',
      body: 'انگولار فارسی وجود ندارد. در دوره هیولای جاوااسکریپت همه؟',
      liked: false,
      disLiked: false,
      likeCount: 0,
      disLikeCount: 0,
      userImg: '',
    },
    {
      id: 4,
      refId: 1,
      userName: 'سید پلنگ',
      date: '16 خرداد 1401',
      time: '14:53',
      body: 'انگولار فارسی وجود ندارد. در دوره هیولای جاوااسکریپت همه؟',
      liked: false,
      disLiked: false,
      likeCount: 0,
      disLikeCount: 0,
      userImg: '',
    },
  ]);
  const handleTabClick = (id) => {
    setTabList(
      tabList.map((tab) => {
        return tab.id === id
          ? { ...tab, active: !tab.active }
          : { ...tab, active: false };
      })
    );
  };

  const handlelike = (id) => {
    setComments(
      comments.map((comment) => {
        return comment.id === id
          ? {
              ...comment,
              liked: !comment.liked,
              disLiked: false,
              likeCount: comment.liked
                ? comment.likeCount - 1
                : comment.likeCount + 1,
            }
          : comment;
      })
    );
  };

  const handleDislike = (id) => {
    setComments(
      comments.map((comment) => {
        return comment.id === id
          ? {
              ...comment,
              disLiked: !comment.disLiked,
              liked: false,
              disLikeCount: comment.disLiked
                ? comment.disLikeCount - 1
                : comment.disLikeCount + 1,
            }
          : comment;
      })
    );
  };

  const handleSend = (refId, reply) => {
    const newReply = {
      id: comments.length + 1,
      refId: refId,
      userName: 'مریم',
      date: '16 خرداد 1401',
      time: '14:53',
      body: reply,
      liked: false,
      disLiked: false,
      likeCount: 0,
      disLikeCount: 0,
      userImg: '',
    };
    setComments(comments.concat([newReply]));
  };

  const handleReplyes = (id) => {
    return comments.filter((comment) => comment.refId === id);
  };

  const refrence = comments.filter((comment) => comment.refId === 0);
  return (
    <>
      <Tabs className="rounded-xl mt-4 mx-3 lg:mx-10">
        <TabList className="inline-flex pt-2 pr-4 lg:pr-12 w-full  border-[#7F56DA]">
          {tabList.map((tab) => (
            <Tab
              key={tab.id}
              className="tab"
              selectedClassName="tab-active"
              disabledClassName="tab-disabled"
              onClick={() => handleTabClick(tab.id)}
            >
              <img
                src={tab.active ? faq : faqDisabled}
                className="w-6 inline ml-3"
              />
              <span>{tab.title}</span>
            </Tab>
          ))}
        </TabList>
        <div className="border-l-2 border-r-2 border-b-2 border-t-2 border-[#7F56DA] p-4 rounded-xl">
          <div className="overflow-y-scroll faq-container h-80 pl-4">
            <TabPanel>
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
            </TabPanel>
            <TabPanel>
              {comments.map((comment) => (
                <Comment
                  key={comment.id}
                  info={comment}
                  onLike={handlelike}
                  onDisLike={handleDislike}
                  onSend={handleSend}
                  replies={handleReplyes(comment.id)}
                />
              ))}
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default CustomTab;
