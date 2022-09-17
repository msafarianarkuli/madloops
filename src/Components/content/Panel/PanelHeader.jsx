import React from 'react';
import Input from '../../common/Inputs/TextInputs/Input';
import { Button } from '../../common/button-component/button.component';
import zing from '../../../Assets/img-user-panel/zing.svg';
import cart from '../../../Assets/img-user-panel/cart.svg';
import { Formik, Form } from 'formik';
const PanelHeader = () => {
  return (
    <div className="flex justify-end lg:py-8 px-2">
      <div className="basis-1/4 order-3 sm:order-1 hidden sm:block">
        <img
          src={zing}
          className="mr-auto sm:mx-auto cursor-pointer w-10 h-10 sm:w-auto sm:h-auto"
        />
      </div>
      <div className="basis-1/2 order-1 sm:order-2">
        {/* <Formik
          initialValues={{ search: '' }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <Input
              name="search"
              type="search"
              placeholder="دوره مورد نظر را سرچ کنید..."
              className="border rounded-3xl w-full py-2 px-2 focus:outline focus:outline-gray-400 mb-2"
            />
            <Button
              ButtonType="submit"
              classButton="border rounded-3xl w-full py-2 px-2 border-blue-700 text-blue-700 hover:text-white hover:bg-blue-700
                transition ease-in-out duration-100"
            >
              جست و جو
            </Button>
          </Form>
        </Formik> */}
        <p className="text-3xl md:text-6xl text-center font-bold text-lite-purple">
          داشبورد
        </p>
      </div>
      <div className="basis-1/4 order-2 sm:order-3">
        <img
          src={cart}
          className="mr-auto sm:mx-auto cursor-pointer w-10 h-10 sm:w-auto sm:h-auto"
        />
      </div>
    </div>
  );
};

export default PanelHeader;
