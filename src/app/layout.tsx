import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import ConvexClientProvider from "@/shared/providers/convex-client-provider";
import JotaiProvider from "@/shared/providers/jotai-provider";
import { ThemeProvider } from "@/shared/providers/theme-provider";
import Header from "@/components/shared/header/header";
import Footer from "@/components/shared/footer/footer";
import { siteConfig } from "@/shared/config/site-config";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: [
    {
      url: "/bocchi_right.ico",
      href: "/bocchi_right.ico",
    },
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JotaiProvider>
          <ThemeProvider>
            <ConvexClientProvider>
              <div
                className={cn(
                  "relative min-h-screen bg-background font-sans antialiased",
                  fontSans.variable,
                )}
              >
                <div className="pb-36">
                  <Header />
                  <div className="container mb-36 pt-6">{children}</div>
                </div>
                <Footer />
              </div>
            </ConvexClientProvider>
          </ThemeProvider>
        </JotaiProvider>
      </body>
    </html>
  );
}
