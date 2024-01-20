import React, { useState } from 'react'
import ListItem from './ListItem'

function ListItems(props) {

  function delItem(idx){
    props.del(idx);
  }  


  return (
    <div className='allItems'>
      {props.arr.length?props.arr.map((todoItem,index)=><ListItem key={index+1} id={index+1} idx={index} item={todoItem} del={delItem}/>):
      <p style={{"textAlign":"center"}}>---- No Todos to show ----</p>}
    </div>
  )
}

export default ListItems
