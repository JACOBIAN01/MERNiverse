import {useState} from "react";
import "../components/UserCard.css"
const Hook=()=>{

    const[name,setname] = useState("Anju");
    return (
      <>
        <h3>My Favourit Person is {name}</h3>
        <button
          type="button"
          onClick={() => {
            setname("Adib");
          }}
        >Adib</button>
        <button
          type="button"
          onClick={() => {
            setname("Murli");
          }}
        >Murli</button>
        <button
          type="button"
          onClick={() => {
            setname("Rajib");
          }}
        >Rajib</button>
      </>
    );
}

export default Hook;