export default function Card( {
   degree = "none",
   colour = "purple",
   font = "0",
   
   
    }) {   return(
        <div style={{backgroundColor: colour, fontSize:font}}>
                {
                    colour === "black" ? <img src={'icons/icon1.png'} width="20"/>:
                    colour === "black" ? <img src={'icons/icon2.jpg'} width="20"/>:
                                        <img src={images} width="20"/>
                }   
                {degree}

        </div>
    )
}

