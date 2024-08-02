import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from ".";

test("renders ToDoList component", () => {
  render(<App />);
  const titleElement = screen.getByText(/todo list/i);
  expect(titleElement).toBeInTheDocument();
});

test("allows adding items to the ToDoList", () => {
  render(<App />);

  const inputElement = screen.getByRole("textbox");
  const buttonElement = screen.getByRole("button", { name: /add/i });

  fireEvent.change(inputElement, { target: { value: "Learn React" } });
  fireEvent.click(buttonElement);

  const listItemElement = screen.getByText("Learn React");
  expect(listItemElement).toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: "Learn Testing" } });
  fireEvent.click(buttonElement);

  const secondListItemElement = screen.getByText("Learn Testing");
  expect(secondListItemElement).toBeInTheDocument();
});
