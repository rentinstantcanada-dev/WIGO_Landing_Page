import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wigoride.in"),
  title: "WIGO — Where I Go | Your ride, your way",
  description:
    "WIGO is the vehicle-agnostic ride app. Bikes, scooters, autos, cars & vans — any place, any time, any ride, any comfort. Scan the QR and go.",
  keywords: ["WIGO", "ride sharing", "bike taxi", "auto", "cab", "India"],
  openGraph: {
    title: "WIGO — Where I Go",
    description: "Your ride, your way. Any place. Any time. Any ride. Any comfort.",
    url: "https://www.wigoride.in",
    siteName: "WIGO",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "WIGO — Where I Go",
    description: "Your ride, your way. Any place. Any time. Any ride. Any comfort.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f0392b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${caveat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
