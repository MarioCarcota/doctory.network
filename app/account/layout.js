import NavBar from "@/components/layout/navbar";
import "/styles/global.css";
import { ThemeProvider } from "@/components/utilities/ThemeProvider";
import { Toaster } from "sonner";
import { SidebarNav } from "@/components/account/components/sideBar";
import { MobileMenu } from "@/components/layout/mobileMenu";
import { FadeAn } from "@/components/transitions/FadeTransition";
import { Separator } from "@/components/ui/Separator";

const sidebarNavItems = [
  {
    title: "Account",
    href: "/account",
  },
  {
    title: "Charge",
    href: "/account/charge",
  },
  {
    title: "Notifications",
    href: "/account/notifications",
  },
];

export default function RootLayout({ children }) {
  return (
    <main className="flex max-w-screen-2xl mx-auto min-h-screen flex-col items-center px-3 lg:px-6">
      <FadeAn className={"w-full"}>
        <div className="space-y-6 m-4">
          <div className="flex justify-between items-center gap-4 w-full mt-8">
            <h2 className="text-3xl md:text-7xl font-bold tracking-tight">
              Settings
            </h2>

            <div className="md:hidden block">
              <MobileMenu />
            </div>
          </div>

          <Separator className="my-6" />
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <aside className="-mx-4 lg:w-1/5">
              <SidebarNav items={sidebarNavItems} />
            </aside>
            <div className="flex-1">
              <div className="space-y-6">{children}</div>
            </div>
          </div>
        </div>
      </FadeAn>
    </main>
  );
}
