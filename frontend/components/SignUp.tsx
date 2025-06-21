"use client";

import { useState } from "react";
// import {Input} from "@heroui/form";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"

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
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient"); // Default role set to "patient"
   
 const handleSignup = async () => {
  try {
    const response = await fetch("http://localhost:5000/v1/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
    name: name.trim(),
    email: email.trim(),
    password,
    role: role.trim(),
      }),
    });

    const data = await response.json();
    console.log("Signup response:", data);

    if (response.status === 201 && data.data.accessToken) {
      // Store token
      localStorage.setItem('accessToken', data.data.accessToken);

      // Store user info
      const userData = {
        id: data.data._id,
        name: data.data.name,
        email: data.data.email,
        role: data.data.role,
       
      };
      localStorage.setItem('user', JSON.stringify(userData));

      // Navigate to email verification page
      router.push("/verify-email");
    } else {
      alert("Signup failed: " + (data.message || "Unknown error"));
    }
  } catch (error) {
    console.error("Signup error:", error);
    alert("Something went wrong. Please try again.");
  }
};

  return (
    <Card className="w-full max-w-sm border-1 border-black">
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
            className="border-1 border-black"
            placeholder="John Doe"
            onChange={(e) => setName(e.target.value)}
            value={name}/>

        </div>
        <div className="flex flex-col gap-6 ">
          <div className="grid gap-2 mt-4 ">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              className="border-1 border-black"
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
              placeholder="********"  
              className="border-1 border-black"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            
          </div>
         <div className="grid gap-2 ">
  <Label htmlFor="role">Role</Label>
  <RadioGroup
    id="role"
    value={role}
    onValueChange={(value) => setRole(value)}
    className="border-1 border-black p-4  rounded-md bg-green-100 "
  >
    <div className="flex items-center gap-2 border-b border-gray-300 pb-2 mb-2">
      <RadioGroupItem value="patient" id="patient" />
      <Label htmlFor="patient">Patient</Label>
    </div>
    <div className="flex items-center gap-2  border-gray-300 pb-2 mb-2">
      <RadioGroupItem value="doctor" id="doctor" />
      <Label htmlFor="doctor">Doctor</Label>
    </div>
  </RadioGroup>
</div>
         
         
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button onClick={handleSignup} className="w-full">
          Sign Up
        </Button>
        <Button variant="outline" className="w-full">
          Sign up with Google
        </Button>
      </CardFooter>
    </Card>
  );
}
