import { restaurantList } from "../Config";
import ReastaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

 function FilterData(restaurants, searchInput) {
         const filterData = restaurants.filter((restaurant) => {
            return restaurant?.data?.name?.toLowerCase().includes(searchInput.toLowerCase());
          });
          
          console.log("filteredData", filterData);
          return filterData;
};




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

    if(!allRestaurants) return null;

    return (allRestaurants?.length === 0) ? <Shimmer /> :(
        <>
        <div className="search-div">
            <input placeholder="search" className="search-input" value={searchInput} onChange={(e) => {
                setSearchInput(e.target.value)
            }} />
            
            
            <button className="search-button"
            onClick={() => {
               const Data = FilterData(allRestaurants, searchInput)
               

               setFilteredRestaurants(Data)

            }}>Search</button>
        </div>
        <div className="restaurant-list">
            
            {(filteredRestaurants.length=== 0) ? (<h1>no restaurant found</h1>) : filteredRestaurants.map((restaurant) => {return ( <Link
          className="link-styles" to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
          <ReastaurantCard {...restaurant.data} key={restaurant.data.id} />
        </Link>
        )
            })} 
        </div>
        </>
    )
};

export default Body;