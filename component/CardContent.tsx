import { FaTags } from "react-icons/fa";
import { Card } from 'flowbite-react';
import { Courses } from '@/component/Content';
type CourseProps = {
    courses: Courses[];
  }
export default function CardCarousel({ courses }: CourseProps) {
    const firstFourCourses = courses.slice(0,4)
    console.log(firstFourCourses)
    return (
      <div className="grid grid-cols-4">
        {firstFourCourses.map(course => (
          <Card key={course.id} className="w-[200px] mb-5" imgAlt="Meaningful alt text for an image that is not purely decorative">
            <img src={course.image} alt="" />
            <div className='flex justify-between'>
              <div>
                <FaTags className="text-blue-800 inline" /><span>blog</span>
              </div>
              <div>
                24/12/2023 
              </div>
            </div>
            <p className="text-black-800 dark:text-gray-400 font-bold">
              {course.title}
            </p>
          </Card>
        ))}
      </div>
    );
  }