import { useState } from "react";
import Item from "./Items";
const FoodItems=({ok})=>{

    let [activeItems, setActiveItems]= useState([]);

    let onBuyButton=(item, event)=>{
        let newItems=[...activeItems, item];
        setActiveItems(newItems);
    }
    

    return(  <ul className="list-group">
 
    {ok.map((items)=>( 
        <Item key={items} foodItem={items}
        bought={activeItems.includes(items)}
        handle={(event)=> onBuyButton(items, event)}/>
    ))}
   
   </ul>);

}

export default FoodItems;