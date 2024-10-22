import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import CounterTwo from "./CounterTwo";

describe("CounterTwo", () => {
  test("renders ok", () => {
    render(<CounterTwo count={0} />);
    const textEl = screen.getByRole("heading");
    expect(textEl).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    user.setup();
    // mock functions with jest to assert that the function is called, no matter what it does...
    const incrementMockFn = jest.fn();
    const decrementMockFn = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementMockFn}
        handleDecrement={decrementMockFn}
      />
    );
    const incrementBtnEl = screen.getByRole("button", { name: "Increment" });
    const decrementBtnEl = screen.getByRole("button", { name: "Decrement" });

    await user.click(incrementBtnEl);
    await user.click(decrementBtnEl);

    expect(incrementMockFn).toHaveBeenCalledTimes(1);
    expect(decrementMockFn).toHaveBeenCalledTimes(1);
  });
});
