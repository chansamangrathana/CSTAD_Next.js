"use client";

import { Carousel } from "flowbite-react";
import { customTheme } from "@/component/SliderComponent";
import CourseCardComponent from '@/component/Courses'
import Courses from "@/component/Courses";


export default function SliderComponent() {
  return (
    <div className="h-full z-10 relative flex">
      
      <Carousel slideInterval={30000} theme={customTheme.carousel}>
        <div className="relative">
          <div
            className="bg-cover bg-center bg-no-repeat h-screen w-screen"
            style={{
              backgroundImage: "url('https://i.pinimg.com/564x/c6/5d/41/c65d41095846c3ced34638f8d2009518.jpg')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gray-900 bg-opacity-80 flex flex-col items-start justify-center text-white text-left p-5">
            <div className="w-100 h-full flex flex-col justify-center ml-5 sm:ml-10 md:ml-20 xl:ml-30 2xl:ml-40">
              <h2 className="mb-5 text-2xl md:text-5xl font-bold">
                Center of Science and Technology Advanced Development
              </h2>
              <p className="mb-5 max-w-md">
                CSTAD is a noteworthy science and technology center in Cambodia.
                CSTAD has routed Cambodian students to advanced science and
                technology, research, and develop digital skills and our
                graduates have been guaranteed excellent job opportunities with
                the Top IT company. Enroll Now
              </p>
              <a
                href="/enroll"
                className="w-[150px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 md:mt-10"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className="bg-cover bg-center bg-no-repeat h-screen w-screen"
            style={{
              backgroundImage: "url('https://i.pinimg.com/564x/e6/69/5a/e6695acc4ba71fe8ae47c38d260ff302.jpg')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gray-900 bg-opacity-60 flex flex-col items-start justify-center text-white text-left p-5">
            <div className="w-100 h-full flex flex-col justify-center ml-5 sm:ml-10 md:ml-20 xl:ml-30 2xl:ml-40">
              <h2 className="mb-5 text-2xl md:text-5xl font-bold">Vision</h2>
              <p className="mb-5 max-w-md">Advanced IT Center in Cambodia</p>
              <a
                href="/enroll"
                className="w-[150px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 md:mt-10"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className="bg-cover bg-center bg-no-repeat h-screen w-screen"
            style={{
              backgroundImage: "url('https://i.pinimg.com/564x/c5/fa/96/c5fa96d387eafe33bfe084fb46c3fc23.jpg')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col items-start justify-center text-white text-left p-5">
            <div className="w-100 h-full flex flex-col justify-center  ml-5 sm:ml-10 md:ml-20 xl:ml-30 2xl:ml-40">
              <h2 className="mb-5 text-2xl md:text-5xl font-bold">Mission</h2>
              <p className="mb-5 max-w-md">
                Provide the latest methodology with high-quality training and
                mentoring Build up the capacity and career of IT experts
                Cambodia Consult and connect CSTAD trainees to top IT careers
              </p>
              <a
                href="/enroll"
                className="w-[150px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 md:mt-10"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </Carousel>
      
    </div>
    
  );
 
}

