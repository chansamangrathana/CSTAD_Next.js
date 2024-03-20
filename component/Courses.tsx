import CardComponent from "@/component/CourseCardComponent";
export type Courses = {
    readonly id : number;
    title :string;
    image: string;
    description : string
}
export default function Courses () {
    const courses1: Courses[] = [
        {
            "id": 1,
            "title": "Flutter Mobile Development",
            "image": "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps ."
        },
        {
            "id": 2,
            "title": "iOS Development",
            "image": "https://api.istad.co/media/image/4709913c-3dd4-4896-8b05-ba6f7fd074ba.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps ."
          
        },
        {
            "id": 3,
            "title": "DEVOPS ENGINEERING",
            "image": "https://api.istad.co/media/image/835a7298-dbab-448d-8229-ee8a555c4846.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps ."
          
        },
        {
            "id": 4,
            "title": "DOCKER",
            "image": "https://api.istad.co/media/image/3d7beaad-309a-4f2f-91e2-b3be705ef3f6.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps ."
          },
        {
            "id": 1,
            "title": "Flutter Mobile Development",
            "image": "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps ."
          },
        {
            "id": 2,
            "title": "iOS Development",
            "image": "https://api.istad.co/media/image/4709913c-3dd4-4896-8b05-ba6f7fd074ba.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps ."
          },
        {
            "id": 3,
            "title": "DEVOPS ENGINEERING",
            "image": "https://api.istad.co/media/image/835a7298-dbab-448d-8229-ee8a555c4846.png",
            "description":"Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps ."
          },
        {
            "id": 4,
            "title": "DOCKER",
            "image": "https://api.istad.co/media/image/3d7beaad-309a-4f2f-91e2-b3be705ef3f6.png",
            "description":"Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps ."
          },
      ]
    return(
        <div className="flex justify-center ">
        <div className="ml-[0px]">
            <CardComponent courses={courses1}/>
        </div>
        </div>
    )
}
