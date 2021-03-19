import React, {useState, useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({api}) {
  const [sushiArr, setSushiArr] = useState([])
  const [sushiSpot, setSushiSpot] = useState(0)

  useEffect(()=> {
    fetch(api)
    .then(r => r.json())
    .then(sushi =>{
      setSushiArr(sushi.slice(sushiSpot,sushiSpot+4))
    })
  }, [sushiSpot])

  const fourSushi = sushiArr.map((sushi) =>{
    return <Sushi key={sushi.id} name = {sushi.name} image= {sushi.img_url} price= {sushi.price} />
  })
    
  function nextSushiPlz(){
    setSushiSpot(sushiSpot + 4)
  }

  return (
    <div className="belt">
      {fourSushi}
      <MoreButton nextSushiPlz={nextSushiPlz} />
      
    </div>
  );
}

export default SushiContainer;
