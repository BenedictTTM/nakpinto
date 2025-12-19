import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#5C4033',
};

export const metadata: Metadata = {
  title: "Nakpinto - Premium Fashion & Luxury Goods",
  description: "Discover timeless elegance with our curated collection of premium fashion, luxury accessories, and artisan leather goods. Free worldwide shipping on orders over $200.",
  keywords: "luxury fashion, premium clothing, designer accessories, leather goods, high-end fashion",
  authors: [{ name: "Nakpinto" }],
  openGraph: {
    title: "Nakpinto - Premium Fashion & Luxury Goods",
    description: "Discover timeless elegance with our curated collection of premium fashion.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
