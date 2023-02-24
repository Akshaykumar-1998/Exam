import React, { useRef } from 'react'
const UncontrolledComp = () => {
const refObj=useRef();
console.log(refObj)
function handleSubmit(e){
    e.preventDefault();
    console.log(refObj.current.value)
}

    return (
    <>
    <form>
        <label> First Name:</label>
        <input type="text" ref={refObj}onSubmit={handleSubmit} />
        <button > Submit</button>
        
        </form>
        </>
  )
}

export default UncontrolledComp