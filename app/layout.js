import NavBar from "@/components/layout/navbar";
import "/styles/global.css";
import { ThemeProvider } from "@/components/utilities/ThemeProvider";

export const metadata = {
  title: "Doctory.network",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/images/loginImage.jpg"></link>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
