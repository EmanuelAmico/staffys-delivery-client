"use client";
import React from "react";
import { Inter } from "next/font/google";
import "../styles/global.css";
import { SkeletonTheme } from "react-loading-skeleton";
import CheckRefreshProvider from "../context/refresh";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Staffys Delivery",
  description:
    "Easy to use web application that allows you to navigate quickly so you can monitor the operation of the delivery drivers, assign or reassign packages and intervene if necessary.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SkeletonTheme>
          <CheckRefreshProvider>{children}</CheckRefreshProvider>
        </SkeletonTheme>
      </body>
    </html>
  );
}
