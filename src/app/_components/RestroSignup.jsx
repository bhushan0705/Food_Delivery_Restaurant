import axios from "axios";
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

  const [passError, setPassError]= useState(false);
  const [detailError, setDetailError] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(signupData);
        if(signupData.password !== signupData.re_entered_password){
        setPassError(true)
        return
      }
if(
    !signupData.email ||
    !signupData.password ||
    !signupData.re_entered_password ||
    !signupData.retaurantName ||
    !signupData.resCity ||
    !signupData.resAddress ||
    !signupData.resContactNo
){
    setDetailError(true);
    return;
}

      setDetailError(false);
       setPassError(false);
    try {
          let response =await axios.post('http://localhost:3000/api/restaurant',signupData);
          // console.log(response);
if(response.data.success){

   const result = response.data.result;

   delete result.password;
   delete result.re_entered_password;

   localStorage.setItem(
      'restroData',
      JSON.stringify(result)
   );

   window.location.href='/restaurant/dashboard';
}

    } catch (error) {
      console.log(error);
      
    }

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
          required
        />
        <div>
<input
          type="password"
          placeholder="Enter Your Password"
          name="password"
          value={signupData.password}
          onChange={handleChange}
          required
        />
        {
          passError && <span className="text-red-500 text-sm">
   Password doesn't match
</span>
        }
        </div>
        <div>
 <input
          type="password"
          placeholder="Enter your Password"
          name="re_entered_password"
          value={signupData.re_entered_password}
          onChange={handleChange}
          required
        />
        {
          passError && <span className="text-red-500 text-sm">
   Password doesn't match
</span>
        }
        </div>
       
        <input
          type="text"
          placeholder="Enter Restaurant Name"
          name="retaurantName"
          value={signupData.retaurantName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Enter City"
          name="resCity"
          value={signupData.resCity}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Enter Full Address"
          name="resAddress"
          value={signupData.resAddress}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Enter Contact Number"
          name="resContactNo"
          value={signupData.resContactNo}
          onChange={handleChange}
          required
        />
        {
  detailError && (
    <span className="text-red-500 text-sm">
      Please fill all details
    </span>
  )
}
        <button className="loginSignBtn">Signup</button>
         </div>
      </form>
    </div>
  );
};

export default RestroSignup;
