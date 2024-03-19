
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
        
           <NavbarComponent />
           
       
        {children}
      </body>
      <footer >
            <FooterComponent/>
           </footer>
    </html>
  );
}
