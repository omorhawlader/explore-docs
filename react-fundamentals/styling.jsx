// Styling
// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import './box-styles.css'

// function Box(props){
//   return(
//     <div className={props.className} style={{...props.style}}>props.children</div>
//   )
// }

function Box(props){
  return(
    // eslint-disable-next-line react/prop-types
    <div className={`box box--${props.size}`} style={{...props.style}}>props.children</div>
  )
}

function Styling() {
  return (
    <div>
      {/* <Box className="box--medium"style={{backgroundColor:'#333',color:'white',fontStyle:'italic'}} >medium box</ Box> */}

      <Box size="medium"style={{backgroundColor:'#333',color:'white',fontStyle:'italic'}} >medium box</ Box>
      
    </div>
  )
}

export default Styling
