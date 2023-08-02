import {
  REGISTER_USER,
  LOGIN_USER,
  VERIFY_USER,
  SIGNOUT_USER,
  MENU_OPTION,
} from "./types";

export const login_user = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

export const verify_user = (verificationInfo) => ({
  type: VERIFY_USER,
  payload: verificationInfo,
});

export const register_user = (user) => ({
  type: REGISTER_USER,
  payload: user,
});

export const signout_user = () => ({
  type: SIGNOUT_USER,
});

export const menu_option = (option) => ({
  type: MENU_OPTION,
  payload: option,
});
