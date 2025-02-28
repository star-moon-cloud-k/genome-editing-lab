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
import {
  register as viewData,
  contact as contactData,
} from "@config/layout.json";
import { useRouter } from "next/navigation";
import { ID_PATTERN, PASSWORD_PATTERN } from "@workspace/utils/regex-pattern";
import { Combobox, ComboBoxTypes } from "../../../components/combo-box";

export function RegisterForm() {
  const router = useRouter();
  const [id, setId] = React.useState<string>("");
  const [password, setPassword] = React.useState("");
  const [passwordCheck, setPasswordCheck] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const [labName, setLabName] = React.useState("");

  console.log({ id });
  console.log({ password });
  console.log({ passwordCheck });

  const options = [
    {
      value: "next.js",
      label: `성균관대학교 의과대학 유전자 교정 연구실 김대식`,
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];

  const isFilled = id.length > 0 && password.length > 0;
  const registerHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //폼 submit의 기본 동작(페이지 새로고침) 방치

    //1) ID 정규식 검사
    if (!ID_PATTERN.test(id)) {
      alert("ID가 유효하지 않습니다. 학번을 입력해주세요 :(");
      return;
    }

    if (!password || !passwordCheck) {
      alert("비밀번호를 입력해주세요 :(");
      return;
    }

    if (password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다 :(");
      return;
    }

    if (!PASSWORD_PATTERN.test(password)) {
      alert("비밀번호 정책과 일치하지 않습니다.");
    }

    alert("비밀번호 정책과 일치합니다.");
  };
  return (
    <Card className="w-11/12 mt-5">
      <CardHeader>
        <CardTitle>{viewData.title}</CardTitle>
        <CardDescription>{viewData.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center ">
        <form
          className="w-full max-w-sm flex flex-col gap-4 "
          onSubmit={registerHandler}
        >
          <Label>{viewData.labName}</Label>
          <Combobox
            comboOptions={options}
            placeHolder={viewData.placeHolder}
            className="w-full"
          />
          <div className="flex flex-col gap-2 ">
            <Label>{viewData.id}</Label>
            <div className="flex flex-row">
              <Input
                className="w-64"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <Button onClick={() => {}} variant="ghost">
                {viewData.verify}
              </Button>
            </div>

            <Label>{viewData.password}</Label>
            <Input
              className="w-full"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Label>{viewData.passwordCheck}</Label>
            <Input
              className="w-full"
              type="password"
              value={passwordCheck}
              onChange={(e) => setPasswordCheck(e.target.value)}
            />
          </div>
          <Button type="submit" variant="ghost" disabled={!isFilled}>
            {viewData.register}
          </Button>
          <CardFooter className="flex flex-col justify-end m-4">
            <CardDescription>{contactData.description}</CardDescription>
            <CardDescription>{contactData.Email}</CardDescription>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
