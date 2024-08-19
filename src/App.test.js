import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders App component", () => {
  render(<App />);
  expect(screen.getAllByRole("deck-cards")).toHaveLength(52);
  expect(screen.getByRole("shuffle")).toBeInTheDocument();
  expect(screen.getByRole("sort")).toBeInTheDocument();
  expect(screen.getByRole("sort-drawn")).toBeInTheDocument();
});

test("should validate the drawn card length to be empty", () => {
  render(<App />);
  expect(screen.queryAllByRole("drawn-cards")).toHaveLength(0);
});

test("should validate the drawn card length when user selects card", async() => {
  render(<App />);
  await userEvent.click(screen.getAllByRole("deck-cards")[2]);
  expect(screen.queryAllByRole("drawn-cards")).toHaveLength(1);
});