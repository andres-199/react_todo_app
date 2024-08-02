import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ToDoList from ".";

test("renders ToDoList with title and TextInput", () => {
  render(<ToDoList />);
  const titleElement = screen.getByText(/todo list/i);
  const inputElement = screen.getByRole("textbox");
  const buttonElement = screen.getByRole("button", { name: /add/i });

  expect(titleElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test("adds a new item to the list", () => {
  render(<ToDoList />);
  const inputElement = screen.getByRole("textbox");
  const buttonElement = screen.getByRole("button", { name: /add/i });

  fireEvent.change(inputElement, { target: { value: "Test task" } });
  fireEvent.click(buttonElement);

  const listItemElement = screen.getByText("Test task");
  expect(listItemElement).toBeInTheDocument();
});
