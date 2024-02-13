import styles from "./Items.module.css"
const Item=({foodItem,bought, handle})=>{

  
    
    return(
        <li className={`${styles["kg-item"]} list-group-item ${bought && "active"} `} >
            <span className={styles["kg-span"]}>{foodItem}</span>

            <button className={`${styles.button} btn btn-info  `}
            onClick={handle}>Buy</button>
            </li>
           

    );

}
export default Item;