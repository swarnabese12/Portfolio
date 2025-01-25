import "./globals.css";
import React from "react";
import { ToastContainer } from "react-toastify";

import UserContextProvider from "@/context/UserDetailsContextProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body>
          <UserContextProvider>
            <div className="relative bg-gray-900 flex flex-col">
              <ToastContainer />
              <main className="container mx-auto max-w-5xl flex-grow lg:p-10 p-5">
                {children}
              </main>
              <div>
              </div>
            </div>
          </UserContextProvider>
      </body>
    </html>
  );
}
