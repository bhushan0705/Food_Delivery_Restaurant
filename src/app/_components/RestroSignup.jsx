import React, { useState } from "react";

const RestroSignup = () => {
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    re_entered_password: "",
    retaurantName: "",
    resCity: "",
    resAddress: "",
    resContactNo: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(signupData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setSignupData((data) => ({ ...data, [name]: value }));
  }

  return (
    <div className="bigWrapperForm">
      <form onSubmit={handleSubmit } className="flex flex-col gap-5 items-center justify-center">
        <h1 className="signLoginHeader">SIGNUP</h1>
        <div className="flex flex-col wrapperBox"> 
        <input
          type="email"
          placeholder="Enter Your Email Id"
          name="email"
          value={signupData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          name="password"
          value={signupData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter your Password"
          name="re_entered_password"
          value={signupData.re_entered_password}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Restaurant Name"
          name="retaurantName"
          value={signupData.retaurantName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter City"
          name="resCity"
          value={signupData.resCity}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Full Address"
          name="resAddress"
          value={signupData.resAddress}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Contact Number"
          name="resContactNo"
          value={signupData.resContactNo}
          onChange={handleChange}
        />
        <button className="loginSignBtn">Signup</button>
         </div>
      </form>
    </div>
  );
};

export default RestroSignup;
