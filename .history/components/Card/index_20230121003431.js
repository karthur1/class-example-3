export default function Card( {
   degree = "none",
   colour = "purple",
   font = "0",
   
   
    }) {   return(
        <div style={{backgroundColor: colour, fontSize:font}}>
                {
                    colour === "black" ? <img src={'icons/icon1.png'} width="50"/>:
                    colour === "black" ? <img src={'icons/icon2.jpg'} width="50"/>:
                                        <img src={images} width="50"/>
                }   
                {degree}

        </div>
    )

}

