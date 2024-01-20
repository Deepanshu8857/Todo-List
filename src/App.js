import './App.css';
import './style.css';
import Heading from './components/Heading';
import Form from './components/Form';
import ListItems from './components/ListItems';
import { useState } from 'react';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {


  const [itemArr,setItemArr]=useState([])
  const fetchData=()=>{
    var data=localStorage.getItem("todos");
    if(!data) data="[]";
    setItemArr(JSON.parse(data));
  }

  useEffect(()=>{
   fetchData()
  },[])

  function addItem(item){
   var pre=itemArr
   pre.push(item)
   localStorage.setItem("todos", JSON.stringify(pre))
   fetchData()
  }

  function deleteItem(idx){
    var pre=itemArr
    pre.splice(idx, 1)
    localStorage.setItem("todos", JSON.stringify(pre))
    fetchData()
  }
  console.log(itemArr);

  return (
    <>
    <div className="mainContainer">
  <Heading />
  <Form func={addItem}/>
  <ListItems arr={itemArr} del={deleteItem} />
    </div>
    <Footer/>
    </>
  );
}

export default App;
