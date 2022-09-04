import React from 'react';

const Textarea = ({ label, id }) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={id}
        className="text-gray-600 inline-block mb-2 text-base"
      >
        {label}
      </label>
      <div className="flex items-center">
        <textarea
          id={label}
          type="text"
          rows="8"
          cols="20"
          className="rounded-lg py-2 bg-neutral-200 outline-none w-full px-4"
        />
      </div>
    </div>
  );
};

export default Textarea;
