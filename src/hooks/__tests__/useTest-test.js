import { renderHook, act } from "@testing-library/react-hooks";
import useTest from "../useTest";

describe("useTest hook", () => {
  it("increments", () => {
    const { result } = renderHook(() => useTest());

    act(() => {
      result.current.setIncrement();
    });

    expect(result.current.increment).toEqual(1);
  });

  it("decrements", () => {
    const { result } = renderHook(() => useTest());

    act(() => {
      result.current.setIncrement();
    });

    act(() => {
      result.current.decrement();
    });

    expect(result.current.increment).toEqual(0);
  });

  it("expects 0 when decrement 0", () => {
    const { result } = renderHook(() => useTest());

    act(() => {
      result.current.decrement();
    });

    expect(result.current.increment).toEqual(0);
  });
});
