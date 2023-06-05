import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "@/components/Header";

test("Simple header test", async () => {
  render(<Header />);

  // ACT
  const span = screen.getByText("DELIVERY");

  // ASSERT
  expect(span).toBeInTheDocument();
});
