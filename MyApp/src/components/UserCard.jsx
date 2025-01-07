
import image from "../assets/DP.jpg"
import '../components/UserCard.css'


const  UserCard=()=>{
    return (
      <div className="user-container">
      
          <p id="user-name">My App</p>
          <img src={image} alt="image" id="user-img"></img>
          <p id="user-des">User Description</p>
      
      </div>
    );
}

export default UserCard;