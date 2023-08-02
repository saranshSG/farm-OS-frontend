import React, { useState } from "react";
import logo from "../images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { login_user } from "../actions/userActions";
import { Login } from "./userAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { passwordSchema } from "../validations/loginValidations";
import { useNavigate } from "react-router-dom";
import "./loginForm.css";

const LoginForm = () => {
  const [passwordError, setPasswordError] = useState("");
  const email = useSelector((state) =>
    state.User.loginInfo ? state.User.loginInfo.email : null
  );
  let emailsend = email;
  const name = useSelector((state) =>
    state.User.loginInfo ? state.User.loginInfo.firstname : null
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(passwordSchema),
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();

    try {
      if (data) {
        setPasswordError("");
        const response = await Login({
          email: emailsend,
          password: data.password,
        });
        console.log(response);
        if (response.token) {
          const user = {
            email: response.user.user.email,
            firstname: response.user.user.firstname,
            lastname: response.user.user.lastname,
            phone: response.user.user.phone,
            id: response.user.user._id,
            token: response.user.token,
            farm: response.user.farm[0],
          };
          console.log(user);
          dispatch(login_user(user));
          navigate("/home/dashboard");
        } else {
          setPasswordError("Wrong password");
        }
      }
    } catch (err) {
      if (err.response) {
        setPasswordError(err.response.data.message);
      } else {
        setPasswordError(err.message);
      }
    }
  };

  return (
    <div className="loginFormWrapper  flex">
      <form className="loginFormBlock" onSubmit={handleSubmit(onSubmit)}>
        <div className="loginFromLogoBlock flex flex-col items-center">
          <img className="loginFormLogoImg" src={logo} alt="logo" />
          <div className="loginFormIntroTag">
            HELLO <b>{name ? name : "user"}</b>
          </div>
        </div>

        <div className="loginFormInputBlock">
          <div className="inputBlock">
            <input
              type="password"
              className="loginFormInputField "
              placeholder="Password"
              id="password"
              {...register("password")}
            />
            {errors ? (
              <div
                className="invalid-feedback  text-red-500 text-xs px-2 pt-1"
                style={errors.password ? { display: "block" } : {}}
              >
                {errors.password
                  ? errors.password.message
                  : passwordError
                  ? passwordError
                  : null}
              </div>
            ) : null}
          </div>
          <button className="loginFormLoginBtn">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="loginFormAlterOptionsBlock">
          <div className="loginFormAlterOption">Forgot Login Credentials</div>
          <div
            className="loginFormAlterOption"
            onClick={() => {
              navigate("/register");
            }}
          >
            Create New Account
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
