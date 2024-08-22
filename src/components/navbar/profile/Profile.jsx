import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="dropdown">
      <button className="dropdown-toggle">
        <img
          src="https://buyerintent.infojoy.com/assets/img/avatar/avatar-1.png"
          alt="User Profile"
          className="profile-icon"
        />
      </button>
      <div className="dropdown-menu">
        <div className="profile-info">
          <img
            src="https://buyerintent.infojoy.com/assets/img/avatar/avatar-1.png"
            alt="User Avatar"
            className="avatar"
          />
          <div className="details">
            <div className="username">simran</div>
            <div className="role">Admin</div>
          </div>
        </div>
        <hr />
        <div className="plan-info">
          <span>Plan - </span>
          <strong>Free</strong>
        </div>
        <div className="credits-info">
          <img src="https://via.placeholder.com/20" alt="Credits Icon" />
          <span>Available Credits - 100</span>
        </div>
        <div className="end-date-info">
          <img src="https://via.placeholder.com/20" alt="Calendar Icon" />
          <span>End Date - 1/1/0001</span>
        </div>
        <hr />
        <div className="logout">
          <img src="https://via.placeholder.com/20" alt="Logout Icon" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
