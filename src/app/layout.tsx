import type { Metadata } from "next";
import Image from "next/image";
import { svg } from "@/assets";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movie List",
  description: "Movie List",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="antialiased text-primary-foreground min-h-screen h-full">
        {children}
        {/* Footer texture */}
        <div className="absolute bottom-0 left-0 w-full">
          <Image src={svg.bgTexture} alt="Background texture" className="hidden md:block w-full h-auto object-cover" priority />
          <Image
            src={svg.bgTextureMobile}
            alt="Background texture"
            className="block md:hidden w-full h-auto object-cover"
            priority
          />
        </div>
      </body>
    </html>
  );
}
