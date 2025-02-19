"use client";

import menuData from "@config/menu.json";
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
  const { state, open, setOpen } = useSidebar();
  const router = useRouter();
  return (
    <Sidebar>
      <SidebarHeader className="mt-5 ml-3 mr-3">
        <p className="font-semibold">{menuData.menu.title}</p>
      </SidebarHeader>

      <SidebarContent className="pl-3 pr-3 flex flex-col gap-2">
        <SidebarMenu>
          <Button asChild variant="ghost">
            <Link href={menuData.link.home}>{menuData.menu.home}</Link>
          </Button>
        </SidebarMenu>

        <Button asChild variant="ghost">
          <Link href={menuData.link.stock}>{menuData.menu.stock}</Link>
        </Button>
        <SidebarGroup />
        <Separator />
        <SidebarHeader className="mt-5 ml-3 mr-3">
          <p className="font-semibold">{menuData.menu.admin}</p>
        </SidebarHeader>
        <SidebarGroup>
          <Button asChild variant="ghost">
            <Link href={menuData.link.admin.stock}>{menuData.menu.stock}</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href={menuData.link.admin.user}>{menuData.menu.user}</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href={menuData.link.admin.log}>{menuData.menu.log}</Link>
          </Button>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}
