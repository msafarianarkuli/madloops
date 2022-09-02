import { FieldName } from "./../../common/field-name-component/field-name.component";

const LandingTeacher = () => {
  return (
    <div className="land">
      <div className="text-center mt-5">
        <FieldName
          showH2
          showP
          classH2Field="text-neutral-900 font-bold sm:text-3xl text-xl mr-4 "
          title="مقالات و خبر ها"
          classPfield="text-slate-400 sm:text-base text-xs mt-2"
          field="با خبر های ما بروز باشید"
        />
      </div>
    </div>
  );
};

export default LandingTeacher;
