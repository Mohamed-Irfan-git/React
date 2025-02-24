import Course from "./Course"
import css from '../assets/example.jpg'
import html from '../assets/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.webp'

function CourseList(){
    const courses = [
        {
            id : 1,
            image : css,
            name : "HTML Course",
            price : 1000,
            rating : "4"

        },

        {
            id : 2,
            image : html,
            name : "CSS Course",
            price : 3000,
            rating : "4"

        },

        {
            id : 3,
            image : html,
            name : "JAVA Course",
            price : 10000,
            rating : "4"

        },

        {
            id : 4,
            image : html,
            name : "SPRING Course",
            price : 8000,
            rating : "4"

        },

        {
            id : 5,
            image : css,
            name : "JAVASCRIPT Course",
            price : 5000,
            rating : "4"

        },

        {
            id : 6,
            image : html,
            name : "FLUTTER Course",
            price : 9000,
            rating : "4"

        },

        {
            id : 7,
            image : html,
            name : "REACT Course",
            price : 7000,
            rating : "4"

        },


        

    ];

    courses.sort((x,y)=>(x.price -y.price));
    const vmCourse = courses.filter((course)=>(course.price<15000))

    const coursesList = vmCourse.map(
        (course, index)=>(<Course key={index} name = {course.name}
        image = {course.image}
        price = {course.price}
        rating = {course.rating}
        />));


   return(
        <>
        {coursesList}
        </>
   );     
  



}

export default CourseList