import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#d4c6b4" }}>
      <img
        className="res-img"
        src={CDN_URL + resData?.info?.cloudinaryImageId}
      />
      <h3>{resData?.info?.name}</h3>
      <h5>{resData?.info?.cuisines.join(", ")}</h5>
      <h5>{resData?.info?.locality}</h5>
      <div className="small">
        <h5>{resData?.info?.costForTwo}</h5>
        <h5>⭐{resData?.info?.avgRating}</h5>
        <h5>{resData?.info?.sla.deliveryTime} minutes</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
