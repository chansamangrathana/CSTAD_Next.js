
'use client';
import { FaTags } from "react-icons/fa";
import { Card } from 'flowbite-react';
import { IoIosTime } from "react-icons/io";
import { FaLayerGroup } from "react-icons/fa";
import { Courses } from '@/component/Courses';
type CourseProps = {
  courses: Courses[];
}
export default function CardComponent({courses}: CourseProps) {
  return (
    <div className="">
    <div className="w-25 h-auto p-5 flex flex-wrap grid-flow-row gap-4 justify-center">
     {courses.map((course) => (
    <div className="">
    <Card  imgSrc={course.image} horizontal>
      <div className="flex justify-between">
        <div className="w-[200px]">
      <h5 className="text-[16px] font-bold tracking-tight text-gray-900 dark:text-white w-[200px]">
        {course.title}
      </h5>
      <div className="bg-red-700 w-[120px] rounded-[20px]">
      <h1 className="text-[13px] text-white text-center mt-2">20% Scholarship</h1>
      </div>
      <p className="mt-2 text-[13px] font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
        {course.description}
      </p>
      </div>
      <div className="ml-[60px]">
        <div>
      <IoIosTime className="text-blue-800 inline" /><span className="text-[13px]"> 80 hours</span>
      </div>
      <FaLayerGroup className="text-blue-800 inline "/><span className="text-[13px]"> Medium</span>
      </div>
      </div>
    </Card>
    </div>
      ))}
    </div>
    </div>
  );
}