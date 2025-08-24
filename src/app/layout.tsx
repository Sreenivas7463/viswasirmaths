import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sri Vishwa Academy",
  description: "Viswanath Sir, a renowned shortcut expert and faculty with years of experience, makes complex problems easy to solve with time-saving techniques and clear explanations.",
  openGraph: {
    title: "Sri Vishwa Academy",
    description: "Viswanath Sir, a renowned shortcut expert and faculty with years of experience, makes complex problems easy to solve with time-saving techniques and clear explanations.",
    images: [
      {
        url: "https://yt3.googleusercontent.com/5IkuAlJuB0fI4MRJTARZioOlX2zMOnb_wT6RfqA9u4aBdvrxogqknc5KEmpiOpLMBdcpBkfCOQ=s630-c-k-c0x00ffffff-no-rj",
        width: 630,
        height: 630,
        alt: "Sri Vishwa Academy Social Card Image",
      },
    ],
    url: "https://www.yourwebsite.com", // IMPORTANT: Replace with your actual website URL
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Vishwa Academy",
    description: "Viswanath Sir, a renowned shortcut expert and faculty with years of experience, makes complex problems easy to solve with time-saving techniques and clear explanations.",
    images: [
      "https://yt3.googleusercontent.com/5IkuAlJuB0fI4MRJTARZioOlX2zMOnb_wT6RfqA9u4aBdvrxogqknc5KEmpiOpLMBdcpBkfCOQ=s1200-c-k-c0x00ffffff-no-rj",
    ],
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
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const savedTheme = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              let themeToApply = 'light';

              if (savedTheme) {
                themeToApply = savedTheme;
              } else if (prefersDark) {
                themeToApply = 'dark';
              }

              if (themeToApply === 'dark') {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            })();
          `,
        }} />
        <link rel="icon" href="/favicon.webp" type="image/webp" sizes="64x64" />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
