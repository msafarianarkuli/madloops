import React, { useState } from 'react';
import SendComment from '../comments/SendComment';
import Comment from '../comments/Comment';

const CommentsTab = ({
  onLike,
  onDisLike,
  onSendReply,
  comments,
}) => {
  const [commentActive, setCommentActive] = useState(false);
  const [answerActive, setAnswerActive] = useState(false);
  return (
    <>
      {commentActive ? (
        <div className="block md:flex border-2 dark:border-dark-tertiary border-gray-200 rounded-lg p-2 md:p-5 mb-5 mr-2">
          <div
            className="bg-lite-purple text-white absolute cursor-pointer -top-[1px] -left-[1px] px-4 py-1 rounded-tl-lg rounded-br-lg"
            onClick={() => setCommentActive(false)}
          >
            انصراف
          </div>
          <SendComment
            onCommentActive={setCommentActive}
            onSendReply={onSendReply}
          />
        </div>
      ) : (
        <div>
          <div
            className="bg-lite-purple text-white absolute cursor-pointer -top-[1px] -left-[1px] px-4 py-1 rounded-tl-xl rounded-br-lg"
            onClick={() => setCommentActive(true)}
          >
            ارسال دیدگاه
          </div>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              info={comment}
              onLike={onLike}
              onDisLike={onDisLike}
              onSend={onSendReply}
              replies={comments}
              answerActive={answerActive}
              setAnswerActive={setAnswerActive}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default CommentsTab;
