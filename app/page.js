import LoginPage from "@/components/login/loginComponent";

export const metadata = {
  title: "Welcome to Doctory.Network",
  description: "",
  openGraph: {
    title: "Welcome to Doctory.Network",
    description: "",
    url: "https://doctory-network.com/",
    siteName: "doctory-network",
    images: [
      {
        url: "https://doctory-network.com/about-cover-image.jpg",
        width: 800,
        height: 600,
        alt: "Welcome Doctory Network",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to Doctory.Network",
    description: "",
    images: ["https://doctory-network.com/about-cover-image.jpg"],
  },
};

export default async function Home() {
  return (
    <main className="flex max-w-screen-2xl mx-auto min-h-screen flex-col items-center px-3 lg:px-6">
      <LoginPage />
    </main>
  );
}
