import React, { useState } from 'react';

const Accordion = ({
  item,
  items,
  setItems,
  dir,
  headerActiveStyle,
  headerInactiveStyle,
  headerMainStyle,
  bodyMainStyle,
  activeIcon,
  inactiveIcon,
}) => {
  const { id, title, description, active } = item;
  const handleToggle = (id) => {
    setItems(
      items.map((item) => {
        return item.id === id
          ? { ...item, active: !item.active }
          : { ...item, active: false };
      })
    );
  };
  return (
    <div className="mb-2" dir={dir}>
      <div
        onClick={() => handleToggle(id)}
        className={`${
          active ? headerActiveStyle : headerInactiveStyle
        } ${headerMainStyle} flex justify-between items-center`}
      >
        <div className="flex items-center gap-2">
          <h4 className="text-xl">{title}</h4>
        </div>
        <span>{active ? activeIcon : inactiveIcon}</span>
      </div>
      <div
        className={`${active ? 'block' : 'hidden'} ${bodyMainStyle}`}
      >
        <p className="text-xl text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Accordion;
