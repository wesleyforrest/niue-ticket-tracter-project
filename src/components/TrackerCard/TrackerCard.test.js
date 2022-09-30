import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TrackerCard from "./TrackerCard";

describe("Tests to test TrackerCard is rendering", () => {
  it("Renders the tracker card on the page", () => {
    render(<TrackerCard name="rob" role="coach" />);

    const coachName = screen.getByText("rob");
    const coachRole = screen.getByText("coach");
    expect(coachName).toBeInTheDocument();
    expect(coachRole).toBeInTheDocument();
  });

  it("Renders multiple buttons on page", () => {
    render(<TrackerCard />);

    const buttonRender = screen.getAllByRole("button");
    expect(buttonRender).tobeInTheDocument;
  });

  it("Displays title", () => {
    render(<TrackerCard />);

    const titleName = screen.getByText("Ticket Tracker");
    expect(titleName).tobeInTheDocument;
  });
});
