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
import { userInfo } from "@config/mock.json";

export function UserCard() {
  return (
    <Card className="w-11/12 mt-5">
      <CardHeader>
        <CardTitle>{userInfo.name}</CardTitle>
        <CardDescription>테러에 주의하자</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-row w-full gap-4">
            <div className="flex flex-col">
              <div className="flex space-y-1.5">학번:{userInfo.id}</div>
              <div className="flex space-y-1.5">새콤달콤 맛있는 염산</div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}
