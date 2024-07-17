import { Libre_Baskerville, League_Spartan } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import Nav from "@/components/Nav";

// Google Fonts Import
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "TRCKR",
  description: "Expense Tracker App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskerville.variable} ${leagueSpartan.variable} font-serif bg-gray`}
      >
        <Nav />
        {/* Redux Provider */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
