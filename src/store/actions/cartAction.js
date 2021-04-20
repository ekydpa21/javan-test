export function addToCart(payload) {
  return async (dispatch) => {
    try {
      dispatch({
        type: "ADD_TO_CART",
        payload: payload,
      });
    } catch (err) {
      dispatch({
        type: "IS_ERROR",
      });
    }
  };
}
