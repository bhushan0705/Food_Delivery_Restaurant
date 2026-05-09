"use client";


import React, { useState } from "react";
import RestroLogin from "../_components/RestroLogin";
import RestroSignup from "../_components/RestroSignup";
import RestaurantHeader from "../_components/RestaurantHeader";
import RestaurantFooter from "../_components/RestaurantFooter";


const page = () => {

  const [login, setLogin] = useState(false);

  return (
   <div className="flex flex-col min-h-screen w-full">
  
  <RestaurantHeader />

  <div className="flex-1 flex items-center justify-center">

    <div className="flex flex-col items-center gap-2">
      {login ? <RestroLogin /> : <RestroSignup />}

      <button
        className="linkBtnLogin text-green-400"
        onClick={() => setLogin(!login)}
      >
        {login
          ? "Yet, Don't have an account? Signup"
          : "Already have an account? Login"}
      </button>
    </div>

  </div>
  <RestaurantFooter />
</div>
  );
};

export default page;
