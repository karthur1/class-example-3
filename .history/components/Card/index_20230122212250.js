export default function Card( {
   degree = "none",
   colour = "purple",
   font = "0",
   
   
    }) {   return(
        <div style={{backgroundColor: colour, fontSize:font, fontFamily:'Courier New', padding: 10px}}>
                {
                    colour === "black" ? <img src={'icons/icon1.png'} width="30"/>:
                    colour === "black" ? <img src={'icons/icon2.jpg'} width="30"/>:
                                        <img src={images} width="30"/>
                }   
                {degree}

        </div>
    )
}

