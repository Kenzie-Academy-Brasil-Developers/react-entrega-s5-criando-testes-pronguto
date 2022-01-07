import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Input, Button } from "semantic-ui-react";
import Search from "../../components/Search";

const mockedHandleSearch = jest.fn();

jest.mock("../../providers/CepProvider", () => {
  return {
    useLocateCep: () => ({
      handleSearch: mockedHandleSearch,
      setCepNumber: jest.fn(),
      cepNumber: 20785210,
    }),
  };
});

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

describe("Search component", () => {
  it("Shoud be able to render address", async () => {
    render(<Search />);

    const cepField = screen.getByPlaceholderText("Insira o CEP");
    const buttonElement = screen.getByRole("button");

    fireEvent.change(cepField, { target: { value: "20785210" } });
    fireEvent.click(buttonElement);

    expect(mockedHandleSearch).toHaveBeenCalled();
  });
});
