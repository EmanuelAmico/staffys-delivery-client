"use client";
import React from "react";
import "../styles/global.css";
import { SkeletonTheme } from "react-loading-skeleton";
import CheckRefreshProvider from "../context/refresh";

export const metadata = {
  title: "Staffys Delivery",
  description:
    "Easy to use web application that allows you to navigate quickly so you can monitor the operation of the delivery drivers, assign or reassign packages and intervene if necessary.",
  icons: {
    favicon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SkeletonTheme>
          <CheckRefreshProvider>{children}</CheckRefreshProvider>
        </SkeletonTheme>
      </body>
    </html>
  );
}
