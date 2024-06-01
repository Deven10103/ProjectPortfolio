import Navbar from "../components/Navbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope ,faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faInstagram,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'


function Am(){
return (
    <div>
        <Navbar></Navbar>
        <div className=" w-[50vw]   mt-[10rem] mx-[auto] grid grid-cols-3 " >
           
           <div className="h-[15rem]">
            <div ></div>

           </div>
           <span className="col-span-2 grid grid-rows-3 items-center m-0">


            <div>
                <FontAwesomeIcon className="h-[2.2rem]" icon={faPhone} />
                <p className="inline-block font-NicoMoji ml-[85px] text-xl" >+91 7004 70 70 53</p>
            </div>


            <div>
                <FontAwesomeIcon className="h-[2.2rem]" icon={faEnvelope} /><p className="inline-block font-NicoMoji ml-[85px] text-xl">karan700470@gmail.com</p></div>


            <div className="grid grid-cols-3 w-[80%] mt-[auto]" >
                <FontAwesomeIcon className="h-[2.5rem]" icon={faFacebook} />
                <FontAwesomeIcon className="h-[2.5rem]" icon={faLinkedinIn} />
                <FontAwesomeIcon className="h-[2.5rem]" icon={faInstagram} /></div>
           </span>

        </div>

    </div>
);
}
export default Am;