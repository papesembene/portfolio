import { useState } from "react";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { CustomCursor } from "./CustomCursor";
import { SnowEffect } from "./SnowEffect";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Home, User, Code, Briefcase, Mail } from "lucide-react";

const menuItems = [
  { title: "Accueil", url: "/", icon: Home },
  { title: "À propos", url: "/about", icon: User },
  { title: "Compétences", url: "/skills", icon: Code },
  { title: "Projets", url: "/projects", icon: Briefcase },
  { title: "Contact", url: "/contact", icon: Mail },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarProvider defaultOpen>
      <CustomCursor />
      <SnowEffect />
      <div className="min-h-screen flex w-full">
        {!isMobile && <AppSidebar />}
        <main className="flex-1 relative">
          <div className="sticky top-0 z-40 h-16 border-b border-border/50 glass-effect bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 flex items-center px-4">
            {isMobile ? (
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64">
                  <div className="p-4 flex items-center justify-center border-b border-border/50">
                    <h2 className="text-lg font-bold text-gradient">SEM'S</h2>
                  </div>
                  <nav className="mt-4">
                    {menuItems.map((item) => (
                      <NavLink
                        key={item.title}
                        to={item.url}
                        end
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-3 py-2 rounded-lg transition-all mb-2 ${
                            isActive
                              ? "bg-primary text-primary-foreground shadow-lg"
                              : "hover:bg-accent text-foreground"
                          }`
                        }
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.title}</span>
                      </NavLink>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            ) : (
              <SidebarTrigger />
            )}
          </div>
          <div className="relative z-10">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
};
