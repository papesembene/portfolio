import { Home, User, Code, Briefcase, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Accueil", url: "/", icon: Home },
  { title: "À propos", url: "/about", icon: User },
  { title: "Compétences", url: "/skills", icon: Code },
  { title: "Projets", url: "/projects", icon: Briefcase },
  { title: "Contact", url: "/contact", icon: Mail },
];

export function AppSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar className="border-r border-sidebar-border bg-sidebar-background">
      <SidebarContent>
        <div className="p-4 flex items-center justify-center border-b border-border/50">
          {open && (
            <h2 className="text-lg font-bold text-gradient">SEM'S</h2>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-lg"
                            : "hover:bg-accent text-foreground"
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5" />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
