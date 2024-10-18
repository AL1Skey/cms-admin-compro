import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./theme.css"
import { ThemeProvider } from "@/providers/theme-provider";
import MountedProvider from "@/providers/mounted.provider";
import { Toaster } from '@/components/ui/toaster'
import { Toaster as SonnerToaster } from "@/components/ui/sonner"
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

// language 
Link
export const metadata: Metadata = {
  title: "Ikatan Alumni Aman Jaya",
  description: "Ikatan Alumni Aman Jaya",
};

export default async function RootLayout({
  children,
 
}: Readonly<{
  children: React.ReactNode;
  
}>) {


  return (
    <html >
      <body className={`${inter.className} dashcode-app`}>

            <ThemeProvider attribute="class"

              defaultTheme="dark">


               
                  {children}
            

         
              <Toaster />
              <SonnerToaster />
            </ThemeProvider>
      </body>
    </html>
  );
}
