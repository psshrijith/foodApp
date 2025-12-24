import { useState, useEffect, memo} from 'react'
import Footer from "./Footer.jsx";
import RestaurantCard from "./RestaurantCard.jsx";
import restaurantData from "../utils/restaurantData";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";
import {HOC} from "./HOC";
import Example from "./Example";
import HOC1 from "./HOC1";
import ShimmerCard from "./ShimmerCard.jsx";
import UserClass from "./UserClass";

function HomePage() {
    const resData = restaurantData();
    const [loading, setLoading] = useState(true);
    const [filteredData, setFilteredData] = useState(resData);
    const isOnline = useOnlineStatus();
    const [login, setLogin] = useState("login");
    const [searchResults, setSearchResults] = useState('');
    const [error, setError] = useState(null)

    const PromotedRestaurantCard = HOC(RestaurantCard);
    const Example1 = HOC1(Example);
    const handleFilter = (resData) => {
        const data =  resData.filter((data) =>  data?.avgRating> 4.0);
        setFilteredData(data);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
            setFilteredData(resData);
        }, 3000)
        return () => {
            clearTimeout(timer)
        }
    }, [resData]);

    const handleSearch = (value) => {
        console.log("value", value)
        if(value.trim() === ''){
            setFilteredData(resData);
            setError(null);
            return;
        }
        const data = resData.filter((data) => data?.name.toLowerCase().includes(value.toLowerCase()));
        if(data.length === 0) setError("No restaurants found for the search results");
        else setError(null);
        setFilteredData(data);

    }


    const content = [{id:1, data:"Accordion content 1"}, {id:2, data:"Accordion content 2"}, {id:3, data:"Accordion content 3"}]
    return (
        <div className="">
            <UserClass/>
            {error && <h1 className="text-red-500">{error}</h1>}
            <div className="flex gap-2">
                <button
                    className="bg-blue-300 p-1 rounded-lg cursor-pointer"
                    onClick={() => setLogin(login === "login" ? "logout" : "login")}
                >
                    {login}
                </button>
                <button className="bg-blue-300 p-2 rounded-md cursor-pointer"
                        onClick={() => handleFilter(resData)}
                >
                    Top Rated Restaurants
                </button>

                <button className="bg-blue-300 p-2 rounded-md cursor-pointer"
                        onClick={() => setFilteredData(resData)}
                >
                    Clear Filter
                </button>
                <input
                    type="text"
                    placeholder="Search for your restaurant"
                    className="border border-black p-2 rounded-lg w-56"
                    value={searchResults}
                    onChange={(e) => {
                        const value = e.target.value;
                        setSearchResults(value);
                        if(value === ''){
                            setFilteredData(resData);
                            setError(null)}
                    }}
                />
                <button
                    className="bg-blue-300 p-2 rounded-md cursor-pointer"
                    onClick={() =>  handleSearch(searchResults)}
                >
                    Search Restaurants
                </button>
            </div>

            {loading ?
                <ShimmerCard
                    filteredData={filteredData}
                />
                :   isOnline ?
                        (<div className="flex flex-col justify-between h-[960px] pt-4">
                                <div className="flex flex-wrap gap-5 space-y-5">
                                    {filteredData.map((restaurant) => (
                                        restaurant.isPromoted ?
                                            <PromotedRestaurantCard
                                                key={restaurant?.id}
                                                restaurant={restaurant}
                                            />
                                            : <RestaurantCard
                                                key={restaurant?.id}
                                                restaurant={restaurant}
                                            />
                                    ))}
                                </div>
                                <Footer/>
                            </div>
                        ) :
                        (
                            <div className="flex flex-col items-center justify-center bg-red-500">
                                <h1>Looks like you are offline, please connect to the internet</h1>
                            </div>
                        )
            }

        </div>
    )
}

export default HomePage
