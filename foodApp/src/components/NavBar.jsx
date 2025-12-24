import foodIcon from "../assets/foodIcon.jpg";
import {Link, useNavigate} from "react-router-dom";
import StatusBar from './StatusBar'
import {useSelector} from "react-redux";

function NavBar(){

    const cartItems = useSelector((state) => state.cart.items)
    const navigate = useNavigate();
    return(
        <div className="flex flex-row justify-between w-full">
            <img src={foodIcon} alt="foodIconLogo" className="w-16 h-16"/>
            <ul className="flex flex-row gap-4 py-4 px-4">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li onClick={() => navigate("/menu")} className="cursor-pointer">Menu</li>
                <Link to="/cart" className="cursor-pointer">
                    Cart Items ({cartItems.length})
                </Link>

                <StatusBar/>
            </ul>
        </div>
    )
}

export default NavBar