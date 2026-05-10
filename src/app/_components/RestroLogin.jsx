import axios from "axios";
import React, { useState } from "react";

const RestroLogin = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const [loginErr, setLoginErr] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if(!loginData.email || !loginData.password){
        setLoginErr(true);
        return;
    }
    setLoginErr(false);

    try {
        let response = await axios.post(
            'http://localhost:3000/api/restaurant',
            {
                ...loginData,
                login:true
            }
        );
        if(response.data.success){
            const result = response.data.result;
            delete result.password;

            localStorage.setItem(
                'restroData',
                JSON.stringify(result)
            );

            window.location.href='/restaurant/dashboard';
        }
    } catch (error) {
        console.log(error);
        setLoginErr(true);
    }
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
          <div>
<input
          type="email"
          placeholder="enter your email"
          value={loginData.email}
          name="email"
          onChange={handleChange}
          required
        />
        {
          loginErr && <span>enter valid data</span>
        }
          </div>
          <div>
        <input
          type="password"
          placeholder="enter your password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          required
        />
           {
          loginErr && <span>enter valid data</span>
        }
          </div>
        <button className="loginSignBtn">Login</button>
           </div>
      </form>
    </div>
  );
};

export default RestroLogin;
