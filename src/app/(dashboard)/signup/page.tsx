import { AuthBackground } from "@/components/dashboard/auth-background";
import { AuthMobileBackground } from "@/components/dashboard/auth-mobile-backgrounf";
import SignUp from "@/components/dashboard/signup";
import React from "react";

export default function Auth() {
  return (
    <div className="my-[20px]">
      <SignUp />
      <AuthBackground />
      <AuthMobileBackground />
    </div>
  );
}
