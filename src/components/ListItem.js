import React from 'react'


function ListItem(props) {

  function dlt(){
    props.del(props.idx)
  }
  return (
    <div>
      <p className='listItem'>{props.idx +1}.  {props.item} <button className='delete' onClick={dlt}>Delete</button> </p>
      
    </div>
  )
}

export default ListItem
