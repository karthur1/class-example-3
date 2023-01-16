export default function card( {
   degree = "none",
   colour = "purple",
   font = "0",
   images = "icons/icon1.png"
   
    }) {   return(
        <div style={{backgroundColour: colour, fontSize:font}}>
                {degree}
        </div>
    )
}