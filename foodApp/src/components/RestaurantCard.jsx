import {Link} from "react-router-dom";

function RestaurantCard({restaurant}){

   const RestaurantCardComponent = () => (
       <div>
               <div className=" w-50 h-70 rounded-lg bg-gray-100 p-1">
                   <Link to={`/restaurant/${restaurant.id}`}>
                        <img
                            src={restaurant.image}
                            alt={restaurant.name}
                            className="w-50 h-40 pt-1"
                        />
                        <h2 className="font-bold">{restaurant.name}</h2>
                        <p className="text-sm font-semibold">{restaurant.cuisines.join(", ")}</p>
                        <ul className="flex flex-row gap-4">
                            <li className="text-sm">{restaurant.avgRating}</li>
                            <li className="text-sm">{restaurant.deliveryTime}</li>
                            <li className="text-sm">{restaurant.costForTwo}</li>
                        </ul>
                   </Link>
               </div>
        </div>
   )

    return(
        <RestaurantCardComponent/>
    )
}

export default RestaurantCard;
