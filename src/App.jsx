import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import styles from "./App.css"
import FoodInput from "./components/FoodInput";
import { useState } from "react";
import React from "react";


//child to parent, usestate

function App() {
   
 
     

   
     let [foodItems, setFoodItems]=useState(["banana", "mango", "apple", "milk","cake"]);
  
    
    
     

     const onKeyDown=(event)=>{
      if (event.key === "Enter"){

         let newFoodItem= event.target.value;
         let newItem=[...foodItems, newFoodItem];
         setFoodItems(newItem);
       

      }
        
        
    };
 
     return(
        <>
        <Container>
         
             <h1 className={styles.h1}>Foods </h1>
             <FoodInput handleKeyDown={onKeyDown}/>
             
             <ErrorMessage ok={foodItems}/>
           
             <FoodItems ok={foodItems}/>
            
        </Container>

            
   
     </>
          
            
 
     );
 
 
 }
 export default App;