import type { Metadata } from "next";
import { Outfit, DM_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kunal Gupta — CS Student & Developer | Backend · Full-Stack · Security",
  description:
    "Kunal Gupta — Computer Science student building backend systems, full-stack web apps, and security-focused software. Interested in backend engineering, DSA, and application security.",
  keywords: [
    "Kunal Gupta",
    "Computer Science Student",
    "Backend Developer",
    "Full Stack Developer",
    "Application Security",
    "React",
    "Next.js",
    "Java",
    "Python",
    "DSA",
    "HazardWatch",
    "Tasky",
    "Software Engineering Internship",
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
    title: "Kunal Gupta — CS Student & Developer",
    description:
      "Computer Science student building backend systems, full-stack apps, and security-focused software. Looking for internships in backend and full-stack engineering.",
    siteName: "Kunal Gupta",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kunal Gupta — CS Student & Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kunal Gupta — CS Student & Developer",
    description:
      "Computer Science student building backend systems, full-stack apps, and security-focused software.",
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
    <html lang="en" className={`scroll-smooth ${outfit.variable} ${dmMono.variable}`}>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
