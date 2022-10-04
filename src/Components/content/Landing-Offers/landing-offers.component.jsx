import React from 'react';
import LandingTitle from '../../common/LandingTitle/LandingTitle';
import OffersForm from '../../common/OffersForm/OffersForm';
import offers from '../../../Assets/img/offerss.svg';

const LandingOffers = () => {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <LandingTitle
            title="پیشنهادات و انتقادات"
            className="mt-20 mb-10"
          >
            می توانید در باکس زیر پیشنهاد خود را وارد کنید
          </LandingTitle>
          <div className="md:bg-gray-300 grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-center items-center">
              <OffersForm />
            </div>
            <div className="hidden md:block">
              <img className="w-96 py-14" src={offers} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingOffers;
