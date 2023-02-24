import {useState,React} from "react";
import "./App.css"
function App(){
const [inputList,setInputList]=useState("")                     // set here list pass the const list of items                                       
const [items,setItems]=useState([])                             // items here store the data
const itemEvent=(event)=>{
  setInputList(event.target.value)                              // current data update then set item update
}
const listOfItems=()=>{
  setItems((oldItems)=>{
    return [...oldItems,inputList]                              // user Set list and display here
  })
    setInputList("")                                           // set item in list then clear empty place holder
}
const deleteItem=(a)=>{
  const newArray =items.filter((ab)=>{
    if(ab !==a){
      return ab
    }
  })
  setItems(newArray)
}
return(
  <>
<div className="main_div">
<div className="center_div">
<h1> ToDo-List</h1>
<input type="text" placeholder="Add Item" value={inputList} onChange={itemEvent} />
<button className="button" onClick={listOfItems} > + </button>
  {items.map(( itemsval)=>{
    return (
      <>
      <li>{itemsval} <button onClick={()=>deleteItem(itemsval)}>Delete</button> </li>
      </>
    )
  })}
</div>
</div>
    </>
  )
}
export default App