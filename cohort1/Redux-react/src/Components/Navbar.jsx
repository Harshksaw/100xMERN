
import { Link } from 'react-router-dom'
import {  useSelector } from 'react-redux/es/hooks/useSelector'

const Navbar = () => {
  //use Selector -> has all state acces
const items = useSelector((state) => state.cart )

  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <span>Redux Tutorial</span>
        <div>
            <Link className='navLink' style={{fontWeight:"bolder"}}  to={"/"}>Home</Link>
            <Link className='navLink' style={{marginRight:"7px",fontWeight:"bolder"}} to={"/cart"}>Cart</Link>
            <span style={{fontWeight:"bolder"}}>items:{items.length}</span>
        </div>
    </div>
  )
}

export default Navbar