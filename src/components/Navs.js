import {Link } from "react-router-dom";

function Navs(props){
    return(
    <Link to={props.url}><button  className="mx-4 my-2 font-NicoMoji font-thin text-white">
        {props.name}
    </button>
    </Link>
);


}

export default Navs