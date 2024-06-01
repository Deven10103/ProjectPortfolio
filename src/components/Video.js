

function Video(props){
// console.log({props});
var vid=props.data;
return (
    <div className="grid grid-cols-reels my-[3rem] p-[4rem] ">
        <div className="font-Orbitron text-2xl col-span-2 my-[1rem]">{props.title}</div>
        {props.data.map(el=>{ return (<>
        <div className="bg-[#346cbf] h-[22vw] w-[40vw] my-[2rem] rounded-2xl">
        
        </div >
        <div className="my-auto w-[85%] text-center my-[4rem]">
            <h className="font-Palanquin text-[1.24rem] mb-[2.5rem] w-[100%] block">{el.head}</h>
           <p className="pfont-Palanquin text-[1.05rem] leading-7">{el.des}</p> 
        </div>
        </>)}
        )}
       </div>
)
}
export default Video;