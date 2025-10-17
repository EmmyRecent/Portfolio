import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./app.css";

const poppinsFont = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const baseUrl = "https://chukwuemekae.com/";

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
    "React Native freelance developer",
    "Next.js portfolio site",
    "hire full-stack web developer",
  ],
  authors: [{ name: "Chukwuemeka Eziagulu", url: `${baseUrl}` }],
  creator: "Chukwuemeka Eziagulu",
  publisher: "Chukwuemeka Eziagulu",
  metadataBase: new URL(`${baseUrl}`),
  openGraph: {
    title: "Chukwuemeka Eziagulu | Full-Stack Developer",
    description:
      "Building high-performance, responsive websites and web apps with modern tools like React, React Native, Next.js, and Node.js.",
    url: `${baseUrl}`,
    siteName: "Chukwuemeka Eziagulu's Portfolio",
    images: [
      {
        url: `${baseUrl}og-image.png`,
        width: 1200,
        height: 630,
        alt: "Chukwuemeka Eziagulu's Portfolio Preview",
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
    images: [`${baseUrl}og-image.png`],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  themeColor: "#1b1a26",
  alternates: {
    canonical: `${baseUrl}`,
  },
  robots: "index, follow",
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

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Chukwuemeka Eziagulu",
              url: baseUrl,
              image: `${baseUrl}profile.jpeg`,
              jobTitle: "Full-Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              sameAs: [
                "https://github.com/EmmyRecent",
                "https://www.linkedin.com/in/chukwuemeka-eziagulu-61820825b/",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "BTEC Level 3 Computing",
              },
              description:
                "Explore the portfolio of Chukwuemeka Eziagulu, a full-stack developer crafting modern web and mobile apps using React, React Native, Next.js, Node.js, and more.",
              knowsAbout: [
                "React",
                "React Native",
                "Next.js",
                "Node.js",
                "JavaScript",
                "TypeScript",
                "Web Development",
                "Mobile App Development",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "UK",
              },
            }),
          }}
        />
      </head>

      <body className={`${poppinsFont.className} bg-primaryColor antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
