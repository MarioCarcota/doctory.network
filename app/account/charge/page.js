import PaymentFormTokens from "@/components/account/components/ChargeForm";

export const metadata = {
  title: "Charge Tokens || Doctory.Network",
  description: "",
  openGraph: {
    title: "Charge Tokens || Doctory.Network",
    description: "",
    url: "https://doctory-network.com/account/charge",
    siteName: "doctory-network",
    images: [
      {
        url: "https://doctory-network.com/about-cover-image.jpg",
        width: 800,
        height: 600,
        alt: "Charge Tokens Doctory Network",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charge Tokens || Doctory.Network",
    description: "",
    images: ["https://doctory-network.com/about-cover-image.jpg"],
  },
};

export default async function ChargeTokens() {
  return <PaymentFormTokens />;
}
