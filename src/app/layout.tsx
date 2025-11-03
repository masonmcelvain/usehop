import type { ReactNode } from "react";
import { Footer, Header } from "@/components/layout";
import "./globals.css";

export const metadata = {
   title: "Hop",
};

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <html lang="en">
         <body>
            <div className="mx-auto flex min-h-screen w-full max-w-[70rem] flex-col justify-start px-4 md:px-6 lg:px-8">
               <Header />
               {children}
               <Footer />
            </div>
         </body>
      </html>
   );
}
