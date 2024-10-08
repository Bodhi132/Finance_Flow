import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { MenuProvider } from "./Context/MenuContext";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <body className='min-h-screen min-w-screen bg-[#010725] overflow-x-hidden'>
        <MenuProvider>
          <Header />
        {children}
        </MenuProvider>
        <Footer />
      </body>
    </html>
  );
}
