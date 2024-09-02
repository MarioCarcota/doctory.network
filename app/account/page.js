export const metadata = {
  title: "Account || Doctory.Network",
  description: "",
  openGraph: {
    title: "Account || Doctory.Network",
    description: "",
    url: "https://doctory-network.com/account",
    siteName: "doctory-network",
    images: [
      {
        url: "https://doctory-network.com/about-cover-image.jpg",
        width: 800,
        height: 600,
        alt: "Account Doctory Network",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Account || Doctory.Network",
    description: "",
    images: ["https://doctory-network.com/about-cover-image.jpg"],
  },
};

export default async function Account() {
  return (
    <main className="flex max-w-screen-2xl mx-auto min-h-screen flex-col items-center px-3 lg:px-6"></main>
  );
}
