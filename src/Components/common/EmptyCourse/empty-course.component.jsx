import React, { useEffect } from "react";
import "../EmptyCourse/empty-course.styles.scss";

const EmptyCourse = () => {
  useEffect(() => {
    document.querySelector(".cont_principal").className =
      "cont_principal cont_error_active";
  }, []);

  return (
    <div className="cont_principal">
      <div className="cont_error absolute lg:mt-[170px] lg:mr-[340px] sm:mt-[150px] md:mr-[280px] sm:mr-[220px]  mt-[130px] mr-[140px]">
        <p className="lg:text-4xl sm:text-3xl text-xl">دوره ای موجود نیست.</p>
      </div>
      <div className="cont_aura_1"></div>
      <div className="cont_aura_2"></div>
    </div>
  );
};

export default EmptyCourse;
