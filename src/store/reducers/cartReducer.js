import blue_shirt from "../../assets/blue-shirt.png";
import navi_shirt from "../../assets/navi-shirt.png";
import red_lined from "../../assets/red-lined-shirt.png";
import keep_left from "../../assets/keep-left-t-shirt.png";

const initialState = {
  loading: false,
  error: false,
  carts: [
    {
      id: 1,
      name: "Blue Shirt",
      categories: ["Shirt", "Blue"],
      size: "M",
      price: 29.99,
      quantity: 1,
      photo: blue_shirt,
    },
    {
      id: 2,
      name: "Navi Shirt",
      categories: ["Shirt", "Navi"],
      size: "M",
      price: 24.99,
      quantity: 1,
      photo: navi_shirt,
    },
  ],
};

function cartReducer(state = initialState, action) {
  console.log(action.payload, "-----");
  switch (action.type) {
    case "IS_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "ADD_TO_CART":
      state.carts.map((data) => {
        // console.log(data.id, action.payload.id);
        // if (data.id === action.payload.id) {
        //   return {
        //     ...state,
        //     carts: [...state.carts.quantity, state.carts.quantity + 1],
        //   };
        // } else {
        //   return {
        //     ...state,
        //     carts: [...state.carts, action.payload],
        //   };
        // }
        return {
          ...state,
          carts: [...state.carts, action.payload],
        };
      });
    default:
      return state;
  }
}

export default cartReducer;
