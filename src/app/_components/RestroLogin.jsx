import React, { useState } from "react";

const RestroLogin = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginData);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData((data) => ({ ...data, [name]: value }));
  }

  return (
    <div className="bigWrapperForm flex pt-[10px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center justify-center" >
        <h1 className="signLoginHeader">Login</h1>
        <div className="wrapperBox">
        <input
          type="email"
          placeholder="enter your email"
          value={loginData.email}
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="enter your password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
        />
        <button className="loginSignBtn">Login</button>
           </div>
      </form>
    </div>
  );
};

export default RestroLogin;
