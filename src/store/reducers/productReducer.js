import blue_shirt from "../../assets/blue-shirt.png";
import navi_shirt from "../../assets/navi-shirt.png";
import red_lined from "../../assets/red-lined-shirt.png";
import keep_left from "../../assets/keep-left-t-shirt.png";

const initialState = {
  loading: false,
  error: false,
  products: [
    {
      id: 1,
      name: "Blue Shirt",
      categories: ["Shirt", "Blue"],
      size: ["S", "M", "L"],
      price: 200000,
      stock: 20,
      photo: blue_shirt,
    },
    {
      id: 2,
      name: "Navi Shirt",
      categories: ["Shirt", "Navi"],
      size: ["S", "M", "L"],
      price: 250000,
      stock: 20,
      photo: navi_shirt,
    },
    {
      id: 3,
      name: "Red Lined Shirt",
      categories: ["Shirt", "Blue", "Red Lined"],
      size: ["S", "M", "L"],
      price: 200000,
      stock: "20",
      photo: red_lined,
    },
    {
      id: 4,
      name: "Keep Left T-Shirt",
      categories: ["T-Shirt", "Black"],
      size: ["S", "M", "L"],
      price: 150000,
      stock: "20",
      photo: keep_left,
    },
  ],
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case "IS_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

export default productReducer;
