import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

// Font definitions
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

// Metadata for SEO
export const metadata: Metadata = {
  title: {
    default: "DocuChat — Chat with your Docs",
    template: "%s | DocuChat",
  },
  description:
    "DocuChat is an intelligent document chat assistant. Upload your documents and get instant answers from them. Powered by AI.",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://docuchat.khatrisujan.com.np"),
  openGraph: {
    title: "DocuChat",
    description:
      "Upload your documents and ask anything about them — AI-powered answers from your own files.",
    url: "https://docuchat.khatrisujan.com.np",
    siteName: "DocuChat",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "DocuChat Open Graph Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DocuChat",
    description:
      "Upload your docs and get instant answers — your personal AI document assistant.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        dir="ltr"
        className={`${geistSans.variable} ${geistMono.variable} ${bricolageGrotesque.variable}`}
        suppressHydrationWarning
      >
        <body className="antialiased bg-white text-gray-900">
          <Toaster />
          <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
