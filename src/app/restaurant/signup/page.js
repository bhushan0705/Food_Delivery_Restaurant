"use client";

import { signIn } from "next-auth/react";

export default function SignupPage() {
  return (
    <div>
      <h1>Signup Page</h1>

      <button
        onClick={() =>
signIn("google", {
  callbackUrl: "/restaurant/dashboard",
})
}
      >
        Signup with Google
      </button>
    </div>
  );
}