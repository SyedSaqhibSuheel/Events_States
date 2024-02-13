const ErrorMessage =({ok})=>{

   
    return( <>{ok.length ===0 && <h3>i am hungry</h3>}</>);
}

export default ErrorMessage;