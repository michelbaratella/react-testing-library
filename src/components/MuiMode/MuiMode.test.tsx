import { render, screen } from "../../test-utils"; // <<<
import MuiMode from "./MuiMode";
// import { AppProviders } from "../../providers/AppProviders";

describe("MuiMode", () => {
  test("renders text correctly", () => {
    // render(<MuiMode />, { wrapper: AppProviders });
    render(<MuiMode />);
    const headEl = screen.getByRole("heading");
    expect(headEl).toHaveTextContent("dark mode");
  });
});
