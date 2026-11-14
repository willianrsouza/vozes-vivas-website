import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { HomeCalendar } from "./HomeCalendar";

afterEach(cleanup);

describe("Home calendar day selection", () => {
  it("starts on Friday, November 20 at 19:00", () => {
    render(<HomeCalendar />);
    expect(screen.getByRole("button", { name: "Sex, 20.11" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText("SEX 19:00")).toBeInTheDocument();
  });

  it("selects Saturday, November 21 on hover", () => {
    render(<HomeCalendar />);
    const saturday = screen.getByRole("button", { name: "Sáb, 21.11" });
    fireEvent.mouseEnter(saturday);
    expect(saturday).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText("SÁB 19:00")).toBeInTheDocument();
    expect(screen.getAllByText("21.11")).toHaveLength(2);
    expect(screen.queryByText("SEX 19:00")).not.toBeInTheDocument();
  });

  it("selects Sunday, November 22 on click", () => {
    render(<HomeCalendar />);
    const sunday = screen.getByRole("button", { name: "Dom, 22.11" });
    fireEvent.click(sunday);
    expect(sunday).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText("DOM 19:00")).toBeInTheDocument();
    expect(screen.getAllByText("22.11")).toHaveLength(2);
  });

  it("selects a day when reached by keyboard focus", () => {
    render(<HomeCalendar />);
    fireEvent.focus(screen.getByRole("button", { name: "Sáb, 21.11" }));
    expect(screen.getByText("SÁB 19:00")).toBeInTheDocument();
  });
});