import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import { siteUrl } from "@/lib/site";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pedro Melo — Software Engineer & Tech Lead",
    template: "%s",
  },
  authors: [{ name: "Pedro Henrique Braga Melo" }],
  openGraph: { type: "website", locale: "pt_BR" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (

    <html
      lang="pt-BR"
      data-theme="dark"
      data-scroll-behavior="smooth"
      className={`${roboto.variable} ${robotoMono.variable}`}
    >
      <body className="m-0">
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
