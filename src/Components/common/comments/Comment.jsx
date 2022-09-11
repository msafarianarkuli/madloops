import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../button-component/button.component';
import Comment2 from './Comment2';
import user from '../../../Assets/user.png';
import likeFillIcon from '../../../Assets/likee.png';
import likeIcon from '../../../Assets/likesolid.png';
import disLikeFillIcon from '../../../Assets/dislikee.png';
import disLikeIcon from '../../../Assets/dislikesolid.png';
const Comment = ({ info, onDisLike, onLike, onSend, replies }) => {
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
  const [answerActive, setAnswerActive] = useState(false);
  const [reply, setReply] = useState('');
  const replyInput = useRef();

  const handleCommentReply = () => {
    setAnswerActive(true);
    setTimeout(() => {
      replyInput.current.focus();
    }, 10);
  };

  return (
    <>
      <div className="border-2 rounded-xl p-3 mb-3" dir="rtl">
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
            <span className="mr-2 ml-1 mb-1">
              {likeCount === 0 ? ' ' : likeCount}
            </span>
            <img
              src={liked ? likeFillIcon : likeIcon}
              className="w-6 h-6 mb-3"
              onClick={() => onLike(id)}
            />
            <span className="mr-2 ml-1 mb-1">
              {disLikeCount === 0 ? ' ' : disLikeCount}
            </span>
            <img
              src={disLiked ? disLikeFillIcon : disLikeIcon}
              className="w-6 h-6"
              onClick={() => onDisLike(id)}
            />
          </div>
        </div>
        <p className="text-lg lg:text-xl text-gray-400 mt-2 mb-3 mr-8">
          {body}
        </p>
        {answerActive ? (
          <div className="flex">
            <input
              type="text"
              className=" border border-gray-400 rounded-lg px-3 grow "
              ref={replyInput}
              value={reply}
              onChange={(e) => setReply(e.target.value)}
            />
            <div className="flex-none">
              <Button
                classButton="border border-[#7F56DA] text-[#7F56DA] px-5 py-1 text-sm rounded-md mr-2"
                onClick={() => onSend(id, reply)}
              >
                ارسال
              </Button>
              <Button
                classButton="border border-[#7F56DA] text-[#7F56DA] px-5 py-1 text-sm rounded-md mr-2"
                onClick={() => setAnswerActive(false)}
              >
                انصراف
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-left">
            <Button
              classButton="border border-[#7F56DA] text-[#7F56DA] px-5 py-1 text-sm rounded-md mb-3"
              onClick={handleCommentReply}
            >
              پاسخ
            </Button>
          </div>
        )}
        {replies.map((reply) => (
          <Comment2
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
