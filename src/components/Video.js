import Links from "./links"


function Video(props){
// console.log({props});
var vid=props.data;
return (
    <div className="grid grid-cols-reels my-[3rem] p-[4rem] ">
        <div className="font-Orbitron text-2xl col-span-2 my-[1rem]">{props.title}</div>
        {props.data.map(el=>{ return (
            <Links data={el}></Links>
        )}
        )}
       </div>
)
}
export default Video;