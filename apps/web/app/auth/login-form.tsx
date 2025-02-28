"use client";
import * as React from "react";

import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { FlaskConicalOff } from "lucide-react";
import { login as viewData } from "@config/layout.json";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  return (
    <Card className="w-11/12 mt-5">
      <CardHeader>
        <CardTitle>{viewData.title}</CardTitle>
        <CardDescription>{viewData.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center ">
        <form className="w-full max-w-sm flex flex-col gap-4 ">
          <div className="flex flex-col gap-2 ">
            <Label>{viewData.id}</Label>
            <Input className="w-full" />
            <Label>{viewData.password}</Label>
            <Input className="w-full" />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end m-4">
        <Button className="mr-4" variant={"ghost"}>
          {viewData.login}
        </Button>
        <Button variant={"ghost"} onClick={() => router.push("/auth/register")}>
          {viewData.register}
        </Button>
      </CardFooter>
    </Card>
  );
}
