import { useState, useEffect } from "react"

const useRestaurant  = (id) => {
const [restaurant, setRestaurant] = useState(null);


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

    return restaurant;

}


export default useRestaurant;
