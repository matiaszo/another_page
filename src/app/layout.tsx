import { Roboto } from "next/font/google"
import { Menu } from "@/components/menu"
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "400", "900"],
  style:"italic",
  variable: "--roboto",
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased min-h-screen flex flex-col justify-between`}
      >
        <Menu/>
        <main className="flex flex-wrap min-h-[100vh]">{children}</main>
      </body>
    </html>
  );
}
