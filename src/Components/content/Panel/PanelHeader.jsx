import React from 'react';
import { Formik, Form } from 'formik';
import { useLocation } from 'react-router-dom';
import Input from '../../common/Inputs/TextInputs/Input';
import { Button } from '../../common/button-component/button.component';
import zing from '../../../Assets/img-user-panel/zing.svg';
import cart from '../../../Assets/img-user-panel/cart.svg';

const PanelHeader = ({ data, onSearch }) => {
  let location = useLocation();
  return (
    <div className="flex justify-end items-center py-5 lg:py-8 px-4 lg:px-2">
      <div className="basis-1/4">
        <img
          src={zing}
          className="ml-auto sm:mx-auto cursor-pointer w-10 h-10 sm:w-auto sm:h-auto"
        />
      </div>
      <div className="basis-1/2">
        {location.pathname === '/user-panel' ? (
          <p className="text-3xl md:text-4xl xl:text-5xl text-center font-bold text-lite-purple">
            داشبورد
          </p>
        ) : (
          <Formik
            initialValues={{ search: '' }}
            onSubmit={(values) => {
              onSearch(
                data.filter((course) =>
                  course.name.includes(values.search)
                )
              );
            }}
          >
            <Form>
              <Input
                name="search"
                type="search"
                placeholder="دوره مورد نظر.."
                err={true}
                className="border mb-3 rounded-full w-full text-sm sm:text-lg py-1 md:py-2 px-2 focus:outline focus:outline-gray-400"
              />
              <Button
                ButtonType="submit"
                classButton="border rounded-3xl w-full py-1 md:py-2 px-2 border-lite-blue text-lite-blue hover:text-white hover:bg-lite-blue
                transition ease-in-out duration-100"
              >
                جست و جو
              </Button>
            </Form>
          </Formik>
        )}
      </div>
      <div className="basis-1/4">
        <img
          src={cart}
          className="mr-auto sm:mx-auto cursor-pointer w-10 h-10 sm:w-auto sm:h-auto"
        />
      </div>
    </div>
  );
};

export default PanelHeader;
