"use client";

import { useState } from "react";
// import {Input} from "@heroui/form";
import { useRouter } from "next/navigation";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function SignUp() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [verify, setVerify] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
   
  const handleLogin = async () => {
    console.log("email:", email);
    console.log("password:", password);
    console.log("role:", role);

    const response = await fetch("http://localhost:5000/v1/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        role,
      }),
    });

    const data = await response.json();
    console.log("Signup response:", data);

    if (response.status === 201) {
      alert("Signup successful: " + data.data.name);
      router.push("/");
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Sign up for new account  </CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button onClick={() => router.push("/login")} variant="link">
            Login
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>  
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            onChange={(e) => setName(e.target.value)}
            value={name}/>

        </div>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            
          </div>
          <div className="grid gap-2">
            <Label htmlFor="verify">Verify Password</Label>
            <Input
              id="verify"
              type="true"
              onChange={(e) => setVerify(e.target.value)}
              value={verify}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="role">Role</Label>
            <input
              id="role"
            type="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
            />

            
            </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button onClick={handleLogin} className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  );
}
