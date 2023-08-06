function Cart(props){
    return props.myCartList && props.myCartList.map((elem)=>{
    return (<>
    <div>
    <img src={elem.image} alt="product"></img>
    <div className="title">{elem.title}</div>
    <li>${elem.price}</li>
    <li><button onClick={() => props.addCart(elem)}>ADD TO CART</button></li>
    </div>
    </>);
    })
}
export default Cart;