import { CDN_IMG_URL } from "../Config";

const ReastaurantCard = ({name,cloudinaryImageId,cuisines,avgRating}) => {
    return(
        <div className="w-[250px] h-[280px] shadow shadow-gray-300 hover:shadow-md mt-4">
            <img className="w-[100%] p-3 rounded-2xl" src= {CDN_IMG_URL+ cloudinaryImageId} />
            <h2 className="text-black font-serif text-lg font-semibold p-2">{name}</h2>
            <h3 className="overflow-x-hidden text-xs text-gray-500 " >{cuisines?.join(", ")}</h3>
            <h4 className="bg-green-300 w-8 text-center mt-1 text-sm ">{avgRating}</h4>

        </div>
    )
}


export default ReastaurantCard;