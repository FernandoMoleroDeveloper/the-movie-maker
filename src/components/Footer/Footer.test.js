import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  test("Check that footer renders img correct", () => {
    const { container } = render(<Footer></Footer>);
    const footerElement = container.querySelector("img");
    expect(footerElement).toHaveClass("footer__img");
  });
  test("Check that footer renders component correct", () => {
    const { container } = render(<Footer></Footer>);
    const footerElement = container.querySelector(".footer");
    expect(footerElement).toHaveClass("footer");
  });
});
