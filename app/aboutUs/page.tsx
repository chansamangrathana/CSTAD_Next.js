import React from 'react'
import {BiGlobe, BiLogoFacebook, BiLogoTelegram, BiLogoYoutube, BiPhone, BiPointer, BiShowAlt} from "react-icons/bi";
import {FaTerminal} from "react-icons/fa6";
import Image from "next/image";
import {GoGoal} from "react-icons/go";
import {List} from "flowbite-react";
import {BsChat} from "react-icons/bs";
import {FaMapMarker} from "react-icons/fa";
import {MdEmail} from "react-icons/md";

export default function page() {
    return (
        <>
        <div className='bg-gray-100 mx-36'>
        <div className=" container mx-auto grid grid-cols-1 gap-4 my-8 ">
          <div className="bg-white p-6 grid grid-cols-1 gap-2">
              <h1 className="flex items-center text-xl font-bold tracking-[0.25rem]">
                  <FaTerminal className='text-blue-900'/>
                  <span className="ml-2">WHAT IS CENTER OF SCIENCE AND TECHNOLOGY ADVANCED DEVELOPMENT?</span>
              </h1>
              <p>
                  CSTAD is a noteworthy science and technology center in Cambodia. CSTAD has routed Cambodian students
                  to advanced science and technology, research, and develop digital skills and our graduates have been
                  guaranteed excellent job opportunities with the Top IT company. CSTAD will continue to provide
                  high-quality training with the latest methodology, and roadmap as well as the best choice for those
                  who want to be an IT expert in Cambodia.
              </p>
              <div className="grid place-content-center">
                  <img src="https://istad.co/resources/img/logo_md.png" className="w-80"/>
              </div>
          </div>
          
      </div>
      </div>
     
        </>
  )

}