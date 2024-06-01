import Navbar from "../components/Navbar"
import Video from "../components/Video"


const data=new Map();
data.set("Short-Films Edited:-",
    [
        {
            head:"PHANTOM-THE SILENCE",
            des:" Join us on a solitary journey down an eerily desolate road, where every step amplifies the heartbeat of fear. What happens when a desperate lover answers the call of a mysterious voice, only to find himself trapped in the realm of the unknown?",
            url:""
        },
    ]
);

data.set("Freshers Induction Video 2022:-",
    [
        {
            head:"",
            des:"It's been a while since you guys have come to this campus and most of you must have been amazed by our lush green picturesque campus. You guys might feel like entrapping all the meandering roadways and pleasant scenarios that you get to see each day in your hearts. Well we would suggest you to rather save it in the memory of your camera and stand a chance to portray the photographer within you to the outside world. Don't miss the chance to learn, teach and explore your skills regarding photography while you're here.",
            url:""
        },
    ]
);

var r=[200,300,500];
var events=Array.from(data.keys());


function Editing (){


    return (<div>
        <Navbar></Navbar>
        <div className=" border-y-[2px] py-[5rem] ">
             {events.map((el,key)=> {
               return (<Video title={el} key={key} data={data.get(el)}></Video>);
            })}
        </div>

        {/* for the reels */}

        <div className="py-[2rem] grid grid-cols-reels">
            <div className="text-center font-Orbitron text-3xl col-span-2 py-[5rem]"> MY REELS </div>
               {r.map(el=>{
                return (<><div className="rounded-xl  bg-[#346cbf] h-[20vw] w-[40vw] ml-[auto] my-[2rem]"></div><div></div></>);
            })}
            

        </div>

</div>
    );
}

export default Editing;