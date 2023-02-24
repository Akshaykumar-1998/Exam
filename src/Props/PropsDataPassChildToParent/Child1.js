import React from "react";
function Child1(props){
    return(
        <>
        <button onClick={()=> props.ChangeName('Ram')}> ChangeName</button>
        </>
    )
}
export default Child1