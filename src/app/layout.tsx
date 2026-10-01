import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aniket Singh | Software Engineer & Full-Stack Developer",
  description:
    "Software Engineer portfolio of Aniket Singh. Hands-on experience in Java, Python, and MERN stack development with strong understanding of OOPs, System Design, RESTful APIs, and database optimization.",
  authors: [{ name: "Aniket Singh" }],
  creator: "Aniket Singh",
  keywords: [
    "Aniket Singh",
    "Software Engineer",
    "Full Stack Developer",
    "MERN Stack",
    "Java",
    "Python",
    "React.js",
    "Node.js",
    "MongoDB",
    "System Design",
    "RESTful APIs",
  ],
  openGraph: {
    title: "Aniket Singh | Software Engineer & Full-Stack Developer",
    description:
      "Software Engineer portfolio showcasing MERN stack development, high-performance backend systems, and interactive UI applications.",
    url: "https://github.com/sin-07",
    siteName: "Aniket Singh Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aniket Singh | Software Engineer",
    description:
      "Software Engineer portfolio showcasing Java, Python, and MERN stack systems.",
    creator: "@aniketsingh",
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
        <meta name="theme-color" content="#0a0a0c" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600;1,700;1,800&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0E0E0D] text-[#F4F3EF] selection:bg-[#F4F3EF] selection:text-black antialiased overflow-x-hidden">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
