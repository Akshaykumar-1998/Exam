import React from 'react'
import { createContext } from 'react'
import Child11 from './Child11';
const data=createContext;
const data1=createContext;
const Parent11 = () => {
    const name="Yash";
    const gender="Male"
  return (
    <>
<h1> Hi</h1>
    <data.Provider value={name}>
        <data1.Provider value={gender}>
         <Child11/>
        </data1.Provider>
        </data.Provider>
   
    </>
  );
}

export default Parent11;
export{data,data1}