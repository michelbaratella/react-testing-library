import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./counter";

describe.only("Counter", () => {
  test("renders ok", () => {
    render(<Counter />);
    const countEl = screen.getByRole("heading");
    expect(countEl).toBeInTheDocument();
    const btnEl = screen.getByRole("button");
    expect(btnEl).toBeInTheDocument();
  });

  test("renders count as 0", () => {
    render(<Counter />);
    const countEl = screen.getByRole("heading");
    expect(countEl).toHaveTextContent("0");
  });

  test("renders count of 2 after user clicks add btn", async () => {
    user.setup();
    render(<Counter />);
    const btnEl = screen.getByRole("button");
    await user.dblClick(btnEl);
    const countEl = screen.getByRole("heading");
    expect(countEl).toHaveTextContent("2");
  });
});
