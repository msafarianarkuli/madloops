import { FieldName } from "./../../common/field-name-component/field-name.component";
import { Button } from "./../../common/button-component/button.component";

const LandingBlog = () => {
  return (
    <div className="container">
      <div className="flex justify-around mt-5">
        <Button classButton="text-xl p-3 text-blue-600 outline rounded-2xl hover:bg-blue-600 hover:text-white transition ease-in-out delay-150">
          همه مطالب
        </Button>
        <div className="flex">
          <FieldName
            showH2
            classH2Field="text-neutral-900 text-xl mr-4"
            title="مقالات و خبر ها"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <rect
              id="Rectangle_3"
              data-name="Rectangle 3"
              width="30"
              height="30"
              rx="5"
              fill="#4784da"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LandingBlog;
