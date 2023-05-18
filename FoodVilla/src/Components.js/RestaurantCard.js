import { CDN_IMG_URL } from "../Config";

const ReastaurantCard = ({name,cloudinaryImageId,cuisines,avgRating}) => {
    return(
        <div className="card">
            <img src= {CDN_IMG_URL+ cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines?.join(", ")}</h3>
            <h4>{avgRating}</h4>

        </div>
    )
}


export default ReastaurantCard;