import React, { useState } from 'react'


function Form(props) {
    const [item,setItem]=useState("");

   
    function handleOnChange(event){
        const newVal=event.target.value
        setItem(newVal)
    }

    function handleOnClick(){
      if(item!==""){
      props.func(item)
      setItem("")}
  }
    function handleOnKeyUp(event){
      if (event.keyCode === 13) {
        handleOnClick();
    }
    }

    
  return (
    <div className='form'>
      <input onChange={handleOnChange} onKeyUp={handleOnKeyUp} type="text" value={item} placeholder="Enter something" />
      <button onClick={handleOnClick}>Add</button>
    </div>
  )
}

export default Form
