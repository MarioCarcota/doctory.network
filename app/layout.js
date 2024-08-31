import "/styles/global.css";

export const metadata = {
  title: "Doctory.network!",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
