// import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
// import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;
  // const { loggedInUser } = useContext(UserContext);
  return (
    <div className="res-card m-4 p-4 w-[300px] h-[500px] bg-gray-300 hover:bg-slate-400 rounded-lg">
      <img className="res-img rounded-md" src={CDN_URL + cloudinaryImageId} />
      <h3 className="py-2 font-bold">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{resData?.info?.locality}</h5>
      <div className="py-2 flex">
        <h5 className="p-1">{costForTwo} ·</h5>
        <h5 className="p-1">⭐{avgRating} ·</h5>
        <h5 className="p-1">{resData?.info?.sla.deliveryTime} minutes</h5>
        {/* <h6>{loggedInUser}</h6> */}
      </div>
    </div>
  );
};

export const withTopRatedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white ml-6 mt-2 p-2 rounded-lg">
          Top Rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
