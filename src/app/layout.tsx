import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Laundry Free",
  description: "Laundry Free Admin Panel",
  icons: {
    icon: [
      { url: "/assets/favicon_io/favicon.ico", sizes: "any" },
      {
        url: "/assets/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/assets/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/assets/favicon_io/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/assets/favicon_io/site.webmanifest",
  openGraph: {
    title: "Laundry Free",
    description: "Laundry Free Admin Panel",
    images: [
      {
        url: "/assets/lfFavicon.svg",
        width: 1200,
        height: 630,
        alt: "Laundry Free Admin Panel",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laundry Free",
    description: "Laundry Free Admin Panel",
    images: ["/assets/lfFavicon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="antialiased">
        <Toaster position="bottom-center" toastOptions={{ duration: 5000 }} />
        {children}
      </body>
    </html>
  );
}
