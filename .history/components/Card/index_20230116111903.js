export default function Card( {
   degree = "none",
   colour = "purple",
   font = "0",
   images = "icons/icon3.png"
   
    }) {   return(
        <div style={{backgroundColour: colour, fontSize:font}}>
                {
                    colour === "red" ? <img src={'icons/icon2.png'} width="50"/>:
                    colour === "blue" ? <img src={'icons/icon1.png'} width="50"/>:
                                        <img src={images} width="50"/>
                }   
                {degree}

        </div>
    )
}