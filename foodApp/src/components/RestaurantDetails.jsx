import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import restaurantData from "../utils/restaurantData";
import { useRestaurantCard } from "../utils/useRestaurantCard";
import Accordion from "./Accordion";
import { addItems, removeItems } from "../utils/cartSlice";

function RestaurantDetails() {
    const [restaurant, setRestaurant] = useState(null);
    const { id } = useParams();
    const resData = restaurantData();
    const [activeIndex, setActiveIndex] = useState(null);
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.items)

    const recommendedData =
        useRestaurantCard?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
            ?.cards || [];

    const title = recommendedData
        .map((item) => item.card?.card?.title)
        .filter((item) => item !== undefined);

    const menuItems = recommendedData
        .map((item) =>
            item.card?.card?.itemCards?.map((i) => i.card.info)
        )
        .filter((item) => item !== undefined);

    const handleAddItem = (item) => {
       dispatch(addItems({...item, quantity: 1}))
    };

    const handleRemoveItem = (item) => {
        dispatch(removeItems({id: item.id}));
    };

    useEffect(() => {
        const found = resData.find((restaurant) => restaurant?.id === id);
        setRestaurant(found);
    }, [id, resData]);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white shadow-lg rounded-2xl p-6 mb-8">
                <h1 className="font-bold text-3xl mb-2">🍴 Restaurant Details</h1>
                <h2 className="text-2xl font-semibold text-gray-800">
                    {restaurant?.name}
                </h2>
                <p className="text-gray-600 italic">
                    {restaurant?.cuisines?.join(", ")}
                </p>

                <div className="flex flex-wrap gap-6 mt-4 text-gray-700">
                    <p>⭐ {restaurant?.avgRating}</p>
                    <p>⏱ {restaurant?.deliveryTime} mins</p>
                    <p>💰 {restaurant?.costForTwo}</p>
                </div>

                {restaurant?.image && (
                    <img
                        src={restaurant.image}
                        alt={restaurant?.name}
                        className="w-full max-h-72 object-cover rounded-xl mt-4"
                    />
                )}
            </div>

            <div className="space-y-4">
                {title.map((categoryTitle, index) => (
                    <Accordion
                        key={index}
                        title={categoryTitle}
                        items={menuItems[index] || []}
                        isOpen={activeIndex === index}
                        onToggle={() =>
                            setActiveIndex(activeIndex === index ? null : index)
                        }
                        onIncrement={handleAddItem}
                        onDecrement={handleRemoveItem}
                        itemCounts={cartItems.reduce((acc, item) => {
                            return {...acc, [item.id]: item.quantity}
                        }, {})}
                    />
                ))}
            </div>
        </div>
    );
}

export default RestaurantDetails;
