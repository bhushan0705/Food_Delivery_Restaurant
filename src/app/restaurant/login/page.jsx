"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      ...form,
      type: isSignup ? "signup" : "login",
      redirect: false,
    });

    if (res?.ok) {
      router.push("/restaurant/dashboard");
    }
  };

  return (
    <>

    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>
            {isSignup
              ? "Create Restaurant Owner Account"
              : "Login Restaurant Owner"}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">

            {isSignup && (
              <div>
                <Label>Name</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div>
              <Label>Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label>Password</Label>
              <Input
                id="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <Button className="w-full" type="submit">
              {isSignup ? "Sign Up" : "Login"}
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() =>
                signIn("google", {
                  callbackUrl: "/restaurant/dashboard",
                })
              }
            >
              Continue with Google
            </Button>

            <p
              className="text-sm text-center cursor-pointer"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup
                ? "Already have account? Login"
                : "New user? Sign up"}
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
        </>
  );
}