// app/layout.js

import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/authContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
