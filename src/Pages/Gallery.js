import { useState,useEffect } from "react";

function Gallery(prop){

const [photos,setPhotos]=useState([]);

useEffect(()=>{
    fetch(`http://localhost:5000/gal/${event}`).then((res)=>{return res.json()}).then((data)=>{
        setPhotos(data);
  });
},[]);

    let event=prop.event;
    let e_id="6668708bc3c5dfc5360ccb8c"

    let col1=[];
    let col2=[];
    let col3=[];

    for(let i=0;i< photos.length;i+=3){
        col1.push(photos[i]);
        if(i<photos.length-1)
            col2.push(photos[i+1]);
        if(i<photos.length-2)
            col3.push(photos[i+2]);
    }
    console.log(col1);
    console.log(col2);
    console.log(col3);

    return (
<div className="Container grid grid-cols-3 gap-[1rem] w-[100%] m-[auto] bg-[#151518] p-[0.5rem]">
<div>
{
    col1.map(element => {

        let url="http://localhost:5000/"+element;
        return (<div ><img src={url} className="w-[100%] mb-[1rem]"></img></div>);
    })
}
</div>
<div>
{
    col2.map(element => {

        let url="http://localhost:5000/"+element;
        return (<div ><img src={url} className="w-[100%] mb-[1rem]"></img></div>);
    })
}
</div>
<div>
{
    col3.map(element => {

        let url="http://localhost:5000/"+element;
        return (<div ><img src={url} className="w-[100%] mb-[1rem]"></img></div>);
    })
}
</div>
</div>
    );
}

export default Gallery;