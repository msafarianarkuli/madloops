import React from "react";

const Login = () => {
  return (
    <div className="container m-auto">
      <div className="grid grid-cols-2 h-screen">
        <div className="col-span-1 bg-lite-gray relative">
          <div className="h-650 bg-red-200"></div>
          <div className="h-20 w-full bg-red-500 absolute bottom-0">a</div>
        </div>
        <div className="col-span-1 bg-white">
          <div className="h-56 bg-blue-300"></div>
          <div className="h-[487px] bg-blue-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
