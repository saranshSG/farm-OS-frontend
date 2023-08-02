import React from "react";
import profile from "../../assests/profile.png";
import { useSelector } from "react-redux";
import "./Profile.css";

const Profile = () => {
  const user = useSelector((state) =>
    state.User.loginInfo.firstname ? state.User.loginInfo : null
  );
  return (
    <div className="profileWrapper lg:w-10/12">
      <div className="profileBlock px-2 py-2">
        <div className="profileIconNameContainer flex px-4 py-6  ">
          <div className="profileIconBlock w-4/12 ">
            <img
              className="w-full rounded-lg"
              src={profile}
              alt="profile_Icon "
            />
          </div>

          <div className="profileFullName py-10 px-6 lg:py-6 text-left">
            <div className="text-sm">Full Name</div>
            <div className="text-xl">
              <b>{user ? user.firstname : "Lalit"}</b>&nbsp;
              <b>{user ? user.lastname : "Goutam"}</b>
            </div>
          </div>
        </div>
        <div className="profileEmailPhone py-2 px-4 text-left">
          <div className="text-sm">Email</div>
          <div className="text-xl mb-5">
            <b>{user ? user.email : "lalit@sensegrass.com"}</b>
          </div>
          <div className="text-sm">Number</div>
          <div className="text-xl mb-5">
            <b>{user ? "+91 " + user.phone : "Lalit"}</b>
          </div>
        </div>
        <div className="profilePrimaryLocation py-6 px-4 text-left">
          <div className="text-sm">Primary Location</div>
          <div className="text-xl ">
            <b>{user ? "Atlanta" : "Atlanta"}</b>
          </div>
        </div>
        <div className="profileChangePassEdit flex justify-between px-4 py-3 font-bold">
          <div>Change Password</div>
          <div>Edit</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
