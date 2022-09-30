import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Testing button functionality", () => {
  it("Does the button on the page", () => {
    //Arrange
    render(<Button />);

    //Act
    const button = screen.getByRole("button");

    //Assert
    expect(button).toBeInTheDocument();
  });

  it("When + button is clicked", () => {
    render(<Button />);

    const buttonClick = screen.getByRole("button", { name: /+/i });
    userEvent.click(button);
    expect(buttonClick).toBeCalled;
  });
});
