/* eslint-disable react/prop-types */

import image from "../assets/DP.jpg"
import '../components/UserCard.css'


const  UserCard=(props)=>{
    return (
      <div className="user-container">
      
          <p id="user-name">{props.name}</p>
          <img src={image} alt="image" id="user-img"></img>
          <p id="user-des">{props.des}</p>
      
      </div>
    );
}

export default UserCard;