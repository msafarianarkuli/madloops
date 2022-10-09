import React from 'react';
import likeFillIcon from '../../../Assets/likee.png';
import likeIcon from '../../../Assets/likesolid.png';
import disLikeFillIcon from '../../../Assets/dislikee.png';
import disLikeIcon from '../../../Assets/dislikesolid.png';

const Like = ({
  id,
  liked,
  disLiked,
  likeCount,
  disLikeCount,
  onDisLike,
  onLike,
}) => {
  return (
    <div className="flex items-center text-gray-400 text-lg">
      <span className="px-3 w-8 mb-1">
        {likeCount === 0 ? ' ' : likeCount}
      </span>
      <img
        src={liked ? likeFillIcon : likeIcon}
        className="w-4 h-4 sm:w-5 sm:h-5 mb-3 cursor-pointer"
        onClick={() => onLike(id)}
      />
      <span className="px-3 w-8 mb-1">
        {disLikeCount === 0 ? ' ' : disLikeCount}
      </span>
      <img
        src={disLiked ? disLikeFillIcon : disLikeIcon}
        className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
        onClick={() => onDisLike(id)}
      />
    </div>
  );
};

export default Like;
