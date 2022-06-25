import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";

describe("<Footer/>", () => {
  it("Footer component is showing", () => {
    render(<Footer />);

    const { getByText } = screen;

    const divFooter = getByText(/ilshaad kheerdali/i);

    expect(divFooter).toBeInTheDocument();
  });

  it("display the correct current year (new Date()) within the footer", () => {
    render(<Footer />);

    const { getByText } = screen;

    const currentYear = new Date().getFullYear();

    const timeTag = getByText(currentYear);

    expect(timeTag).toBeInTheDocument();
  });

  it("Ensure all 4 links are showing (github/linkedin/portfolio/email me)", () => {
    const { getByTestId } = render(<Footer />);

    const linksContainer = getByTestId("containerForPersonalLinks");

    expect(linksContainer.children.length).toEqual(4);
  });
});
