import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";

describe("<Footer/>", () => {
  it("Footer component is showing", () => {
    const { getByText, container } = render(<Footer />);

    const divFooter = getByText(/ilshaad kheerdali/i);

    expect(divFooter).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("display the correct current year (new Date()) within the footer", () => {
    render(<Footer />);

    const { getByText } = screen;

    const currentYear = new Date().getFullYear();

    const timeTag = getByText(currentYear);

    expect(timeTag).toBeInTheDocument();
  });
});
