import React from 'react'

const ReduxExample = () => {
  return (
    <div className='container'>
        <h1> Incr/Decr Counter</h1>
        <h4> Using React and Redux</h4>
            <div className='quantity'>
          <a className='quantity_minus' title='Decre'><span> - </span></a>
          <input name='quantity' type='text' class='quantity_input' value='0'/>
          <a className='quantity_minus' title='Decre'><span> + </span></a>
            </div>
    </div>
  )
}

export default ReduxExample