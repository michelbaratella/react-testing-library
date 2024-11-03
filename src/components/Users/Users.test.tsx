import { render, screen } from "@testing-library/react";
import Users from "./Users";

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);
    const titleEl = screen.getByText("Users");
    expect(titleEl).toBeInTheDocument();
  });

    test("renders list of users", async () => {
      render(<Users />);
      const usersEl = await screen.findAllByRole("listitem");
      expect(usersEl).toHaveLength(3);
    });
});
