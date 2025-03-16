"use client";

import menuData from "@config/layout.json";
import { UserPermission } from "@shared/users/users.const";
import { useUserStore } from "@state/userStore";
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
import { useRouter } from "next/navigation";

export function AppSidebar() {
  const { permission, logout } = useUserStore();
  const router = useRouter();

  async function handleLogout() {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Failed to logout");
      }

      logout();
      router.push("/auth");
    } catch (error) {
      console.warn(error);
    }
  }

  const { setOpen, isMobile, setOpenMobile } = useSidebar();

  const sideBarHandler = () => {
    if (isMobile) setOpenMobile(false);
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
        permission === UserPermission.admin ? (
          <>
            <SidebarHeader className="mt-5 ml-3 mr-3">
              <p className="font-semibold">{menuData.menu.admin}</p>
            </SidebarHeader>
            <SidebarGroup>
              <Button asChild variant="ghost" onClick={sideBarHandler}>
                <Link href={menuData.link.admin.stock}>
                  {menuData.menu.stock}
                </Link>
              </Button>
              <Button asChild variant="ghost" onClick={sideBarHandler}>
                <Link href={menuData.link.admin.user}>
                  {menuData.menu.user}
                </Link>
              </Button>
              <Button asChild variant="ghost" onClick={sideBarHandler}>
                <Link href={menuData.link.admin.log}>{menuData.menu.log}</Link>
              </Button>
            </SidebarGroup>
          </>
        ) : (
          <></>
        )}
      </SidebarContent>

      <SidebarFooter>
        <Button variant={"ghost"} onClick={handleLogout}>
          logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
