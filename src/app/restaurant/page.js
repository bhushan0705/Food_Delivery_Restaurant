"use client";

import React, { useState } from "react";
import RestroLogin from "../_components/RestroLogin";
import RestroSignup from "../_components/RestroSignup";

const page = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center" style={{ gap: "1px" }}>
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
  );
};

export default page;
