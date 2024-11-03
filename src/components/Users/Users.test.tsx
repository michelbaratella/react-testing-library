import { render, screen } from "@testing-library/react";
import Users from "./Users";
import { server } from "../../mocks/server";
import { rest } from "msw";

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

  it("renders a get error", async () => {
    server.use(
      rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) =>
        res(ctx.status(500))
      )
    );
    render(<Users />);
    const errorEl = await screen.findByText("error fetching users");
    expect(errorEl).toBeInTheDocument();
  });
});
