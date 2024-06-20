import Gallery from "../Pages/Gallery"

function Eve(prop){
    var data =prop.data;
    var index=prop.ind;
    
    var styled=" flex border-t-[2px] mt-[4rem]";
    if (index%2!==0){
        styled=styled+" flex-row-reverse";
       
    }

    return (<div className={styled}>
     <span className="w-[45vw]">
       <div className="w-[75%] my-[10rem] mx-[auto] text-center "> <h1 className="font-Orbitron text-3xl">{data.name}</h1>
        <p className="font-Palanquin my-[6rem] text-[1.05rem] leading-7">{data.dis}</p>
        </div>
     </span>
     <span className="w-[55vw] h-[auto] m-0">
        <div className="w-[auto] h-[100%] pr-[5vw] py-[3vw]" >
            <Gallery event={data.name}></Gallery>
        </div>
     </span>
     
    </div>)

}
export default Eve;