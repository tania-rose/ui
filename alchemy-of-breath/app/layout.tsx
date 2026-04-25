import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alchemy of Breath — Transmutation Through Conscious Breathing",
  description:
    "An immersive practice of breath as alchemy: ancient wisdom and modern science woven into journeys that transform body, mind, and spirit.",
};

export const viewport: Viewport = {
  themeColor: "#07060f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="aurora grain">{children}</body>
    </html>
  );
}
