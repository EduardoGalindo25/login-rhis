
import React from 'react'
import "./LoginForm.css";
import { FaRegUser } from "react-icons/fa";
import { GoLock } from "react-icons/go";
import iconrhis from '../Assets/iconrhis.jpeg';
const loginForm = () => {
  return (
    <div class="wrapper">
      <form action="">
        <img src={iconrhis} alt="" className="iconrhis" />
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaRegUser className="icon" />
        </div>

        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <GoLock className="icon" />
        </div>

        {/* <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="#">forgot password?</a>
        </div> */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default loginForm