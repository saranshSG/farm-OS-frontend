import {
  REGISTER_USER,
  LOGIN_USER,
  VERIFY_USER,
  SIGNOUT_USER,
  MENU_OPTION,
} from "../actions/types";
let userDefault = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
  },
  auth: null,
};
let defaultMenu = {
  selectedOption: "dashboard",
};
const userReducer = (
  state = {
    loginInfo: userDefault,
    user_verification: userDefault,
    menu: defaultMenu,
  },
  action
) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loginInfo: { ...action.payload },
      };
    case VERIFY_USER:
      return {
        ...state,
        user_verification: { ...state, ...action.payload },
        auth: action.payload.auth,
      };
    case REGISTER_USER:
      return {
        ...state,
        user_verification: { ...state, ...action.payload },
        auth: action.payload.auth,
      };
    case SIGNOUT_USER:
      return {
        ...state,
        loginInfo: { ...userDefault.user },
        user_verification: { ...userDefault.user },
        auth: false,
      };
    case MENU_OPTION:
      return {
        ...state,
        menu: { ...action.payload },
      };

    default:
      return state;
  }
};

export default userReducer;
