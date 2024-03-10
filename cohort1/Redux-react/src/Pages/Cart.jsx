import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Redux/CartSlice";

  const Cart = () => {
  const cartitems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleremove = (id)=>{
    dispatch(remove(id))

  }
  return (
    <div>
        <h3>Cart Page</h3>

      <div className="cartWrapper">
        {cartitems.map((item) => (

            <div className="cartCard" key={item.id}>
            <img src={item.image} alt="img"/>
            <h4>{item.title}</h4>
            <h5>{item.price}</h5>
            <button className="btn" onClick={()=> handleremove(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>

  );
}
export default Cart;