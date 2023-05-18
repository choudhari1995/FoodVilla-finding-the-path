import { useRouteError } from "react-router-dom";

const Error = () => {
    const err =useRouteError()
    console.log(err);
    return(<><h1>Oops  </h1>
    <h2>something went wrong</h2>
    <h2>{`${err.status} :  ${err.statusText} ${err.data}`}</h2>
    
    </>)
};

export default Error;

