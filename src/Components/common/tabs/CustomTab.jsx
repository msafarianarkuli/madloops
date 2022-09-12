import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaMinus, FaPlus } from 'react-icons/fa';

import Accordion from '../Accordion/Accordion';
import Comment from '../comments/Comment';
import profile from '../../../Assets/profile.png';

const CustomTab = ({ faqList, setFaqList, commentData, tabData }) => {
  const [commentActive, setCommentActive] = useState(false);
  const [comments, setComments] = useState(commentData);
  const [answerActive, setAnswerActive] = useState(false);
  const [tabList, setTabList] = useState(tabData);

  const handleTabClick = (id) => {
    setTabList(
      tabList.map((tab) => {
        return tab.id === id
          ? { ...tab, active: true }
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
              disLikeCount: comment.disLiked
                ? comment.disLikeCount - 1
                : comment.disLikeCount,
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
              likeCount: comment.liked
                ? comment.likeCount - 1
                : comment.likeCount,
              disLikeCount: comment.disLiked
                ? comment.disLikeCount - 1
                : comment.disLikeCount + 1,
            }
          : comment;
      })
    );
  };

  const handleSendReply = (refId, reply) => {
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
      email: '',
    };
    setComments(comments.concat([newReply]));
    setAnswerActive(false);
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
                src={tab.active ? tab.activeIcon : tab.inactiveIcon}
                className="w-6 inline ml-3"
              />
              <span
                className={`${
                  tab.active ? 'text-[#7F56DA]' : 'text-gray-400'
                }`}
              >
                {tab.title}
              </span>
              {tab.title === 'نظرات' ? (
                <span className="bg-[#7F56DA] px-2 py-0 mr-1 text-white rounded-full">
                  {comments.length}
                </span>
              ) : (
                ''
              )}
            </Tab>
          ))}
        </TabList>
        <div className="border-2 border-[#7F56DA] px-2 pt-10 lg:px-4 lg:py-11 rounded-2xl relative">
          <div className="overflow-y-scroll overflow-x-hidden faq-container h-80 pl-2 lg:pl-4">
            {faqList ? (
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
            ) : null}

            <TabPanel>
              {commentActive ? (
                <div className="block md:flex border-2 border-gray-300 rounded-xl p-2 md:p-5">
                  <div
                    className="bg-[#7F56DA] text-white absolute -top-[1px] -left-[1px] px-4 py-1 rounded-tl-xl rounded-br-xl"
                    onClick={() => setCommentActive(false)}
                  >
                    انصراف
                  </div>
                  <img
                    src={profile}
                    className="w-16 h-16 rounded-full ml-3 mb-2 md:mb-0"
                  />
                  <div className="grow">
                    <Formik
                      initialValues={{
                        name: '',
                        email: '',
                        body: '',
                      }}
                      validationSchema={Yup.object({
                        name: Yup.string().required(),
                        email: Yup.string().email().required(),
                        body: Yup.string().required(),
                      })}
                      onSubmit={(values) => {
                        console.log('values');
                      }}
                    >
                      <Form>
                        <div className=" text-base md:text-xl text-gray-400">
                          <div className="flex w-full border rounded-tl-xl rounded-tr-xl">
                            <div className="flex w-1/2 p-2 md:p-4 border-l">
                              <label className="ml-2" htmlFor="">
                                نام:
                              </label>
                              <input
                                className="grow bg-transparent outline-none"
                                type="text"
                                name="name"
                              />
                            </div>
                            <div className="flex w-1/2 p-2 md:p-4">
                              <label className="ml-2" htmlFor="">
                                ایمیل:
                              </label>
                              <input
                                className="grow bg-transparent outline-none"
                                type="text"
                                name="email"
                              />
                            </div>
                          </div>
                          <div className="flex border-r border-l border-b p-4">
                            <label className="ml-2" htmlFor="">
                              متن نظر:
                            </label>
                            <textarea
                              rows="4"
                              className="grow bg-transparent outline-none"
                              type="text"
                              name="body"
                            />
                          </div>
                          <div className="border-r border-l border-b rounded-bl-xl rounded-br-xl bg-lite-purple text-center text-white overflow-hidden">
                            <button
                              className="w-full  py-2"
                              type="submit"
                            >
                              ارسال نظر
                            </button>
                          </div>
                        </div>
                      </Form>
                    </Formik>
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    className="bg-[#7F56DA] text-white absolute -top-[1px] -left-[1px] px-4 py-1 rounded-tl-xl rounded-br-xl"
                    onClick={() => setCommentActive(true)}
                  >
                    ارسال دیدگاه
                  </div>
                  {refrence.map((comment) => (
                    <Comment
                      key={comment.id}
                      info={comment}
                      onLike={handlelike}
                      onDisLike={handleDislike}
                      onSend={handleSendReply}
                      replies={handleReplyes(comment.id)}
                      answerActive={answerActive}
                      setAnswerActive={setAnswerActive}
                    />
                  ))}
                </div>
              )}
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default CustomTab;
