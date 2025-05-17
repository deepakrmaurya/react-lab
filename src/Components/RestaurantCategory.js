import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  //   console.log(data);
  const [showItems, setShowItems] = useState(false);
  const itemCount = data?.itemCards?.length;

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    // header
    <div className="w-6/12 mx-auto my-4  bg-gray-300  shadow-lg p-4 ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({itemCount})
        </span>
        <span>🔽</span>
      </div>
      {/* //   body */}
      {showItems && <ItemList items={data.itemCards} />}{" "}
    </div>
  );
};

export default RestaurantCategory;
