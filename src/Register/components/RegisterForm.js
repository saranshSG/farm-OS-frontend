import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validations/registerValidation";
import { RegisterUser } from "../registerAction";
import { register_user } from "../../actions/userActions";
import { useDispatch } from "react-redux";
import logo from "../../images/logo.png";
import spinner from "../../assests/spinner.gif";

import "./RegisterForm.css";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registerError, setRegisterError] = useState();
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      if (data) {
        console.log(data);
        setLoader(true);
        let response = await RegisterUser(data);
        if (response) {
          dispatch(register_user(response));
          setLoader(false);
          navigate("/registerFarm");
        }
      }
    } catch (err) {
      setLoader(false);
      if (err.response) {
        setRegisterError(err.response.data.message);
      } else {
        setRegisterError(err.message);
      }
    }
  };
  return (
    <div className="registerFormWrapper  py-2">
      <div className="registerFormBlock w-full lg:max-w-lg md:max-w-lg max-w-xs">
        <form
          className="registerForm px-8 lg:px-14 pt-5 pb-6 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="loginFromLogoBlock flex flex-col items-center lg:ml-10">
            <img className="loginFormLogoImg" src={logo} alt="logo" />
            <div className="loginFormIntroTag">
              <b>FARM </b>OS
            </div>
          </div>
          <div className=" lg:flex lg:space-x-4">
            <div className="mb-4 ">
              <label className="block  text-sm font-bold mb-2" for="firstname">
                First Name
              </label>
              <input
                className="registerFormInputField appearance-none border 
          rounded w-full py-2 px-3 
          leading-tight focus:outline-none
           focus:shadow-outline"
                id="firstname"
                name="firstname"
                type="text"
                placeholder="First Name"
                {...register("firstname")}
              />{" "}
              {
                <div
                  className="invalid-feedback  text-red-500 text-xs px-2 pt-1"
                  style={errors.firstname ? { display: "block" } : {}}
                >
                  {errors.firstname?.message}
                </div>
              }
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" for="lastname">
                Last Name
              </label>
              <input
                className=" registerFormInputField appearance-none border 
          rounded w-full py-2 px-3 
          leading-tight focus:outline-none
           focus:shadow-outline"
                id="lastname"
                name="lastname"
                type="text"
                placeholder="Last Name"
                {...register("lastname")}
              />{" "}
              {
                <div
                  className="invalid-feedback  text-red-500 text-xs px-2 pt-1"
                  style={errors.lastname ? { display: "block" } : {}}
                >
                  {errors.lastname?.message}
                </div>
              }
            </div>
          </div>
          <div className="mb-4 ">
            <label className="block text-sm font-bold mb-2" for="phone">
              Contact number
            </label>
            <input
              className=" registerFormInputField appearance-none border 
          rounded w-full py-2 px-3 
          leading-tight focus:outline-none
           focus:shadow-outline"
              id="phone"
              name="phone"
              type="text"
              placeholder="Contact number"
              {...register("phone")}
            />{" "}
            {
              <div
                className="invalid-feedback  text-red-500 text-xs px-2 pt-1"
                style={errors.phone ? { display: "block" } : {}}
              >
                {errors.phone?.message}
              </div>
            }
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" for="email">
              Email
            </label>
            <input
              className=" registerFormInputField appearance-none border 
          rounded w-full py-2 px-3 
          leading-tight focus:outline-none
           focus:shadow-outline"
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              {...register("email")}
            />{" "}
            {
              <div
                className="invalid-feedback  text-red-500 text-xs px-2 pt-1"
                style={errors.email ? { display: "block" } : {}}
              >
                {errors.email?.message}
              </div>
            }
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input
              className=" registerFormInputField appearance-none border 
          rounded w-full py-2 px-3 
          leading-tight focus:outline-none
           focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              {...register("password")}
            />{" "}
            {
              <div
                className="invalid-feedback  text-red-500 text-xs px-2 pt-1"
                style={errors.password ? { display: "block" } : {}}
              >
                {errors.password?.message}
              </div>
            }
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-bold mb-2"
              for="confirmpassword"
            >
              Confirm Password
            </label>
            <input
              className="  registerFormInputField appearance-none border 
          rounded w-full py-2 px-3 
          leading-tight focus:outline-none
           focus:shadow-outline"
              id="confirmpassword"
              name="confirmpassword"
              type="password"
              placeholder="Confirm Password"
              {...register("confirmpassword")}
            />
            {
              <div
                className="invalid-feedback  text-red-500 text-xs px-2 pt-1"
                style={errors.confirmpassword ? { display: "block" } : {}}
              >
                {errors.confirmpassword?.message}
              </div>
            }
          </div>
          <div
            className="invalid-feedback text-center text-red-500 text-xs px-2 py-2  pt-1 "
            style={registerError ? { display: "block" } : {}}
          >
            {registerError ? registerError : null}
          </div>

          {loader ? (
            <div className="flex justify-center">
              <img className="w-16" src={spinner} alt="spinner" />
            </div>
          ) : (
            <div className="flex justify-center">
              <button
                className="os_button py-1 w-full  text-lg font-bold lg:h-3/4  mx-2 rounded"
                type="submit"
              >
                Register
              </button>
            </div>
          )}

          <div className="goToLoginLinkBlock text-center   mt-4 text-xs lg:text-sm md:text-sm ">
            <div>Already registered? </div>
            <div
              className="goToLoginLink px-1"
              onClick={() => {
                navigate("/");
              }}
            >
              Login
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
