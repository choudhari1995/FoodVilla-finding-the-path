import { restaurantList } from "../Config";
import ReastaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { FilterData } from "./utility/Helper";
 import useOnline from "./utility/useOnline";




const Body = () => {
    const [searchInput, setSearchInput] = useState("")
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [allRestaurants, setAllRestaurants] = useState([])

useEffect(() => {
getRestaurants()

},[])

async function getRestaurants() {

    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")

    const json = await data?.json()
    console.log(json);

    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    setAllRestaurants(json.data?.cards[2]?.data?.data?.cards)
    console.log("allrestaurant", setAllRestaurants);

}

 let isOnline = useOnline();
 if (!isOnline) {
    return( <h1>"🔴"you are offline, please check your internet connection "‼⁉"</h1>)
 }

    if(!allRestaurants) return null;

    return (allRestaurants?.length === 0) ? <Shimmer /> :(
        <>
        <div className="mt-40 mb-8  mr-6 flex justify-center">
            <input placeholder="Search Here..." className="search-input pr-4 px-6 bg-gray-200 border outline-none" value={searchInput} onChange={(e) => {
                setSearchInput(e.target.value)
            }} />
            
            
            <button className="search-button ml-4 text-black font-serif bg-yellow-400 p-3 rounded-lg"
            onClick={() => {
               const Data = FilterData(allRestaurants, searchInput)
               

               setFilteredRestaurants(Data)

            }}>Search</button>
        </div>
        <div className="flex flex-wrap justify-evenly gap-4 mb-20">
            
            {(filteredRestaurants.length=== 0) ? (<h1>no restaurant found</h1>) : filteredRestaurants.map((restaurant) => {return ( <Link
          className="" to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
          <ReastaurantCard {...restaurant.data} key={restaurant.data.id} />
        </Link>
        )
            })} 
        </div>
        </>
    )
};

export default Body;