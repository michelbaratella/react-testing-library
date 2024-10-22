import { renderHook } from "@testing-library/react";
import UseCounter from "./UseCounter";
import { act } from "react";

/* 
Hooks does not return JSX as a functional component, so they cannot use render() and screen() as usual.
RTL provides a renderHook() method which returns an object that can be destructured to access a result property. 
Property result.current contains all values returned from the custom hook.
*/
describe("UseCounter", () => {
  test("render initial count", () => {
    const { result } = renderHook(UseCounter);
    expect(result.current.count).toBe(0);
  });

  test("accept and render the same initial count", () => {
    // passing props to the custom hook
    const { result } = renderHook(UseCounter, {
      initialProps: { initialCount: 10 },
    });
    expect(result.current.count).toBe(10);
  });

  test("increments initial count", () => {
    const { result } = renderHook(UseCounter);
    // act guarantees all state updates are made before all assertions
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });
});
