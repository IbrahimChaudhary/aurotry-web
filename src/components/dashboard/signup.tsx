"use client";
import React from "react";
import { AuthBackground } from "./auth-background";
import Image from "next/image";
import { Check, Globe, MoveDownRight } from "lucide-react";
import { signInWithGoogle } from "@/api/auth/auth";

export default function SignUp() {
  return (
    <div className="relative   p-5 flex items-center  justify-between">
      <div className="flex flex-col w-full ">
        <div className="">
          <div className="mb-[30px]  flex gap-[8px]">
            <Image src="/logo.svg" alt="AuroTry" width={40} height={40} />
            <p className="text-[27px] font-semibold">AuroTry</p>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="flex gap-[20px] lg:flex-row flex-col  justify-center w-full max-w-[1440px]">
            <div className="px-[40px] py-[40px] max-w-[555px] w-full">
              <h1 className="text-[32px] lg:text-[61px] lg:text-left text-center font-bold leading[120%]">
                Get started in minutes
              </h1>
              <ul className=" lg:block hidden space-y-[28px] mt-[28px]">
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-black p-1">
                    <MoveDownRight
                      name="MoveDownRight"
                      className="text-white"
                      size={16}
                    />
                  </div>
                  <span>No-Code Setup</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-black p-1">
                    <MoveDownRight
                      name="MoveDownRight"
                      className="text-white"
                      size={16}
                    />
                  </div>
                  <span>Immersive AR Experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-black p-1">
                    <MoveDownRight
                      name="MoveDownRight"
                      className="text-white"
                      size={16}
                    />
                  </div>
                  <span>Data-Driven Insights</span>
                </li>
              </ul>
              <p className="text-center lg:hidden block text-[16px] text-[#737477] font-semibold">No-Code Setup, Immersive AR Experience, Data-Driven Insights</p>

            </div>
            <div className="bg-white rounded-3xl max-w-[570px] flex flex-col justify-center w-full  p-5 shadow-lg">
              <h2 className="text-[23px] lg:text-[31px] leading-[120%] font-bold mb-[40px] text-left">
                Sign in to your account
              </h2>

              <button
                className="flex items-center border-[#CACACB]  justify-center gap-2 w-full border-[2px] rounded-full p-3 mb-[20px]"
                onClick={signInWithGoogle}
              >
                <Image src="/google.png" alt="AuroTry" width={24} height={24} />
                <span>Sign in with Google</span>
              </button>

              <button className="flex items-center justify-center gap-2 w-full border-[#CACACB] border-[2px] rounded-full p-3">
                <Globe />
                <span>Sign in with Microsoft</span>
              </button>

              <p className=" text-[14px] text-center mt-[40px]">
                By signing up, you agree to AuroTry’s{" "}
                <a href="#" className="text-[#6638CA] underline font-medium">
                  Terms & Privacy
                </a>
              </p>
              <p className=" text-[14px] text-center mt-3">
                Already have an account?{" "}
                <a href="/login" className="text-[#6638CA] underline font-medium">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
