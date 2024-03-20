
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
      <body className="bg-gray-200 flex flex-col justify-between w-full h-auto min-h-screen min-w-[300px]">
           <NavbarComponent />
        {children}
        <footer className="bg-blue-800" >
            <FooterComponent/>
           </footer>
      </body>
      
    </html>
  );
}
