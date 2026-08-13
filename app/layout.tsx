import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kunal Gupta — Software Engineer | Backend & Full-Stack",
  description:
    "Portfolio of Kunal Gupta — Computer Science engineering student focused on backend development, full-stack web applications, application security, and problem solving.",
  keywords: [
    "Kunal Gupta",
    "Software Engineer",
    "Backend Developer",
    "Full Stack Developer",
    "Cybersecurity",
    "Computer Science",
    "React",
    "Next.js",
    "Java",
    "Python",
    "DSA",
  ],
  authors: [{ name: "Kunal Gupta" }],
  creator: "Kunal Gupta",
  metadataBase: new URL("https://kunal01.vercel.app"),
  alternates: {
    canonical: "https://kunal01.vercel.app",
  },
  openGraph: {
    type: "website",
    url: "https://kunal01.vercel.app",
    title: "Kunal Gupta — Software Engineer | Backend & Full-Stack",
    description:
      "Computer Science engineering student building secure, scalable web applications. Focused on backend systems, full-stack development, and application security.",
    siteName: "Kunal Gupta Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kunal Gupta — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kunal Gupta — Software Engineer | Backend & Full-Stack",
    description:
      "Computer Science engineering student building secure, scalable web applications. Focused on backend systems, full-stack development, and application security.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable}`}>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
