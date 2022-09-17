import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import DashCourses from '../../../Core/services/Fake Service/DashCourses';
import Input from '../../common/Inputs/TextInputs/Input';
import { Button } from '../../common/button-component/button.component';
import PanelTable from './PanelTable';
import icon from '../../../Assets/img-user-panel/Addlist.png';
import zing from '../../../Assets/img-user-panel/zing.svg';
import cart from '../../../Assets/img-user-panel/cart.svg';
import { Formik, Form } from 'formik';
const MyCourses = () => {
  return (
    <div className="px-3 md:px-5">
      {/* <div className="flex justify-around py-8">
        <div>
          <img src={zing} alt="" />
        </div>
        <div className="">
          <Formik
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
                className="border rounded-3xl"
              />
              <Button classButton="w-full border rounded-2xl">
                جست و جو
              </Button>
            </Form>
          </Formik>
        </div>
        <div>
          <img src={cart} alt="" />
        </div>
      </div> */}
      <PanelTable
        data={DashCourses}
        icon={<FaTrashAlt className="mx-auto" />}
      />
    </div>
  );
};

export default MyCourses;
