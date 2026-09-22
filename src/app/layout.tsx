import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yuri Claro — Senior Software Engineer",
  description:
    "Senior Software Engineer with 8+ years in MEAN stack, GenAI/Agentic AI and enterprise Identity/Security, Healthcare and Data Governance platforms. Expertise in Node.js, Express, MongoDB, Angular, TypeScript, Python and cloud deployments.",
  openGraph: {
    title: "Yuri Claro — Senior Software Engineer",
    description:
      "Senior Software Engineer with 8+ years in MEAN stack, GenAI/Agentic AI and enterprise Identity/Security, Healthcare and Data Governance platforms.",
    siteName: "Yuri Claro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuri Claro — Senior Software Engineer",
    description:
      "Senior Software Engineer with 8+ years in MEAN stack, GenAI/Agentic AI and enterprise Identity/Security, Healthcare and Data Governance platforms.",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-family='monospace' font-weight='bold' fill='%23000000'>&lt;/&gt;</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div id="top" />
          <Nav />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}