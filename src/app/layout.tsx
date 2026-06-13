import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "../components/providers/ConvexClientProvider";
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";
import { Toaster } from "sonner";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans-font",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://text-in-between.vercel.app"),
  title: {
    template: "%s - Text In Between",
    default: "Text In Between - Auto Insert Text Behind Your Images",
  },
  description: "Create POV-style YouTube thumbnails and dynamic social media graphic overlays by placing customizable text layers behind the subject in your images.",
  keywords: ["thumbnail generator", "background removal", "image text overlay", "POV thumbnail", "wasm background removal", "Next.js image processing"],
  authors: [{ name: "Lalitmukesh69" }],
  openGraph: {
    title: "Text In Between - Auto Insert Text Behind Your Images",
    description: "Create POV-style YouTube thumbnails and dynamic social media graphic overlays by placing customizable text layers behind the subject in your images.",
    url: "https://github.com/Lalitmukesh69/text-in-between",
    siteName: "Text In Between",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Text In Between - Auto Insert Text Behind Your Images",
    description: "Create POV-style YouTube thumbnails and dynamic social media graphic overlays by placing customizable text layers behind the subject in your images.",
  },
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
            <Toaster position="bottom-right" richColors />
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
