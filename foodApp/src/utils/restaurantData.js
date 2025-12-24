import {useState, useEffect} from 'react';


const restaurantList = [
    {
        id: "res1",
        name: "Meghana Foods",
        cuisines: ["Biryani", "South Indian", "North Indian"],
        avgRating: "4.4",
        deliveryTime: "30 mins",
        costForTwo: "₹500 for two",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/cvo1djhbwrgfqd64k0tl",
        location: "Indiranagar, Bengaluru",
        isPromoted: true,
    },
    {
        id: "res2",
        name: "Empire Restaurant",
        cuisines: ["Biryani", "Arabian", "Chinese"],
        avgRating: "4.1",
        deliveryTime: "25 mins",
        costForTwo: "₹450 for two",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ftevs3oi4liqnghdkqdy",
        location: "Koramangala, Bengaluru",
        isPromoted: false,
    },
    {
        id: "res3",
        name: "Nandhini Deluxe",
        cuisines: ["Andhra", "Biryani", "Chinese"],
        avgRating: "4.0",
        deliveryTime: "35 mins",
        costForTwo: "₹520 for two",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/011e1cb9bdce20f1532436084d56c029",
        location: "Jayanagar, Bengaluru",
        isPromoted: true,
    },
    {
        id: "res4",
        name: "Ambur Star Biryani",
        cuisines: ["Biryani", "South Indian"],
        avgRating: "3.9",
        deliveryTime: "28 mins",
        costForTwo: "₹400 for two",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a4ffed13eb197c6df43dfe1c756560e5",
        location: "BTM Layout, Bengaluru",
        isPromoted: false,
    },
    {
        id: "res5",
        name: "Hyderabad Biryaani House",
        cuisines: ["Biryani", "Hyderabadi", "Mughlai"],
        avgRating: "4.2",
        deliveryTime: "32 mins",
        costForTwo: "₹480 for two",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a4ffed13eb197c6df43dfe1c756560e5",
        location: "Marathahalli, Bengaluru",
        isPromoted: true,
    },
    {
        id: "res6",
        name: "Nandhini Deluxe",
        cuisines: ["Andhra", "Biryani", "Chinese"],
        avgRating: "4.0",
        deliveryTime: "35 mins",
        costForTwo: "₹520 for two",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/011e1cb9bdce20f1532436084d56c029",
        location: "Jayanagar, Bengaluru",
        isPromoted: true,
    },
    {
        id: "res7",
        name: "Meghana Foods 44",
        cuisines: ["Biryani", "South Indian", "North Indian"],
        avgRating: "4.4",
        deliveryTime: "30 mins",
        costForTwo: "₹500 for two",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/cvo1djhbwrgfqd64k0tl",
        location: "Indiranagar, Bengaluru",
        isPromoted: true,
    },
    {
        id: "res8",
        name: "Nandhini Deluxe",
        cuisines: ["Andhra", "Biryani", "Chinese"],
        avgRating: "4.0",
        deliveryTime: "35 mins",
        costForTwo: "₹520 for two",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/011e1cb9bdce20f1532436084d56c029",
        location: "Jayanagar, Bengaluru",
        isPromoted: true,
    },
    {
        id: "res9",
        name: "Empire Restaurant",
        cuisines: ["Biryani", "Arabian", "Chinese"],
        avgRating: "4.1",
        deliveryTime: "25 mins",
        costForTwo: "₹450 for two",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ftevs3oi4liqnghdkqdy",
        location: "Koramangala, Bengaluru",
        isPromoted: false,
    },
    {
        id: "res10",
        name: "Meghana Foods",
        cuisines: ["Biryani", "South Indian", "North Indian"],
        avgRating: "4.4",
        deliveryTime: "30 mins",
        costForTwo: "₹500 for two",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/cvo1djhbwrgfqd64k0tl",
        location: "Indiranagar, Bengaluru",
        isPromoted: true,
    },
    {
        id: "res11",
        name: "Meghana Foods",
        cuisines: ["Biryani", "South Indian", "North Indian"],
        avgRating: "4.4",
        deliveryTime: "30 mins",
        costForTwo: "₹500 for two",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/cvo1djhbwrgfqd64k0tl",
        location: "Indiranagar, Bengaluru",
        isPromoted: true,
    },
    {
        id: "res12",
        name: "Meghana Foods",
        cuisines: ["Biryani", "South Indian", "North Indian"],
        avgRating: "4.4",
        deliveryTime: "30 mins",
        costForTwo: "₹500 for two",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/cvo1djhbwrgfqd64k0tl",
        location: "Indiranagar, Bengaluru",
        isPromoted: true,
    },
];

const restaurantData  = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(()=> {
        setRestaurants(restaurantList)
    },[])

    return restaurants;
}

export default restaurantData;