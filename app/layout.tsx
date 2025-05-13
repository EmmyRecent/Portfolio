import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./app.css";

const poppinsFont = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chukwuemeka Eziagulu | Full-Stack Developer",
  description:
    "Explore the portfolio of Chukwuemeka Eziagulu, a full-stack developer crafting modern web and mobile applications using React, React Native, Next.js, Node.js, and more.",
  keywords: [
    "Chukwuemeka Eziagulu",
    "Emmy Developer",
    "Full-Stack Developer",
    "Web Developer Portfolio",
    "Mobile Developer Portfolio",
    "Next.js Portfolio",
    "React Developer",
    "React Native Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Typescript Developer",
    "Freelance Web Developer",
  ],
  authors: [{ name: "Chukwuemeka Eziagulu", url: "http://localhost:3000/" }],
  creator: "Chukwuemeka Eziagulu",
  publisher: "Chukwuemeka Eziagulu",
  metadataBase: new URL("http://localhost:3000/"),
  openGraph: {
    title: "Chukwuemeka Eziagulu | Full-Stack Developer",
    description:
      "Building high-performance, responsive websites and web apps with modern tools like React, React Native, Next.js, and Node.js.",
    url: "http://localhost:3000/",
    siteName: "Chukwuemeka Eziagulu Portfolio",
    images: [
      {
        url: "http://localhost:3000/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chukwuemeka Eziagulu Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chukwuemeka Eziagulu | Full-Stack Developer",
    description:
      "Discover Emmy’s work on modern web apps built with React, React Native, Next.js, and more.",
    creator: "@code__emmy",
    images: ["http://localhost:3000/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#1b1a26",
  alternates: {
    canonical: "http://localhost:3000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        />
      </head>

      <body className={`${poppinsFont.className} bg-primaryColor antialiased`}>
        {children}
      </body>
    </html>
  );
}
