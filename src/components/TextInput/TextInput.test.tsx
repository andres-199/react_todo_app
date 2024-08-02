import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TextInput from ".";

test("renders input and button", () => {
  render(<TextInput onAdd={() => {}} />);
  const inputElement = screen.getByRole("textbox");
  const buttonElement = screen.getByRole("button", { name: /add/i });
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test("calls onAdd with input text and clears input", () => {
  const handleAdd = jest.fn();
  render(<TextInput onAdd={handleAdd} />);
  const inputElement = screen.getByRole("textbox");
  const buttonElement = screen.getByRole("button", { name: /add/i });

  fireEvent.change(inputElement, { target: { value: "Test task" } });
  fireEvent.click(buttonElement);

  expect(handleAdd).toHaveBeenCalledWith("Test task");
  expect(inputElement).toHaveValue("");
});
