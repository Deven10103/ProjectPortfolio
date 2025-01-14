import Navbar from "../components/Navbar"
import Eve from "../components/Eve"

function Photography(){
   
    var events=[{name:"Self Portraits :-",
        dis:" self-portrait is a work of art, like a picture or a sculpture, that an artist has made of themselves. Every artist is different, so every self-portrait is different too. A self-portrait can look like the artist who made it, or a self-portrait can look more abstract",
        type:"Short"

    },{name:"Streets of Kolkata :-",
    dis:" Wandering the streets of Kolkata, the City of Joy, is a visual feast for any photographer. Every corner teems with life, from bustling markets to serene river ghats. Vibrant colors, intricate architecture, and diverse faces tell stories of resilience and culture. Amidst the chaos, there's an undeniable charm that beckons lens and heart alike, capturing moments that speak volumes about this enigmatic city.",
    type:"Short"

},{name:"Personal Photoshoot :-",
dis:"A photography session and especially one in which a professional photographer takes photographs of someone or something for commercial use (as in a magazine) … Cohen, 63, arrives at a PEOPLE photo shoot where his wife is being fawned over by hair and makeup artists …",
type:"Short"

},{name:"BnW Portrait :-",
dis:"Black and white photography is a distinct type of photography that symbolizes emotions distinctively. Black and white photos can be used to show contrast, convey feelings of sadness or happiness, or mostly to create a feeling of nostalgia. They can also depict the passage of time or the changing of seasons.",
type:"Short"

},{name:"Street Photography :-",
dis:"Street photography is an art form that captures the essence of everyday life in urban environments. Through candid shots of people, architecture, and scenes, it reveals the beauty, complexity, and authenticity of city life. Each image tells a unique story, showcasing fleeting moments, emotions, and interactions that might otherwise go unnoticed. Street photographers navigate bustling streets, seeking out moments of serendipity and connection. It's a blend of observation, timing, and creativity, requiring a keen eye for composition and an understanding of light and shadow. In its rawness and spontaneity, street photography offers a window into the soul of a city.",
type:"Long"

}];

   return (<div>
    <Navbar/>
    {events.map((element,key) => {
        
    return (<Eve key={key} ind={key} data={element}></Eve>);
    })}

    </div>);
}

export default  Photography;