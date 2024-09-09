import Notifications from "@/components/dashboard/notifications";
import { MobileMenu } from "@/components/layout/mobileMenu";
import ProfDashboard from "@/components/pages/professionals";
import RenderProfessionals from "@/components/pages/renderProfessionals";
import { FadeAn } from "@/components/transitions/FadeTransition";

export const metadata = {
  title: "Professionals || Doctory.Network",
  description: "",
  openGraph: {
    title: "Professionals || Doctory.Network",
    description: "",
    url: "https://doctory-network.com/professionals",
    siteName: "doctory-network",
    images: [
      {
        url: "https://doctory-network.com/about-cover-image.jpg",
        width: 800,
        height: 600,
        alt: "Professionals Doctory Network",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professionals || Doctory.Network",
    description: "",
    images: ["https://doctory-network.com/about-cover-image.jpg"],
  },
};
export default async function Professionals() {
  return (
    <main className="flex max-w-screen-2xl mx-auto min-h-screen flex-col items-center px-3 lg:px-6">
      <FadeAn className={"w-full"}>
        <div className="flex justify-between items-center w-full mt-8">
          <h2 className="text-3xl md:text-7xl font-bold tracking-tight">
            Professionals
          </h2>
          <div className="flex flex-row flex-nowrap gap-3">
            <Notifications />
            <div className="md:hidden block">
              <MobileMenu />
            </div>
          </div>
        </div>

        <RenderProfessionals />
      </FadeAn>
    </main>
  );
}
