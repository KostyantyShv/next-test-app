import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import "./globals.css";
import { ThemeContextProvider } from "@/providers/ThemeContextProvider";
import { Layout } from "@/components/Layout/Layout";
import { EventsContextProvider } from "@/providers/EventsContextProvider";
import { ErrorContextProvider } from "@/providers/ErrorContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ErrorContextProvider>
            <EventsContextProvider>
              <Layout>{children}</Layout>
            </EventsContextProvider>
          </ErrorContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}