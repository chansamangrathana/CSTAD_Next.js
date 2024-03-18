
import { use } from "react";
import "./globals.css";
import NavbarComponent from "@/component/NavbarComponent"
import FooterComponent from "@/component/FooterComponent"



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <header>
           <NavbarComponent />
           </header>
           
       
        {children}
      </body>
      <footer className="h-screen flex flex-col">
            <FooterComponent/>
           </footer>
    </html>
  );
}
