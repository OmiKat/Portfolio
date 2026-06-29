import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ompraveer.10xdevs.in/"),
  title: {
    default: "Om Praveer Y Sharan — Backend Developer",
    template: "%s — Om Praveer Y Sharan",
  },
  description:
    "Om Praveer Sharan is a backend developer specialising in Java and Spring Boot — secure REST APIs, event-driven pipelines on Apache Kafka, and distributed systems with Redis and MongoDB.",
  keywords: [
    "Om Praveer Sharan",
    "Ompraveer Sharan",
    "backend developer",
    "backend development",
    "Java developer",
    "Spring Boot developer",
    "Apache Kafka",
    "Redis",
    "MongoDB",
    "REST API",
    "distributed systems",
    "Delhi backend developer",
    "India backend engineer",
    "portfolio",
  ],
  authors: [{ name: "Om Praveer Y Sharan" }],
  alternates: {
    canonical: "https://ompraveer.10xdevs.in/",
  },
  openGraph: {
    title: "Om Praveer Y Sharan",
    description:
      "Java / Spring Boot backend developer. REST APIs, Kafka event streaming, Redis and MongoDB.",
    type: "website",
    url: "https://ompraveer.10xdevs.in/",
    siteName: "Om Praveer Y Sharan",
  },
  twitter: {
    card: "summary",
    title: "Om Praveer Y Sharan",
    description:
      "Java / Spring Boot backend developer. REST APIs, Kafka event streaming, Redis and MongoDB.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
