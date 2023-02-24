import React, { useState } from 'react'
import './ControlledComp.css'

const ControlledComp = () => {
const[name,setName]=useState(" ")   
const[fullname,setFullname]=useState(' ')

    const InputEvent=(event)=>{
       setName(event.target.value)
    //    const capName=(event.target.value).toUpperCase();
    // //    console.log(event.target.value)
    //    setName(capName)
    }
 
    const onSubmit=()=>{
        setFullname(name);
        
    }
    return (
    <>
    <div className='form'>
<h1 className='heading'> Hello {fullname}</h1>
<input type="text" placeholder='Enter Name' onChange={InputEvent} value={name} />
<br/>

<button className='button' onClick={onSubmit}> Click Me</button>

    </div>
    </>
  )
}

export default ControlledComp