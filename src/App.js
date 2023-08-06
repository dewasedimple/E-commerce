// import logo from './logo.svg';
import './App.css';
import Cart from './Cart';
// import React, { useState } from 'react';
// import { data } from './data';
import MyFinalCart from './finalCart';
import About from './about';
import Contact from './contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Page from './page';
// import Todos from './Todos';
// import { Myform } from './myforms';
// // import HookDemo from './hook';
// import Timer from './hookEffect';

export default function App(){
//    //if we  want state in functional base we write it this way
//   const[ count, setCount ] = useState(0);
//   const[ todos, setTodos] = useState(["todo 1", "todo 2"])


//   const increment = () =>{
//     setCount((count)=>count+1)//incremented by one 
//   }

//   const addTodo =() =>{
//     setTodos([...todos, "new Value"]);//here spread operator is use to push the content 
//   }

//   const handleSubmit =(event) =>{
// console.log("inside handle submit")
// event.preventDefault();
  

  return ( 
  
    // <Timer/>
    // /* <HookDemo/> */
    // /* <Myform handleSubmit={handleSubmit}/> */
    // /* <Todos todos={todos}/>
    // <hr/>
    // <div>
    //   Count : {count}
    //   <button onClick={increment}>+</button>
    //   <button onClick={addTodo}>add</button>
    // </div> */
    
    <BrowserRouter>
    <Routes>
      <Route path ="/" element ={<Home/>}/>
      <Route path = "/cart" element={<MyFinalCart/>}/>
      <Route path = "/about" element={<About/>}/>
      <Route path = "/contact" element={<Contact/>}/>
      <Route path="*" element={<Page/>}/>
    </Routes>
    </BrowserRouter>
   )

}