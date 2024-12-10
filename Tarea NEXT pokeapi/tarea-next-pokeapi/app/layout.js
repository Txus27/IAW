import localFont from "next/font/local";
import "./globals.css";
import  "bootstrap/dist/css/bootstrap.min.css"
import AddBootstrap from "./AddBoostrap";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Detalle del POKEMON", // Añado "Detalle del POKEMON"
  description: "Detalle del POKEMON",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <AddBootstrap/> 
      {children}
      </body>
    </html>
  );
}


