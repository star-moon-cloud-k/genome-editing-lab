"use client";

import menuData from "@config/layout.json";
import { Button } from "@workspace/ui/components/button";
import { Separator } from "@workspace/ui/components/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  useSidebar,
} from "@workspace/ui/components/sidebar";
import Link from "next/link";
import { useEffect, useState } from "react";
import ApiClient from "@workspace/utils/api/fetch.util";
import { API } from "@/env/env.config";
import { UserPermissionRes } from "../../../packages/shared/users/users.dto";
import { UserPermission } from "@shared/users/users.const";
import { useRouter } from "next/navigation";

export function AppSidebar() {
  const [permission, setPermission] = useState<string>("");
  const router = useRouter();
  const getPermission = async () => {
    try {
      console.log(`${API}/api/user/permission`);
      const response = await ApiClient.get<UserPermissionRes>(
        `${API}`,
        `/api/user/permission`
      );
      setPermission(response.permission);
    } catch (error) {
      router.push("/");
      console.error("인증 과정 오류", error);
    }
  };
  useEffect(() => {
    getPermission();
  }, []);

  const { setOpen, isMobile, setOpenMobile } = useSidebar();

  const sideBarHandler = () => {
    if (isMobile) setOpenMobile(false);
    else setOpen(false);
  };
  return (
    <Sidebar>
      <SidebarHeader className="mt-5 ml-3 mr-3">
        <p className="font-semibold">{menuData.menu.title}</p>
      </SidebarHeader>

      <SidebarContent className="pl-3 pr-3 flex flex-col gap-2">
        <SidebarMenu>
          <Button asChild variant="ghost" onClick={sideBarHandler}>
            <Link href={menuData.link.home}>{menuData.menu.home}</Link>
          </Button>
        </SidebarMenu>

        <Button asChild variant="ghost" onClick={sideBarHandler}>
          <Link href={menuData.link.stock}>{menuData.menu.stock}</Link>
        </Button>
        <SidebarGroup />
        <Separator />
        {permission === UserPermission.manager ||
          permission === UserPermission.admin}
        <SidebarHeader className="mt-5 ml-3 mr-3">
          <p className="font-semibold">{menuData.menu.admin}</p>
        </SidebarHeader>
        <SidebarGroup>
          <Button asChild variant="ghost" onClick={sideBarHandler}>
            <Link href={menuData.link.admin.stock}>{menuData.menu.stock}</Link>
          </Button>
          <Button asChild variant="ghost" onClick={sideBarHandler}>
            <Link href={menuData.link.admin.user}>{menuData.menu.user}</Link>
          </Button>
          <Button asChild variant="ghost" onClick={sideBarHandler}>
            <Link href={menuData.link.admin.log}>{menuData.menu.log}</Link>
          </Button>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}
