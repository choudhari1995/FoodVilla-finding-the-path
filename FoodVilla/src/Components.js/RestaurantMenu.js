import { useParams } from "react-router-dom";
import { CDN_IMG_URL } from "../Config";
import useRestaurant from "./utility/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const {id} =useParams();
    const restaurant = useRestaurant(id)

    return (!restaurant) ? <Shimmer /> : (
        <div className="flex-wrap flex-col items-center ml-20 mt-28 mr-60 content-center shadow shadow-gray-300 hover:shadow-md">
            <h1 className="text-2xl text-black font-serif ">{restaurant.name}</h1>
            <img className="w-72 ml-12 items-center" src={ CDN_IMG_URL + restaurant.cloudinaryImageId } alt={restaurant.name}/>
            <h2>{restaurant.city}</h2>
            <h2>{restaurant.areaName}</h2>
            <h2>{restaurant.cuisines}</h2>
            <h2>{restaurant.avgRating}</h2>


        </div>
    )
};



export default RestaurantMenu;