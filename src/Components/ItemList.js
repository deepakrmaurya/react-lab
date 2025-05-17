import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  //   console.log(items);
  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="pt-2 pb-6 m-2  border-purple-500 border-b-2 text-left flex"
          >
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-40 h-30 mr-4 rounded-lg"
            />
            <div>
              <div className="py-2 flex justify-between items-center ">
                <div>
                  <span className="font-bold">{item.card.info.name} </span>
                  <span>
                    {" "}
                    - ₹
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </span>
                </div>

                <button className="py-2 px-6 rounded-xl  bg-black text-white">
                  Add+
                </button>
              </div>

              <p className="text-xs">{item.card.info.description}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
