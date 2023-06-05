import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Card from "@/commons/Card";

test("When a children is sent to Card, all jsx is preserved", async () => {
  const user = userEvent.setup();

  render(
    <Card title="This is a title">
      <p>This is a paragraph</p>
      <button>Example button</button>
    </Card>
  );

  // ACT
  const h4 = screen.getByText("This is a paragraph");
  const button = screen.getByRole("button");
  await user.click(button);

  // ASSERT
  expect(h4).toBeInTheDocument();
  expect(h4).toHaveTextContent("This is a paragraph");
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("Example button");
  expect(button).not.toBeDisabled();
  expect(button).toHaveFocus();
});
