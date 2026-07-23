import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";
import FaqEnhancer from "@/components/FaqEnhancer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CallbackPopup from "@/components/CallbackPopup";

export const metadata: Metadata = {
  metadataBase: new URL("https://drharishgowda.in"),
  title: {
    default: "Dr. Harish Gowda | Laparoscopic & GI Surgeon, Basavanagudi",
    template: "%s",
  },
  description:
    "Dr. Harish Gowda treats piles, hernia, gallbladder and more with minimally invasive laparoscopic and laser surgery at HIMAS Hospital, Basavanagudi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,500;1,9..144,600&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col bg-stone-50 font-sans text-[15px] text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileBar />
        <WhatsAppFloat />
        <CallbackPopup />
        <FaqEnhancer />
      </body>
    </html>
  );
}
