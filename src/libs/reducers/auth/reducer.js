import actionType from "./type";

export const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  username: JSON.parse(localStorage.getItem("auth"))?.username || "",
  password: JSON.parse(localStorage.getItem("auth"))?.password || "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.LOGIN:
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem(
        "auth",
        JSON.stringify({
          username: action.payload.username,
          password: action.payload.password,
        })
      );
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload.username,
        password: action.payload.password,
      };
    case actionType.LOGOUT:
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("auth");
      return {
        ...state,
        isLoggedIn: false,
        username: "",
        password: "",
      };
    default:
      return { ...state };
  }
};
