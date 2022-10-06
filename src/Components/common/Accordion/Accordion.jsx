import React from 'react';

const Accordion = ({
  item,
  items,
  setItems,
  dir,
  headerActiveStyle,
  headerInactiveStyle,
  headerMainStyle,
  bodyMainStyle,
  bodyActiveStyle,
  bodyInactiveStyle,
  activeIcon,
  inactiveIcon,
  children,
}) => {
  const { id, title, description, active } = item;
  const handleToggle = (id) => {
    setItems(
      items.map((item) => {
        return item.id === id
          ? { ...item, active: !item.active }
          : { ...item, active: item.active };
      })
    );
  };
  return (
    <div className="mb-2" dir={dir}>
      <div
        onClick={() => handleToggle(id)}
        className={`${
          active ? headerActiveStyle : headerInactiveStyle
        } ${headerMainStyle} flex justify-between items-center text-gray-700 cursor-pointer`}
      >
        <div className="flex items-center gap-2">
          <h4 className="text-xl">{title}</h4>
        </div>
        <span>{active ? activeIcon : inactiveIcon}</span>
      </div>
      <div
        className={`${
          active ? bodyActiveStyle : bodyInactiveStyle
        } ${bodyMainStyle}`}
      >
        <p className="text-xl mb-1">{description}</p>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
