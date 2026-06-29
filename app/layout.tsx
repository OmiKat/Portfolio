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
    default: "Om Praveer Y Sharan",
    template: "%s — Om Praveer Y Sharan",
  },
  description:
    "Backend developer working in Java and Spring Boot. Secure REST APIs, event-driven systems with Kafka, and distributed infrastructure with Redis and MongoDB.",
  authors: [{ name: "Om Praveer Y Sharan" }],
  openGraph: {
    title: "Om Praveer Y Sharan — Backend Developer",
    description:
      "Java / Spring Boot backend developer. REST APIs, Kafka event streaming, Redis and MongoDB.",
    type: "website",
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
