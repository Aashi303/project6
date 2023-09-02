import React from 'react'

const Example = (props) => {
  
  return (
    <div>
        <h1>Friends:{props.fname}</h1>
        <h1 style={{backgroundColor:"blue"}}>{props.age}</h1>
       
    </div>
  )
}

export default Example