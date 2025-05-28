import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  // console.log("resId: " + resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);

  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };
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
  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="menu text-center m-4">
      <h1 className="text-xl font-bold my-6 underline">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <div>
        {categories.map((category, index) => {
          return (
            // controlled Component
            <RestaurantCategory
              key={category.card.card.categoryId}
              data={category?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          );
          // console.log(category.card.card.title);
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
