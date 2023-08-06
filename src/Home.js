import logo from './logo.svg';
import './App.css';
import Cart from './Cart';
import React from 'react';
import { data } from './data';
import MyCart from './mycart';
import { Link } from 'react-router-dom';
class Home extends React.Component{
  constructor(){
    super();
  this.state={users:[], cart:[{name:"",quantity:"",price:""}],category:[],search:""};

  
  this.handleCart = this.handleCart.bind(this);
  this.handlesearch = this.handlesearch.bind(this);
  this.handlechange = this.handlechange.bind(this);

  }
handlechange(event){
    this.setState({search:event.target.value})
}
  handleCart(elem){
    console.log("inside cart"+ elem.title);
    this.setState({cart: [...this.state.cart, {name: elem.title, quantity:1, price: elem.price}]})
  }
  handlesearch(){
    const filteredProducts=this.state.users.filter(elem=>elem.title.includes(this.state.search));
    this.setState({category:filteredProducts});
  }

  render(){
   return ( <><div className='hyperlink'>
   <Link to="/"> HOME</Link>
    <Link to="/cart">CART</Link>
    <Link to="/about">ABOUT</Link>
    <Link to="/contact">CONTACT US</Link></div>
    <div id='demo'><input type='text' value={this.state.search} onChange={this.handlechange}></input><button onClick={this.handlesearch}>Search</button></div>
    <div className="fixing"><  Cart myCartList={this.state.category.length>0?this.state.category:this.state.users} addCart={this.handleCart}/></div>
    <MyCart cartItems ={this.state.cart}/></>)
  }
  
  componentDidMount(){
      fetch('https://fakestoreapi.com/products')
     .then((res)=>{
         return res.json();
     })
     .then(data =>this.setState({users:data}));  
  }
}

export default Home;
