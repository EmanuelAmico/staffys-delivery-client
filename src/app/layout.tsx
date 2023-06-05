"use client";
import React from "react";
import "../styles/global.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import { SkeletonTheme } from "react-loading-skeleton";
import CheckRefreshProvider from "../context/refresh";

const metadata = {
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
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <SkeletonTheme>
        <Provider store={store}>
          <CheckRefreshProvider>
            <body>{children}</body>
          </CheckRefreshProvider>
        </Provider>
      </SkeletonTheme>
    </html>
  );
}
