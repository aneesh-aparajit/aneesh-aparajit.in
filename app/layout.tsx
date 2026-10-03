import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible_Next, Atkinson_Hyperlegible_Mono, Barlow_Condensed } from "next/font/google";
import { TitleBlock } from "@/components/title-block";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible_Next({
  variable: "--font-atkinson",
  subsets: ["latin"],
});

const atkinsonMono = Atkinson_Hyperlegible_Mono({
  variable: "--font-atkinson-mono",
  subsets: ["latin"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  title: {
    default: `${site.name}, backend engineer`,
    template: `%s · ${site.name}`,
  },
  description: site.statement,
  authors: [{ name: site.name }],
  openGraph: {
    title: site.name,
    description: site.statement,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eaf0df" },
    { media: "(prefers-color-scheme: dark)", color: "#121810" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${atkinson.variable} ${atkinsonMono.variable} ${barlow.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <div className="col">
          <TitleBlock />
          <main id="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
