import { NotificationsForm } from "@/components/account/components/NotificationsForm";

export const metadata = {
  title: "Notifications || Doctory.Network",
  description: "",
  openGraph: {
    title: "Notifications || Doctory.Network",
    description: "",
    url: "https://doctory-network.com/account/charge",
    siteName: "doctory-network",
    images: [
      {
        url: "https://doctory-network.com/about-cover-image.jpg",
        width: 800,
        height: 600,
        alt: "Notifications Doctory Network",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Notifications || Doctory.Network",
    description: "",
    images: ["https://doctory-network.com/about-cover-image.jpg"],
  },
};

export default async function Notifications() {
  return <NotificationsForm />;
}
