import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Air Quality Monitor",
  description: "Real-time AQI dashboard and alert system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {children}
        <Toaster position="top-right" reverseOrder={false} />
        {/* <Toaster position="top-right" /> */}
      </body>
    </html>
  );
}
