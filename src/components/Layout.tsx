import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { CustomCursor } from "./CustomCursor";
import { SnowEffect } from "./SnowEffect";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider defaultOpen>
      <CustomCursor />
      <SnowEffect />
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 relative">
          <div className="sticky top-0 z-40 h-16 border-b border-border/50 glass-effect bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 flex items-center px-4">
            <SidebarTrigger />
          </div>
          <div className="relative z-10">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
};
