import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mirlind Leku — Full-Stack Developer",
  description:
    "Mirlind Leku — Full-stack developer building scalable apps with Next.js, Node.js, Django and .NET. Portfolio includes marketplaces, real-time systems and payment integrations.",
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "Node.js Developer",
    ".NET Developer",
    "Django Developer",
    "React Developer",
    "TypeScript",
    "Web Development",
    "Mirlind Leku",
  ],
  authors: [{ name: "Mirlind Leku" }],
  creator: "Mirlind Leku",
  publisher: "Mirlind Leku",
  metadataBase: new URL("https://mirlindleku.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mirlindleku.com",
    title: "Mirlind Leku — Full-Stack Developer",
    description:
      "Mirlind Leku — Full-stack developer building scalable apps with Next.js, Node.js, Django and .NET. Portfolio includes marketplaces, real-time systems and payment integrations.",
    siteName: "Mirlind Leku Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mirlind Leku - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirlind Leku | Full Stack Developer",
    description:
      "Full-stack developer building modern applications using Next.js, Node.js, .NET, Django, MySQL and MongoDB.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
