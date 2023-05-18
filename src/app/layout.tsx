import "./globals.css";

export const metadata = {
   title: "Hop",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en" className="h-full w-full">
         <body className="h-full w-full">
            <div className="flex h-screen flex-col">{children}</div>
         </body>
      </html>
   );
}
