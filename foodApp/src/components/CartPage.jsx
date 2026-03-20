import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import {addItems, removeItems} from "../utils/cartSlice.js";

function CartPage() {
    const cartItems = useSelector((store) => store.cart.items);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleAdd = (item) => {
        dispatch(addItems({...item, quantity: 1}))
    }

    const handleRemove = (item) => {
        dispatch(removeItems(item))
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <p className="text-2xl font-bold">🛒 Cart Page</p>

            {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (

                <ul className="list-disc list-inside space-y-4">
                    {cartItems.map((item, index) => (
                        <div className="flex items-center justify-between">
                            <li key={index} className="text-lg pr-4" >
                                {item.name} <span className="text-sm text-gray-600">(x{item.quantity || 1})</span>
                            </li>
                            <div className="flex gap-2">
                            <button
                                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                                onClick={() => handleAdd(item)}

                            >
                            +
                            </button>
                            <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                                onClick={() => handleRemove(item)}
                            >
                                -
                            </button>
                            </div>
                        </div>
                    ))}
                </ul>

            )}

            {cartItems < 0  ?
                 (
                    <p>No Items</p>)
                :
                (<button
                    className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={cartItems.length === 0}
                    onClick={() => navigate("/checkout")}>
                Go to Checkout
            </button>)
            }
        </div>
    );
}

export default CartPage;
