import React from 'react';
import reactIcon from '../../../Assets/img-user-panel/React-icon.svg';
import PanelHeader from './PanelHeader';
import { Link, useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <PanelHeader />
      {/* 1 */}
      <div className="mx-2 md:mx-10 sm:my-5 relative overflow-hidden rounded-3xl">
        <div
          onClick={() => navigate('/user-panel/editProfile')}
          className="absolute top-0 sm:top-auto sm:bottom-0 left-0 px-8 py-2 sm:px-10 sm:py-4 rounded-tl-3xl rounded-br-3xl
           sm:rounded-tl-none sm:rounded-br-none sm:rounded-tr-3xl sm:rounded-bl-3xl border-4 text-xl font-bold text-blue-500
           hover:bg-lite-purple hover:text-white transition ease-in-out duration-300 cursor-pointer"
        >
          ویرایش
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-10 border-4 rounded-3xl text-gray-400
          px-3 lg:px-10  py-5  text-lg lg:text-2xl"
        >
          <p>
            نام:{' '}
            <span className="text-lite-purple font-bold">
              میکائیل
            </span>
          </p>

          <p>
            نام خانوادگی:{' '}
            <span className="text-lite-purple font-bold">محسنی</span>
          </p>

          <p>
            شماره همراه:{' '}
            <span className="text-lite-purple font-bold">
              09031471874
            </span>
          </p>

          <p>
            شماره ملی:{' '}
            <span className="text-lite-purple font-bold">
              2150008898
            </span>
          </p>

          <p>
            ایمیل:{' '}
            <span className="text-lite-purple text-sm lg:text-xl font-bold">
              infoAcademicfirst@gmail.com
            </span>
          </p>
        </div>
      </div>

      {/* end 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-2 lg:mx-10 mt-6">
        <div>
          <p className="text-gray-500 text-2xl lg:text-3xl font-bold mr-5 lg:mr-10 mb-2 lg:mb-6">
            آخرین دوره ثبت شده:
          </p>
          <Link to="/single-course">
            <div
              className="border-4 rounded-3xl py-4 px-6 flex bg-gradient-to-l from-lite-gray to-white
              hover:ring group hover:ring-gray-400 hover:ring-offset-0 transition ease-out duration-300 cursor-pointer"
            >
              <img src={reactIcon} className="w-20 group-hover:rotate-[360deg] duration-700" />
              <div className="w-full mr-5 sm:mr-10">
                <p className="text-2xl font-bold mb-4">دوره css </p>
                <div className="flex flex-col text-lg">
                  <span className="border-b py-4 sm:py-8">
                    مهدی اصغری
                  </span>
                  <span className="py-4 sm:py-6">500,000 ت</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <p className="text-gray-500 text-2xl lg:text-3xl font-bold mr-5 lg:mr-10 mb-2 lg:mb-6">
            دوره های پیشنهادی:
          </p>
          <Link to="/single-course">
            <div
              className="border-4 rounded-3xl py-4 px-6 flex bg-gradient-to-l from-lite-gray to-white mb-6
              hover:ring group hover:ring-gray-400 hover:ring-offset-0 transition ease-out duration-300 cursor-pointer"
            >
              <img src={reactIcon} className="w-20 group-hover:rotate-[360deg] duration-700" />
              <div className="w-full mr-5 md:mr-10">
                <p className="text-xl md:text-2xl font-bold mb-4">
                  دوره React{' '}
                </p>
                <div className="sm:flex justify-between text-lg">
                  <div>دکتر بحر</div>
                  <div>500,000 ت</div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/single-course">
            <div
              className="border-4 rounded-3xl py-4 px-6 flex bg-gradient-to-l from-lite-gray to-white mb-6
              hover:ring group hover:ring-gray-400 hover:ring-offset-0 transition ease-out duration-300 cursor-pointer"
            >
              <img src={reactIcon} className="w-20 group-hover:rotate-[360deg] duration-700" />
              <div className="w-full mr-5 md:mr-10">
                <p className="text-xl md:text-2xl font-bold mb-4">
                  دوره HTML{' '}
                </p>
                <div className="sm:flex justify-between text-lg">
                  <div>دکتر بحر</div>
                  <div>500,000 ت</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
