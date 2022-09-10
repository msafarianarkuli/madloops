import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
const FAQ = ({ faq, onToggle, dir }) => {
  const { id, title, description, active } = faq;
  return (
    <div className="mb-2" dir={dir}>
      <div
        onClick={() => onToggle(id)}
        className={`${
          active
            ? 'border-b-0 rounded-bl-none rounded-br-none'
            : 'border-b-2 rounded-bl-xl rounded-br-xl'
        } p-4 bg-white border-t-2 border-r-2 border-l-2 border-gray-200 w-full rounded-tl-xl rounded-tr-xl flex justify-between items-center`}
      >
        <div className="flex items-center gap-2">
          <h4 className="text-xl">{title}</h4>
        </div>
        <span>{active ? <FaMinus /> : <FaPlus />}</span>
      </div>
      <div
        className={`${
          active ? 'block' : 'hidden'
        } w-full bg-white p-4 rounded-bl-xl rounded-br-xl border-b-2 border-r-2 border-l-2 `}
      >
        <p className="text-xl text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default FAQ;
