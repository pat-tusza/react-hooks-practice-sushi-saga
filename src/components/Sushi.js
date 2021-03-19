import React, {useState} from "react";

function Sushi({name, image, price}) {
  const [isEaten, setIsEaten] = useState(false)
  
  function handleIsEatenClick(){
    setIsEaten(true)
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleIsEatenClick}>
        {isEaten ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
