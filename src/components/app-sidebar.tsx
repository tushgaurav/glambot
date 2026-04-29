import { useNavigate } from "react-router-dom"
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  LayoutDashboardIcon,
  CalendarIcon,
  CameraIcon,
  BookOpenIcon,
  BotIcon,
} from "lucide-react"
import { useSession, signOut } from "@/lib/auth-client"

const navItems = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: <LayoutDashboardIcon />,
  },
  {
    title: "Bookings",
    url: "/admin/bookings",
    icon: <BookOpenIcon />,
  },
  {
    title: "Shot Requests",
    url: "/admin/shot-requests",
    icon: <CameraIcon />,
  },
  {
    title: "Events",
    url: "/admin/events",
    icon: <CalendarIcon />,
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = useSession()
  const navigate = useNavigate()

  const user = {
    name: session?.user?.name || "Admin",
    email: session?.user?.email || "",
    avatar: "",
  }

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              onClick={() => navigate("/admin")}
            >
              <BotIcon className="size-5!" />
              <span className="text-base font-semibold">GlamBot Admin</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
