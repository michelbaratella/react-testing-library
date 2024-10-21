import { render, screen } from "@testing-library/react";
import Greet from "./Greet";
test(`Greet renders`, () => {
  render(<Greet />);
  const textEl = screen.getByText(/hello/i);
  expect(textEl).toBeInTheDocument();
});

test("Greet renders with a name", () => {
  render(<Greet name={`Vishwas`} />);
  const textEl = screen.getByText(/hello vishwas/i);
  expect(textEl).toBeInTheDocument();
});
