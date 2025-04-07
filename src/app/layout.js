import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--default-font-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: "Crypto App",
  description: "Trusted platform for crypto investments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
