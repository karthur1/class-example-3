export default function Card( {
   degree = "none",
   colour = "purple",
   font = "0",
   images = "icons/icon3.png"
   
    }) {   return(
        <div style={{backgroundColour: colour, fontSize:font}}>
                {degree}
        </div>
    )
}