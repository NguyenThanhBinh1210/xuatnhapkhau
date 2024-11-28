import * as React from "react"
import {
  BookOpen,
  Command,
  Frame,
  LifeBuoy,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  User,
  Warehouse
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar"
import { ModeToggle } from "./mode-toggle"

const data = {
  user: {
    name: "Nguyễn Thanh Bình",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Hàng hoá",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Danh sách nhập hàng",
          url: "/danh-sach-nhap-hang",
        },
        {
          title: "Danh sách xuất hàng",
          url: "/danh-sach-xuat-hang",
        },

      ],
    },
    {
      title: "Quản lý kho",
      url: "#",
      icon: Warehouse,
      items: [
        {
          title: "Quản lý nhập kho",
          url: "/quan-ly-nhap-kho",
        },
        {
          title: "Quản lý xuất kho",
          url: "/quan-ly-xuat-kho",
        },

      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Hỗ trợ",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Nhận xét",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Quy trình thông quan",
      url: "#",
      icon: Frame,
    },
    {
      name: "Lập báo cáo công việc",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Quản lý nhân sự",
      url: "/quan-ly-nhan-su",
      icon: User,
    },
    {
      name: "Xử lý yêu cầu",
      url: "#",
      icon: BookOpen,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Nguyễn Thanh Bình</span>
                  <span className="truncate text-xs">Giám đốc</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <ModeToggle></ModeToggle>
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
