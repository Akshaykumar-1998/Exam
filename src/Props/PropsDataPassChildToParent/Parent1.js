import React, { useState } from "react";
import Child1 from "./Child1";
function Parent1(){
    const obj={a:1};
    obj.a=12;
    console.log(obj.a);
    const[name,setName]=useState('Gagan');
    return(
        <>
        <h1>  Hi i am {name}</h1>
  <Child1 ChangeName={name=> setName(name)}/>
  </>
    )
}
export default Parent1