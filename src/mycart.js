function MyCart(props){
     return props.cartItems.map((item)=>{
            return(<>Name: {item.name}<br/>Quantity:<input
            type="number"
            value={item.quantity}
          /><br/>Price:{item.price}</>)
    })
}

export default MyCart;