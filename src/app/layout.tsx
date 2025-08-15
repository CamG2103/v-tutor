// src/app/layout.tsx
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "../components/navbar"; // Make sure file is actually Navbar.tsx
import Footer from "../components/footer"; // Make sure file is actually Footer.tsx

// Load Poppins font
const popping = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-popping",
});

export const metadata = {
  title: "V-Tutor",
  description: "Interactive AI-powered learning platform",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={popping.variable}>
      <body className="font-sans antialiased bg-white text-black">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


