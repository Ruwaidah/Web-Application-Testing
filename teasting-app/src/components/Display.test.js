import React from "react";
import { render,fireEvent, getByText  } from "@testing-library/react";
import Display from "./Display.js";


  it("renders without crashing", () => {
    render(<Display />);
  });


test('calling render with the same component on the same container does not remount', () => {
    const { getByTestId, rerender } = render(<Display balls={1} />)
    expect(getByTestId('number-display').textContent).toBe('1')})


test('testing text', () => {
    const { getByTestId, rerender } = render(<Display balls={1} />)
    expect(getByTestId('number-display').textContent).toBe('1')})

test('testing text', () => {
    const { getByText, rerender } = render(<Display balls={1} />)
    expect(getByText('Balls').textContent).toBe('Balls')})
