export const metadata = {
  title: "Dashboard || Doctory.Network",
  description: "",
  openGraph: {
    title: "Dashboard || Doctory.Network",
    description: "",
    url: "https://doctory-network.com/dashboard",
    siteName: "doctory-network",
    images: [
      {
        url: "https://doctory-network.com/about-cover-image.jpg",
        width: 800,
        height: 600,
        alt: "Dashboard Doctory Network",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboard || Doctory.Network",
    description: "",
    images: ["https://doctory-network.com/about-cover-image.jpg"],
  },
};

export default async function DashBoard() {
  return (
    <main className="flex max-w-screen-2xl mx-auto min-h-screen flex-col items-center px-3 lg:px-6"></main>
  );
}
