import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "@/components/Header";
import RootLayout from "@/app/layout";

test.skip("Simple header test", async () => {
  render(
    <RootLayout>
      <Header />
    </RootLayout>
  );

  // ACT
  const span = screen.getByText("DELIVERY");

  // ASSERT
  expect(span).toBeInTheDocument();
});
