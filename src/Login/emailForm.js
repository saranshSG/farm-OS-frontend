import React, { useState } from "react";
import logo from "../images/logo.png";
import { useDispatch } from "react-redux";
import { login_user } from "../actions/userActions";
import { checkEmail } from "./userAuth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { emailSchema } from "../validations/loginValidations";
import "./loginForm.css";

const EmailForm = () => {
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(emailSchema),
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();

    try {
      if (data) {
        const response = await checkEmail({
          email: data.email,
        });

        if (response.user) {
          const user = {
            email: response.user.email,
            firstname: response.user.firstname,
            lastname: response.user.lastname,
          };
          dispatch(login_user(user));
          navigate("/login");
        } else {
          setEmailError(response.message);
        }
      }
    } catch (err) {
      if (err.response) {
        setEmailError(err.response.data.message);
      } else {
        setEmailError(err.message);
      }
    }
  };

  return (
    <div className="loginFormWrapper  flex">
      <form className="loginFormBlock" onSubmit={handleSubmit(onSubmit)}>
        <div className="loginFromLogoBlock flex flex-col items-center">
          <img className="loginFormLogoImg" src={logo} alt="logo" />
          <div className="loginFormIntroTag">
            <b>FARM</b> OS
          </div>
        </div>

        <div className="loginFormInputBlock">
          <div className="inputBlock">
            <input
              className="loginFormInputField"
              id="email"
              type="text"
              placeholder="Email"
              {...register("email")}
            />
            {errors ? (
              <div
                className="invalid-feedback  text-red-500 text-xs px-2 pt-1"
                style={errors.email ? { display: "block" } : {}}
              >
                {errors.email?.message}
              </div>
            ) : null}
            {emailError ? (
              <div
                className="invalid-feedback  text-red-500 text-xs px-2 pt-1 "
                style={emailError ? { display: "block" } : {}}
              >
                {emailError ? emailError : null}
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

export default EmailForm;
