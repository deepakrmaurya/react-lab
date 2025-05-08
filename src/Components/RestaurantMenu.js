import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  // console.log("resId: " + resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  // console.log(resInfo);

  if (resInfo === null) return <Shimmer />;
  // console.log(resInfo);

  // if (!resInfo?.cards?.[2]?.card?.card.info) {
  //   return;
  // }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // //   ?.itemCards[0]?.card?.info;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>Menu</h1>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"₹"}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}

        <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
