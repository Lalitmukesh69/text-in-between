import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "../components/providers/ConvexClientProvider";
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans-font",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - Text In Between",
    absolute: "Text In Between",
  },
  description:
    "Auto insert text behind your image.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <Analytics />
      <html lang="en">
        <body
          className={`${plusJakartaSans.variable} ${geistMono.variable} antialiased`}
        >
          <Script
          src="https://getfeedback-widget.vercel.app/widget.umd.js"
          strategy="afterInteractive"
        />
         <my-widget project-id="9"></my-widget>
          <ConvexClientProvider>
            {children}
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
