
import "./globals.css";
import Navbar from "./COMPONENTS/NAVBAR/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from './COMPONENTS/bootstralient'

import {UserContextProvider} from "./context/userContext"
import Footer from "./COMPONENTS/Footer/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
 

  return (
    <html lang="en" >
      <body >
        <UserContextProvider>
          <Navbar />
          <main>
            {children}
      <BootstrapClient/>
          </main>
          <Footer/>
        </UserContextProvider>
      </body>
    </html>
  );
}
