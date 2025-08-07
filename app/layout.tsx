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

// SEO Metadata for SyncSpace
export const metadata: Metadata = {
  title: {
    default: "SyncSpace — Collaborate Smarter",
    template: "%s | SyncSpace",
  },
  description:
    "SyncSpace is a modern document collaboration platform powered by AI. Work with your team in real-time, translate effortlessly, and get instant insights from your content.",
  metadataBase: new URL("https://syncspace.app"), // ← Replace with your actual domain
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "SyncSpace — Real-Time Collaborative Workspace",
    description:
      "Experience AI-powered collaboration, seamless translation, and powerful document editing — all in one place.",
    url: "https://syncspace.app",
    siteName: "SyncSpace",
    images: [
      {
        url: "/opengraph-image.png", // ← Replace with actual image
        width: 1200,
        height: 630,
        alt: "SyncSpace Open Graph Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SyncSpace — Collaborate Smarter",
    description:
      "Real-time editing. AI assistance. Seamless translation. SyncSpace redefines how teams create together.",
    images: ["/opengraph-image.png"], // ← Replace with actual image
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
