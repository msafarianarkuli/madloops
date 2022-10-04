import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaMinus, FaPlus } from "react-icons/fa";

import Accordion from "../Accordion/Accordion";
import Comment from "../comments/Comment";
import Textarea from "../Inputs/TextareaInputs/Textarea";
import Input from "../Inputs/TextInputs/Input";
import profile from "../../../Assets/profile.png";

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

  const handleSendReply = (
    refId,
    reply,
    name = "میهمان",
    email = "example@gmail.com"
  ) => {
    const newReply = {
      id: comments.length + 1,
      refId: refId,
      userName: name,
      date: "16 خرداد 1401",
      time: "14:53",
      body: reply,
      liked: false,
      disLiked: false,
      likeCount: 0,
      disLikeCount: 0,
      userImg: "",
      email: email,
    };
    comments.unshift(newReply);
    setComments(comments);
    setAnswerActive(false);
  };

  const handleReplyes = (id) => {
    return comments.filter((comment) => comment.refId === id);
  };

  const refrence = comments.filter((comment) => comment.refId === 0);

  return (
    <>
      <Tabs className="rounded-lg mt-4 mx-3 lg:mx-10">
        <TabList className="inline-flex pt-2 pr-4 lg:pr-12 w-full">
          {tabList.map((tab) => (
            <Tab
              key={tab.id}
              className="tab"
              selectedClassName="tab-active bg-lite-gray"
              disabledClassName="tab-disabled"
              onClick={() => handleTabClick(tab.id)}
            >
              <img
                src={tab.active ? tab.activeIcon : tab.inactiveIcon}
                className="w-6 inline ml-3"
              />
              <span
                className={`${
                  tab.active
                    ? "text-lite-purple"
                    : "text-gray-400 cursor-pointer"
                }`}
              >
                {tab.title}
              </span>
            </Tab>
          ))}
        </TabList>
        <div className="bg-lite-gray border-2 px-2 pt-10 lg:px-4 lg:py-11 rounded-xl relative mb-10">
          <div className="faq-container pl-2 lg:pl-4">
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
                    headerInactiveStyle="border-b-2 rounded-bl-xl rounded-br-xl delay-[300ms]"
                    headerMainStyle="p-4 bg-white border-t-2 border-r-2 border-l-2 border-gray-200 w-full
                    rounded-tl-xl rounded-tr-xl"
                    bodyMainStyle="w-full px-4 bg-white rounded-bl-xl rounded-br-xl border-r-2 border-l-2"
                    bodyActiveStyle="max-h-[100rem] overflow-hidden border-b-2 transition-[max-height] ease-in-out duration-300"
                    bodyInactiveStyle="max-h-[0rem] overflow-hidden border-b-0 transition-[max-height,border] ease-in-out duration-[300ms,350ms]"
                    activeIcon={<FaMinus />}
                    inactiveIcon={<FaPlus />}
                  />
                ))}
              </TabPanel>
            ) : null}

            <TabPanel>
              {commentActive ? (
                <div className="block md:flex border-2 border-gray-200 rounded-lg p-2 md:p-5 mb-5 mr-2">
                  <div
                    className="bg-lite-purple text-white absolute cursor-pointer -top-[1px] -left-[1px] px-4 py-1 rounded-tl-lg rounded-br-lg"
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
                        name: "",
                        email: "",
                        body: "",
                      }}
                      validationSchema={Yup.object({
                        name: Yup.string().required(
                          "لطفا نام خود را وارد کنید"
                        ),
                        email: Yup.string()
                          .email("الگوی وارد شده صحیح نمی باشد")
                          .required("لطفا فیلد ایمیل را پر کنید")
                          .matches(
                            /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                            "دامنه ایمیل را به درستی وارد کنید"
                          ),
                        body: Yup.string().required(
                          "لطفا نظر خود را بیان کنید"
                        ),
                      })}
                      onSubmit={(values) => {
                        handleSendReply(
                          0,
                          values.body,
                          values.name,
                          values.email
                        );
                        setCommentActive(false);
                        console.log(values);
                      }}
                    >
                      <Form>
                        <div className="bg-slate-100 text-base md:text-xl text-gray-400">
                          <div className="flex w-full border rounded-tl-xl rounded-tr-xl">
                            <div className="w-1/2 p-2 md:p-4 border-l">
                              <Input
                                className="bg-transparent w-full outline-none border-b-2 mb-2 focus:border-b-lite-purple duration-300"
                                type="text"
                                name="name"
                                label="نام:"
                              />
                            </div>
                            <div className="w-1/2 p-2 md:p-4">
                              <Input
                                className="bg-transparent w-full outline-none border-b-2 mb-2 focus:border-b-lite-purple duration-300"
                                type="text"
                                name="email"
                                label="ایمیل:"
                              />
                            </div>
                          </div>
                          <div className="flex border-r border-l border-b p-4">
                            <Textarea
                              className="grow 2xl:w-[800px] xl:w-[630px] lg:w-[680px] md:w-[540px] sm:w-[510px] w-[220px] min-h-fit max-h-72 bg-transparent outline-none block"
                              name="body"
                              label="متن نظر:"
                            />
                          </div>
                          <div className="border-r border-l border-b rounded-bl-lg rounded-br-lg bg-lite-purple text-center text-white overflow-hidden">
                            <button className="w-full py-2" type="submit">
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
                    className="bg-lite-purple text-white absolute cursor-pointer -top-[1px] -left-[1px] px-4 py-1 rounded-tl-lg rounded-br-lg"
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
