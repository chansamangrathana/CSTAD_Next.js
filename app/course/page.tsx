import React from "react";

import CourseCardComponent from "@/component/Courses";

export default function () {
  return (
    <div>
      <div>
        <h1 className="text-[24px] font-bold m-1 mt-3 text-center">COURSES</h1>
      </div>
      <CourseCardComponent />
    </div>
  );
}
