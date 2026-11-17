import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import CustomCursor from "@/components/CustomCursor";
import Background from "@/components/Background";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import ScrollProgress from "@/components/ScrollProgress";

// Display / headings: characterful variable grotesque
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

// Body copy
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

// Editorial italic accent used inside headings
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["italic", "normal"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

// Small technical labels
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rohit Chauhan | Portfolio",
  description: "Rohit Chauhan — Full Stack Developer building fast, scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var theme = localStorage.getItem('theme');
                if (!theme) theme = 'dark';
                document.documentElement.classList.add(theme);
              } catch (e) {}
            })();
          `
        }} />
      </head>
      <body
        className={`${bricolage.variable} ${instrumentSans.variable} ${fraunces.variable} ${jetbrains.variable} antialiased subpixel-antialiased bg-background text-foreground selection:bg-primary selection:text-white transition-colors duration-300 ease-out`}
      >
        <Providers>
          <CustomCursor />
          <Background />
          <ScrollProgress />
          <Sidebar />
          <TopBar />
          <main className="md:ml-72 md:pt-20 relative z-10 flex flex-col min-h-screen">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
