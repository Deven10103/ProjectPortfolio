function Photo(props){
    var st='rounded-xl  bg-[#346cbf] ';

    
    if(props.vw==="ls")
        st=st+"w-[auto] h-[14vw] col-span-2 mx-[1.5vw] ";
        else{
            st=st+"w-[14vw] h-[26vw] row-span-2 mx-[auto] ";
        }

      
    return(
        <span className={st}>
            {/* <img src="https://drive.google.com/file/d/14FAqB8RAmY7jsW2DZOPplB-soNpYkCHJ/view?usp=drivesdk"></img> */}
        </span>
    );


}

export default Photo