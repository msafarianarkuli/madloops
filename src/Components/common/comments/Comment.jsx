import React from 'react';
import { Button } from '../button-component/button.component';
import Reply from './Reply';
import Input from '../Inputs/TextInputs/Input';
import user from '../../../Assets/user.png';
import likeFillIcon from '../../../Assets/likee.png';
import likeIcon from '../../../Assets/likesolid.png';
import disLikeFillIcon from '../../../Assets/dislikee.png';
import disLikeIcon from '../../../Assets/dislikesolid.png';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
const Comment = ({
  info,
  onDisLike,
  onLike,
  onSend,
  onCommentReply,
  replies,
  answerActive,
  setAnswerActive,
}) => {
  const {
    id,
    refId,
    userName,
    date,
    time,
    body,
    liked,
    disLiked,
    likeCount,
    disLikeCount,
  } = info;

  const handleCommentReply = () => {
    setAnswerActive(true);
  };

  return (
    <>
      <div className="border-2 bg-slate-100 rounded-lg p-3 mb-3" dir="rtl">
        <div className="flex justify-between">
          <div className="flex">
            <img
              src={user}
              alt=""
              className="w-8 h-8 sm:w-14 sm:h-14 rounded-full ml-3"
            />
            <div className="flex flex-col">
              <p className="text-lg sm:text-xl lg:text-2xl mb-1">
                {userName}
              </p>
              <div className="flex">
                <p className="text-xs sm:text-sm text-gray-400 ml-4">
                  {date}
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  {time}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center text-gray-400 text-lg">
            <span className="px-3 w-8 mb-1">
              {likeCount === 0 ? ' ' : likeCount}
            </span>
            <img
              src={liked ? likeFillIcon : likeIcon}
              className="w-4 h-4 sm:w-5 sm:h-5 mb-3 cursor-pointer"
              onClick={() => onLike(id)}
            />
            <span className="px-4 w-8 mb-1">
              {disLikeCount === 0 ? ' ' : disLikeCount}
            </span>
            <img
              src={disLiked ? disLikeFillIcon : disLikeIcon}
              className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
              onClick={() => onDisLike(id)}
            />
          </div>
        </div>
        <p className="text-lg w-fit lg:text-xl text-gray-400 mt-2 mb-3 mr-8">
          {body}
        </p>
        {answerActive ? (
          <Formik
            initialValues={{
              reply: '',
            }}
            onSubmit={(values) => {
              onSend(id, values.reply);
            }}
          >
            {({ values }) => (
              <Form>
                <div className="md:flex">
                  <Input
                    type="text"
                    name="reply"
                    className="border border-gray-200 duration-150 rounded-md px-3 w-full mb-3 lg:mb-0 md:flex-1 outline-0 focus:input-shadow focus:shadow-purple-300"
                  />
                  <div className="text-left md:flex-none">
                    <Button
                      type="submit"
                      disabled={!values.reply}
                      classButton="border border-[#7F56DA] text-[#7F56DA] px-5 py-1 text-sm rounded-md mr-2 cursor-pointer
                      hover:bg-[#7F56DA] hover:text-white transition ease-out duration-200"
                    >
                      ارسال
                    </Button>
                    <Button
                      classButton="border border-[#7F56DA] text-[#7F56DA] px-5 py-1 text-sm rounded-md mr-2
                      hover:bg-[#7F56DA] hover:text-white transition ease-out duration-200"
                      onClick={() => setAnswerActive(false)}
                    >
                      انصراف
                    </Button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        ) : (
          <div className="text-left">
            <Button
              classButton="border-2 border-[#7F56DA] text-[#7F56DA] px-5 py-1 text-md rounded-md 
              hover:bg-[#7F56DA] hover:text-white transition ease-out duration-200"
              onClick={handleCommentReply}
            >
              پاسخ
            </Button>
          </div>
        )}
        {replies.map((reply) => (
          <Reply
            key={replies.id}
            info={reply}
            onLike={onLike}
            onDisLike={onDisLike}
          />
        ))}
      </div>
    </>
  );
};

export default Comment;
