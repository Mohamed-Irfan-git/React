
import '../css/course.css'
import html from '../assets/example.jpg'
import PropTypes from 'prop-types';
import { useState } from 'react';
function Course(props){


    const [purchased,setPurchased] = useState(false);

    function BuyCourse(discount){
       console.log(props.name, "Purchased with", discount, "%discount")
       setPurchased(true);
       console.log(purchased)
       
    }
    
    return(
        
        <div className="Card">
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <button onClick={(event)=>BuyCourse(20,event)}>Buy now</button>
            <p>{purchased ? "already purchased" : "Get it now"}</p>
        </div>
    );
}

Course.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    rating: PropTypes.number
};

Course.defaultProps = {
    image: html
}
export default Course