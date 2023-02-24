import React, { useEffect, useState } from 'react'

function UseEffect() {
    const[num,setNum]=useState(0);
    const[count,setCount]=useState(0);

    useEffect(()=> {
    alert('I am Click') },[num])
  return (
    <div style={{backgroundColor:'gray',justifyContent:'center',display:'flex'}}>
        <h2> The number is - {num}</h2>
         <br/>
        <h2> the count  is - {count}</h2>
   <br/>
    <button onClick={()=>
    setNum(num +1)}>
        Incre
    </button>
  <br/>
    <button onClick={()=>
    setCount(count +1)}> 
   Incre
    </button>
 
    </div>
  )
}
export default UseEffect
