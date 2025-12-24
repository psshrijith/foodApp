import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function CartPage() {
    const cartItems = useSelector((store) => store.cart.items);
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <p className="text-2xl font-bold">🛒 Cart Page</p>

            {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                <ul className="list-disc list-inside space-y-2">
                    {cartItems.map((item, index) => (
                        <li key={index} className="text-lg">
                            {item.name} <span className="text-sm text-gray-600">(x{item.quantity || 1})</span>
                        </li>
                    ))}
                </ul>
            )}


            {cartItems < 0  ?
                 (
                    <p>No Items</p>)
                :
                (<button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                    onClick={() => navigate("/checkout")}>
                Go to Checkout
            </button>)
            }
        </div>
    );
}

export default CartPage;
