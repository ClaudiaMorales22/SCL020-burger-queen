import { useState } from "react";
import MenuItem from "./MenuItem";

function MenuList({ MenuData }) {
    // console.log(props);
    const [selectedDish, setSelectedDish] = useState("tablas");
  
    const onSelectedDish = (e) => {
      setSelectedDish(e.target.dataset.id);
    };
  
    return (
      <div className="container-menu">
        <div className="menuButtons">
          <button className="tableButton" data-id="tablas" onClick={onSelectedDish}>
            Tablas
          </button>
          <button className="tableButton" data-id="tablasVeg" onClick={onSelectedDish}>
            Tablas Veg
          </button>
          <button className="tableButton" data-id="bebestibles" onClick={onSelectedDish}>
            Bebestibles
          </button>
          <button className="tableButton" data-id="postres" onClick={onSelectedDish}>
            Postres
          </button>
        </div>
        <div>
          {MenuData[selectedDish].map((element) => {
            return (
              <MenuItem
                key={`${element.name}${element.key}`}
                name={element.name}
              />
            );
          })}
        </div>
      </div>
    );
  }
  export default MenuList;