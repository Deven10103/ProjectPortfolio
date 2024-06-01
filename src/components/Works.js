import Photo from './Photo'

function Works(props){
    return(<div>
        <div className='font-Orbitron text-xl my-[60px]'>{props.name}</div>
        <div className='grid grid-cols-5   max-w-[85vw] mx-auto justify-center items-center'>
            <Photo vw="ls"></Photo>
            <Photo vw="ls"></Photo>
            
           
            <Photo vw="prt"></Photo>
            <Photo vw="ls"></Photo>
            <Photo vw="prt"></Photo>
            <Photo vw="prt"></Photo>
            <Photo vw="ls"></Photo>
            <Photo vw="prt"></Photo>
          
        </div>
    </div>);


}

export default Works