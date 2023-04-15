import { render } from "@testing-library/react";
import CastItem from "./CastItem";

describe("CastItem component", () => {
  test("Check that footer renders img correct", () => {
    const { container } = render(<CastItem></CastItem>);
    const castItemElement = container.querySelector("img");
    expect(castItemElement).toHaveClass("cast-item__img");
  });
  test("Check that footer renders component correct", () => {
    const { container } = render(<CastItem></CastItem>);
    const castItemElement = container.querySelector(".cast-item");
    expect(castItemElement).toHaveClass("cast-item");
  });
});
