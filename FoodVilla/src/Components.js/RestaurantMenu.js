import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CDN_IMG_URL } from "../Config";

const RestaurantMenu = () => {
    const [restaurant, setRestaurant] = useState({})

    const {id} =useParams();
    console.log(id);
    const {name,cloudinaryImageId,city,areaName,cuisines,avgRating,aggregatedDiscountInfo} = restaurant;

    useEffect(() => {
        getRestaurantsInfo()
        
        },[])
        
        async function getRestaurantsInfo() {
        
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${id}&submitAction=ENTER`)
        
            const json = await data.json();
            console.log(json.data.cards[0].card.card.info);
            setRestaurant(json.data.cards[0].card.card.info)

            
        
            // setFilteredRestaurants(json.data?.cards[2]?.data?.data?.cards)
            // setAllRestaurants(json.data?.cards[2]?.data?.data?.cards)
            // console.log("allrestaurant", setAllRestaurants);
        
        }
    

     
    return(
        <div className="restaurantMenu">
            <h1>{name}</h1>
            <img className="restaurant-img" src={ CDN_IMG_URL + cloudinaryImageId } alt={name}/>
            <h2>{city}</h2>
            <h2>{areaName}</h2>
            <h2>{cuisines}</h2>
            <h2>{avgRating}</h2>
            <h2>{}</h2>


        </div>
    )
};



export default RestaurantMenu;