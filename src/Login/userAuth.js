import axios from "axios";
import {
  register_user,
  login_user,
  verify_user,
  signout_user,
} from "../actions/userActions";

import {
  getTokenCookie,
  getAuthHeader,
  removeTokenCookie,
} from "../Utilities/tools";

axios.defaults.headers.post["Content-Type"] = "application/json";

export const checkEmail = async (values) => {
  try {
    const emailStatus = await axios.post("/api/auth/checkEmail", {
      email: values.email,
    });

    return emailStatus.data;
  } catch (error) {
    return error;
  }
};

export const Login = async (values) => {
  try {
    const user = await axios.post("/api/auth/signin", {
      email: values.email,
      password: values.password,
    });

    return user.data;
  } catch (error) {
    return error;
  }
};

export const RegisterUser = (values) => {
  return async (dispatch) => {
    try {
      const registerInfo = await axios.post("/api/auth/register", {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        phone: values.phone,
      });
      dispatch(register_user({ data: registerInfo.data.user, auth: false }));
      return registerInfo;
    } catch (error) {
      return error;
    }
  };
};

export const userIsAuth = () => {
  return async (dispatch) => {
    try {
      if (!getTokenCookie()) {
        throw new Error("Unauthorized");
      }
      const user = await axios.get("/api/auth/isauth", getAuthHeader());
      dispatch(verify_user({ data: user.data, auth: true }));
    } catch (error) {
      dispatch(verify_user({ auth: false }));
    }
  };
};

export const userSignOut = async () => {
  console.log("in delete cookie");
  await removeTokenCookie();
  return true;
};
