import { useState } from "react";
import MenuItem from "./MenuItem";

function MenuList({ }) {
    // console.log(props);
    const [selectedDish, setSelectedDish] = useState("tablas");
   
  
    return (
        <>
      <div className="container-menu">
        <div className="menuButtons">
          <button className="tableButton" onClick={setSelectedDish}>
            Tablas
          </button>
          <button className="tableButton" onClick={setSelectedDish}>
            Tablas Veg
          </button>
          <button className="tableButton" onClick={setSelectedDish}>
            Bebestibles
          </button>
          <button className="tableButton" onClick={setSelectedDish}>
            Postres
          </button>
        </div>
      </div>
      <div>
       
      </div>
      
      </>
    );
  }
  export default MenuList;