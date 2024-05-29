"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FieldErrors, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface HookFormTypes {
  email: string;
  password: string;
}

const Page = () => {
  const { register, handleSubmit, watch, reset, setValue } =
    useForm<HookFormTypes>();

  const router = useRouter();

  const onValid = async (data: HookFormTypes) => {
    try {
      const response = await axios.post(
        "http://localhost:10010/auths/signIn",
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      );

      if (typeof window !== "undefined") {
        localStorage.setItem("access_token", response.data.access_token);
      }
      router.push("/");
    } catch (e) {
      alert("올바른 아이디 및 비밀번호가 아닙니다.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>
          <form id="login-form" method="post" onSubmit={handleSubmit(onValid)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  {...register("email", {
                    required: true,
                  })}
                  type="email"
                ></Input>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                  name="password"
                  type="password"
                ></Input>
              </div>
              <Link
                className="flex flex-col space-y-1.5"
                href="http://localhost:10010/auths/kakao/redirect"
              >
                <Button className="bg-amber-300 text-black" type="button">
                  KakaoTalk
                </Button>
              </Link>
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => {
                    reset();
                  }}
                  type="button"
                >
                  Cancel
                </Button>
                <Button variant="default" type="submit">
                  Login
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
