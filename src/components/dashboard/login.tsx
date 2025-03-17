"use client";
import React from "react";
import { AuthBackground } from "./auth-background";
import Image from "next/image";
import {
  ArrowUpIcon,
  Check,
  EyeIcon,
  Globe,
  MoveDownRight,
  MoveRight,
} from "lucide-react";
import {  loginUser,  signInWithGoogle } from "@/api/auth/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { authSchema } from "@/schema/auth";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function Login() {
  //CONFIG
  const router = useRouter();
  //SCHEMA
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  //MUTATIONS
  const loginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: any) => loginUser(data),
    onSuccess: (data) => {
      console.log("Login successful:", data);
      toast("Successfully logged in");
      router.push("/dashboard");
    },
    onError: (error) => {
      toast("Login failed. Please check your credentials.");
      console.error("Login error:", error);
    },
  });
  //HANDLERS
  const onSubmit = (data: z.infer<typeof authSchema>) => {
    loginMutation.mutate(data);
  };
  return (
    <div className="relative   p-5 flex items-center  justify-between">
      <div className="flex flex-col w-full ">
        <div className="">
          <div className="mb-[15px] lg:mb-[30px]  flex gap-[8px]">
            <Image src="/logo.svg" alt="AuroTry" width={40} height={40} />
            <p className="text-[27px] font-semibold">AuroTry</p>
          </div>
        </div>
        <div className="flex justify-center  ">
          <div className="flex gap-[20px] lg:flex-row flex-col items-center justify-center w-full max-w-[1440px]">
            <div className="lg:px-[40px] px-[15px] py-[15px] lg:py-[40px] max-w-[555px] w-full">
              <h1 className=" lg:block hidden text-[61px] text-left font-bold leading[120%]">
                Power Up Your
                <br />
                Store with AR
              </h1>
              <h1 className="text-[32px] block lg:hidden  text-center  font-bold leading[120%]">
                Power Up Your
                Store with AR
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
                  <span>Boost Conversions with AR</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-black p-1">
                    <MoveDownRight
                      name="MoveDownRight"
                      className="text-white"
                      size={16}
                    />
                  </div>
                  <span>Seamless Store Integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-black p-1">
                    <MoveDownRight
                      name="MoveDownRight"
                      className="text-white"
                      size={16}
                    />
                  </div>
                  <span>Real-Time Analytics</span>
                </li>
              </ul>
              <p className="text-center lg:hidden block text-[16px] text-[#737477] font-semibold">Boost Conversions with AR, Seamless Store Integration, Real-Time Analytics</p>
            </div>
            <div className="bg-white rounded-3xl max-w-[570px] w-full  p-5 shadow-lg">
              <h2 className="text-[23px] lg:text-[31px] leading-[120%] font-bold mb-[20px] lg:mb-[40px] text-left">
                Sign in to your account
              </h2>

              <button
                className="flex items-center justify-center border-[#CACACB] gap-2 w-full border-[2px] rounded-full p-3 mb-[20px]"
                onClick={signInWithGoogle}
              >
                <Image src="/google.png" alt="AuroTry" width={24} height={24} />
                <span>Sign in with Google</span>
              </button>

              <button className="flex items-center border-[#CACACB] justify-center gap-2 w-full border-[2px] rounded-full p-3">
                <Globe />
                <span>Sign in with Microsoft</span>
              </button>
              <div className="flex items-center my-[10px] lg:my-[20px]">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="px-3 text-gray-500 text-sm">Or</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4 lg:space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium mb-1">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="border-[#CACACB] py-3 border-[2px] lg:mt-[8px] rounded-full"
                            placeholder="example@email.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium mb-1">
                          Password
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="border-[#CACACB] p-3 border-[2px] lg:mt-[8px] rounded-full"
                            placeholder="enter your password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="bg-black text-white rounded-full py-6 px-6 flex items-center gap-[12px] mx-auto"
                  >
                    Login
                    <div className=" rounded-full bg-white px-[11px] py-[10px]">
                      <MoveRight
                        className=" text-black "
                        width={14.95}
                        height={18}
                      />
                    </div>
                  </Button>
                </form>
              </Form>
              <p className="text-center mt-3">
                Need an account?{" "}
                <a
                  href="/signup"
                  className="text-[#6638CA] underline font-medium"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
