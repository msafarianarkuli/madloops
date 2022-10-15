import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CourseDetails from '../../Components/content/SingleCourse/CourseDetails';
import CourseOpacity from '../../Components/content/SingleCourse/CourseOpacity';
import CourseTeacher from '../../Components/content/SingleCourse/CourseTeacher';
import CoursePrice from '../../Components/content/SingleCourse/CoursePrice';
import CoursePrerequisite from '../../Components/content/SingleCourse/CoursePrerequisite';
import CourseProperTo from '../../Components/content/SingleCourse/CourseProperTo';
import CourceImproperTo from '../../Components/content/SingleCourse/CourceImproperTo';
import CoursesTab from '../../Components/common/tabs/CoursesTab';
import commentData from '../../Core/services/Fake Service/CourseComments';
import { getCourse } from '../../Core/services/Fake Service/CoursesPage';

const SingleCourse = () => {
  const { id } = useParams();
  const [item] = useState(getCourse(Number(id)));
  const [comments, setComments] = useState(commentData);

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
    console.log('liked', id);
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
    console.log('disLiked', id);
  };

  const handleSendReply = (
    refId,
    reply,
    name = 'میهمان',
    email = 'example@gmail.com'
  ) => {
    const newReply = {
      id: comments.length + 1,
      refId: refId,
      userName: name,
      date: '16 خرداد 1401',
      time: '14:53',
      body: reply,
      liked: false,
      disLiked: false,
      likeCount: 0,
      disLikeCount: 0,
      userImg: '',
      email: email,
    };
    comments.unshift(newReply);
    setComments(comments);
    // setAnswerActive(false);
    console.log('sent', comments);
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 p-2 lg:p-6 container mx-auto h-fit">
      <div className="xl:col-span-9 bg-[#F9F9FF] custom-shadow dark:shadow-none  rounded-lg dark:bg-dark-secondary" data-aos="fade-up">
        <div className="rounded-lg overflow-hidden">
          <img src={item.image} className="w-full h-500" />
          <div className="px-4 lg:px-16">
            <h1 className="text-2xl lg:text-4xl font-bold text-center my-5 lg:my-10 dark:text-dark-primary-title">
              {item.title}
            </h1>
            <p className="text-lg lg:text-2xl text-gray-400 leading-10 dark:text-dark-text">
              {item.description}
            </p>
          </div>
          <CoursesTab
            comments={comments}
            onLike={handlelike}
            onDisLike={handleDislike}
            onSendReply={handleSendReply}
          />
        </div>
      </div>
      <div className="xl:col-span-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-1">
          <CourseDetails />
          <CourseOpacity />
          <CourseTeacher />
          <CoursePrice item={item} />
          <CoursePrerequisite />
          <CourseProperTo />
          <CourceImproperTo />
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
