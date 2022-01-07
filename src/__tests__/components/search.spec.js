import React from "react";
import { render, screen } from "@testing-library/react";
import { Input, Button } from "semantic-ui-react";

describe("Input component", () => {
  it("shoud be able to render an input", () => {
    render(<Input type="number" placeholder="Insira o CEP" />);
    expect(screen.getByPlaceholderText("Insira o CEP")).toBeTruthy();
  });
});
describe("Button component", () => {
  it("Shoud be able to render a Button", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toBeTruthy();
  });
});
