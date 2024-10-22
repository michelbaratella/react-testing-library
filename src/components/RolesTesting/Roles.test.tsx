import { render, screen } from "@testing-library/react";
import Roles from "./Roles";

test("renders elements", () => {
  render(<Roles />);
  const textEl = screen.getByRole("textbox", { name: /inputText/i });
  expect(textEl).toBeInTheDocument();

  const selectEl = screen.getByRole("combobox");
  expect(selectEl).toBeInTheDocument();

  const checkEl = screen.getByRole("checkbox");
  expect(checkEl).toBeInTheDocument();

  const btnEl = screen.getByRole("button");
  expect(btnEl).toBeInTheDocument();

  const textAreaEl = screen.getByRole("textbox", { name: /textArea/i });
  expect(textAreaEl).toBeInTheDocument();

  const headingEl = screen.getByRole("heading", { level: 1 });
  expect(headingEl).toBeInTheDocument();

  const sectionEl = screen.getByRole("heading", { level: 2 });
  expect(sectionEl).toBeInTheDocument();
});
