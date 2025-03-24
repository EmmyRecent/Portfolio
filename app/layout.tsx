import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./app.css";

const poppinsFont = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chukwuemeka Eziagulu",
  description: "Chukwuemeka's Portfoio Website",
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
