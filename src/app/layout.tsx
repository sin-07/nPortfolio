import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aniket Singh | Software Engineer @ TCS • Full Stack Developer",
  description:
    "Portfolio of Aniket Singh — Software Engineer at Tata Consultancy Services (TCS) & B.Tech CSE Graduate. Turning ideas into real enterprise products, scalable cloud backends, and modern full-stack solutions.",
  icons: {
    icon: "/images/bytebloom-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Pixelify+Sans:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Silkscreen:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-[#f8b4a6] selection:text-zinc-900">
        {children}
      </body>
    </html>
  );
}
