import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Marvin Joseph Cajilo",
  description: "A portfolio made with NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='font-mono'>
        {children}
      </body>
    </html>
  );
}
