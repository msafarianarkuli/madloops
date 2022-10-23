import { useEffect, useState } from 'react';
function BackToTop() {
  const [strokeDashOffset, setstrokeDashOffset] = useState('1000');
  const [showTopBtn, setShowTopBtn] = useState(false);

  const hideAndShow = () => {
    if (window.scrollY > 100) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
  };

  const drawCircleOnScroll = () => {
    const percentageComplete =
      (document.documentElement.scrollTop /
        (document.documentElement.offsetHeight -
          window.innerHeight)) *
      30;
    const newUnit = 1000;
    const offsetUnit = percentageComplete * (newUnit / 100);
    setstrokeDashOffset(newUnit - offsetUnit);
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scroll = () => {
    window.addEventListener('scroll', () => {
      hideAndShow();
      drawCircleOnScroll();
    });
  };

  useEffect(() => {
    scroll();
  }, []);

  return (
    <>
      <h1>Scroll down</h1>

      {showTopBtn && (
        <>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="50px"
            height="50px"
            viewBox="0 0 130 130"
            enableBackground="new 0 0 130 130"
            xmlSpace="preserve"
            className="fixed bottom-[10px] right-[10px] rotate-180 cursor-pointer z-[998]"
            onClick={goToTop}
          >
            <path
              fill="#fff"
              stroke="#5DC8B2"
              className="gauge-path bg-white dark:bg-red-500"
              style={{ strokeDashoffset: strokeDashOffset }}
              d="M83,99.916c-24.806,0-44.916-20.109-44.916-44.916
		c0-24.806,20.109-44.917,44.916-44.917c24.807,0,44.916,20.11,44.916,44.917C127.916,79.807,107.807,99.916,83,99.916z"
            />
          </svg>
          <svg
            stroke="currentColor"
            fill="#5DC8B2"
            stroke-width="1"
            viewBox="0 0 350 512"
            height="1.5em"
            width="1.5em"
            className="fixed bottom-[19px] right-[29px] cursor-pointer z-[999]"
            xmlns="http://www.w3.org/2000/svg"
            onClick={goToTop}
          >
            <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path>
          </svg>
        </>
      )}
    </>
  );
}

export default BackToTop;
