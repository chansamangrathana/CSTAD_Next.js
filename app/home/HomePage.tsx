import React from "react";
import SliderComponent from "./component/SliderComponent";
import CardComponent from "@/component/Courses";
import Content from "@/component/Content";

export default function Hompage() {
  return (
    <div className="w-full h-full flex flex-col mb-4">
      <div>
        <SliderComponent />
      </div>

      <div className="text-[24px] font-bold m-1 mt-3 text-center">COURSES</div>
        <CardComponent />
      <div className="text-[28px] text-black mt-6 mb-6 font-bold text-center">USE FULL CONTENTS</div>
      <Content/>
      
    </div>
  );
}
