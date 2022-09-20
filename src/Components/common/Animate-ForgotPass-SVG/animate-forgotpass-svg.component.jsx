import React, { Component } from "react";
import "../Animate-ForgotPass-SVG/animate-forgotpass-svg.styles.scss"

const AnimateForgotPassSvg = () => {
  const fogotLogo = document.querySelectorAll("#fogotLogo path");
  for (let i = 0; i < fogotLogo.length; i++) {
    console.log(`Letter ${i} is ${fogotLogo[i].getTotalLength()}`);
  }

  return (
    <div className="">
      <svg
        className="xl:w-80 lg:w-72 md:w-60"
        id="fogotLogo"
        width="234"
        height="234"
        viewBox="0 0 234 234"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          id="circle"
          cx="117"
          cy="117"
          r="113.5"
          stroke="#ECFDF3"
          stroke-width="7"
        />
        <circle
          id="circle2"
          cx="117"
          cy="117"
          r="113.5"
          stroke="#ECFDF3"
          stroke-width="7"
        />
        <path
          id="circle3"
          d="M207.332 115.842C207.332 163.769 167.968 202.698 119.317 202.698C70.6654 202.698 31.302 163.769 31.302 115.842C31.302 67.9142 70.6654 28.9854 119.317 28.9854C167.968 28.9854 207.332 67.9142 207.332 115.842Z"
          stroke="#D1F9DE"
          stroke-width="7"
        />
        <path
          id="circle4"
          d="M207.332 115.842C207.332 163.769 167.968 202.698 119.317 202.698C70.6654 202.698 31.302 163.769 31.302 115.842C31.302 67.9142 70.6654 28.9854 119.317 28.9854C167.968 28.9854 207.332 67.9142 207.332 115.842Z"
          stroke="#D1F9DE"
          stroke-width="7"
        />
        <path
          id="circle5"
          d="M97.0001 107.5C93.5001 104 88.5001 109 91.5001 112L113 132.5C117.8 136.5 123.333 134.166 125.5 132.5L167 80.9998C170.5 75.9998 164 72.5 161 76.4998L121 126C120 127.5 118.667 127 118 126.5L97.0001 107.5Z"
          stroke="#00C9A3"
          stroke-width="3"
        />
        <path
          id="circle6"
          d="M97.0001 107.5C93.5001 104 88.5001 109 91.5001 112L113 132.5C117.8 136.5 123.333 134.166 125.5 132.5L167 80.9998C170.5 75.9998 164 72.5 161 76.4998L121 126C120 127.5 118.667 127 118 126.5L97.0001 107.5Z"
          stroke="#00C9A3"
          stroke-width="3"
        />
        <mask id="path-4-inside-1_0_1" fill="white">
          <path d="M147.174 81.6467C148.707 79.7841 148.449 77.0141 146.458 75.6517C140.025 71.2485 132.624 68.4149 124.852 67.4093C115.632 66.2162 106.263 67.6438 97.8164 71.5285C89.3701 75.4132 82.1885 81.5979 77.094 89.3745C71.9994 97.1512 69.1979 106.205 69.0101 115.5C68.8223 124.795 71.2559 133.955 76.0322 141.931C80.8085 149.907 87.7344 156.377 96.0169 160.599C104.299 164.822 113.604 166.627 122.864 165.807C130.671 165.116 138.18 162.584 144.786 158.444C146.83 157.163 147.199 154.406 145.743 152.483V152.483C144.287 150.56 141.558 150.204 139.491 151.446C134.212 154.617 128.266 156.56 122.094 157.107C114.468 157.782 106.805 156.295 99.9842 152.818C93.1632 149.34 87.4594 144.012 83.5259 137.444C79.5924 130.875 77.5882 123.331 77.7428 115.677C77.8975 108.022 80.2047 100.565 84.4003 94.161C88.5959 87.7566 94.5102 82.6631 101.466 79.4639C108.422 76.2647 116.138 75.0891 123.731 76.0716C129.876 76.8666 135.738 79.049 140.885 82.4304C142.901 83.7548 145.642 83.5094 147.174 81.6467V81.6467Z" />
        </mask>
        <path
          id="circle7"
          d="M147.174 81.6467C148.707 79.7841 148.449 77.0141 146.458 75.6517C140.025 71.2485 132.624 68.4149 124.852 67.4093C115.632 66.2162 106.263 67.6438 97.8164 71.5285C89.3701 75.4132 82.1885 81.5979 77.094 89.3745C71.9994 97.1512 69.1979 106.205 69.0101 115.5C68.8223 124.795 71.2559 133.955 76.0322 141.931C80.8085 149.907 87.7344 156.377 96.0169 160.599C104.299 164.822 113.604 166.627 122.864 165.807C130.671 165.116 138.18 162.584 144.786 158.444C146.83 157.163 147.199 154.406 145.743 152.483V152.483C144.287 150.56 141.558 150.204 139.491 151.446C134.212 154.617 128.266 156.56 122.094 157.107C114.468 157.782 106.805 156.295 99.9842 152.818C93.1632 149.34 87.4594 144.012 83.5259 137.444C79.5924 130.875 77.5882 123.331 77.7428 115.677C77.8975 108.022 80.2047 100.565 84.4003 94.161C88.5959 87.7566 94.5102 82.6631 101.466 79.4639C108.422 76.2647 116.138 75.0891 123.731 76.0716C129.876 76.8666 135.738 79.049 140.885 82.4304C142.901 83.7548 145.642 83.5094 147.174 81.6467V81.6467Z"
          stroke="#00C9A3"
          stroke-width="6"
          mask="url(#path-4-inside-1_0_1)"
        />
        <path
          id="circle8"
          d="M147.174 81.6467C148.707 79.7841 148.449 77.0141 146.458 75.6517C140.025 71.2485 132.624 68.4149 124.852 67.4093C115.632 66.2162 106.263 67.6438 97.8164 71.5285C89.3701 75.4132 82.1885 81.5979 77.094 89.3745C71.9994 97.1512 69.1979 106.205 69.0101 115.5C68.8223 124.795 71.2559 133.955 76.0322 141.931C80.8085 149.907 87.7344 156.377 96.0169 160.599C104.299 164.822 113.604 166.627 122.864 165.807C130.671 165.116 138.18 162.584 144.786 158.444C146.83 157.163 147.199 154.406 145.743 152.483V152.483C144.287 150.56 141.558 150.204 139.491 151.446C134.212 154.617 128.266 156.56 122.094 157.107C114.468 157.782 106.805 156.295 99.9842 152.818C93.1632 149.34 87.4594 144.012 83.5259 137.444C79.5924 130.875 77.5882 123.331 77.7428 115.677C77.8975 108.022 80.2047 100.565 84.4003 94.161C88.5959 87.7566 94.5102 82.6631 101.466 79.4639C108.422 76.2647 116.138 75.0891 123.731 76.0716C129.876 76.8666 135.738 79.049 140.885 82.4304C142.901 83.7548 145.642 83.5094 147.174 81.6467V81.6467Z"
          stroke="#00C9A3"
          stroke-width="6"
          mask="url(#path-4-inside-1_0_1)"
        />
        <mask id="path-5-inside-2_0_1" fill="white">
          <path d="M153.752 144.682C155.636 146.188 158.403 145.891 159.737 143.882C163.607 138.054 166.207 131.457 167.346 124.521C168.485 117.586 168.131 110.504 166.328 103.744C165.707 101.414 163.181 100.248 160.914 101.072V101.072C158.647 101.897 157.503 104.4 158.08 106.742C159.397 112.082 159.623 117.649 158.727 123.106C157.83 128.563 155.836 133.766 152.881 138.404C151.585 140.439 151.869 143.176 153.752 144.682V144.682Z" />
        </mask>
        <path
          id="little-cik"
          d="M153.752 144.682C155.636 146.188 158.403 145.891 159.737 143.882C163.607 138.054 166.207 131.457 167.346 124.521C168.485 117.586 168.131 110.504 166.328 103.744C165.707 101.414 163.181 100.248 160.914 101.072V101.072C158.647 101.897 157.503 104.4 158.08 106.742C159.397 112.082 159.623 117.649 158.727 123.106C157.83 128.563 155.836 133.766 152.881 138.404C151.585 140.439 151.869 143.176 153.752 144.682V144.682Z"
          stroke="#00C9A3"
          stroke-width="6"
          mask="url(#path-5-inside-2_0_1)"
        />
        <path
          id="little-cik2"
          d="M153.752 144.682C155.636 146.188 158.403 145.891 159.737 143.882C163.607 138.054 166.207 131.457 167.346 124.521C168.485 117.586 168.131 110.504 166.328 103.744C165.707 101.414 163.181 100.248 160.914 101.072V101.072C158.647 101.897 157.503 104.4 158.08 106.742C159.397 112.082 159.623 117.649 158.727 123.106C157.83 128.563 155.836 133.766 152.881 138.404C151.585 140.439 151.869 143.176 153.752 144.682V144.682Z"
          stroke="#00C9A3"
          stroke-width="6"
          mask="url(#path-5-inside-2_0_1)"
        />
      </svg>
    </div>
  );
};

export default AnimateForgotPassSvg;