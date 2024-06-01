import Navs from './Navs';

function Sidebar(props){
    var name,justify;
    if (props.className==="left")
         {name="Home";
        justify="justify-self-start mx-5 text-[1.1rem]";}
    else
   { name="About Me";
    justify="justify-self-end mx-5 text-[1.1rem]";}

    return (
       
        <div className={justify} >
            <Navs url={props.url} className="Sbar " name={name}></Navs>
            
    
      
    </div>);
}
export default Sidebar