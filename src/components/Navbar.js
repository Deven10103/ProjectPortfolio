import Navs from './Navs';
import Sidebar from './Sidebar';


function Navbar(){

    return (<div className="Container grid grid-cols-4  items-center h-[3rem] m-4 bg-gradient-to-b from-navdeep to-navlight rounded-xl">
        <Sidebar  url="/" className="left"></Sidebar> 
        <div className='flex justify-between col-start-2 col-end-4 text-[1.3rem]'>
            <Navs url="/Photography" className="Nbar" name="Photography"></Navs>
            <Navs url="/Editing" className="Nbar" name="Video Editing"></Navs>
            <Navs url="" className="Nbar" name="Videography"></Navs>
            </div>
        <Sidebar url="/About" className="right"></Sidebar>
    </div>);
}
export default Navbar
// #0b0f4d
// rgba(11,15,77,255)

// #203d79
// rgba(32,61,121,255)