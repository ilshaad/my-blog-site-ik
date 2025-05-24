import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";

describe("<Footer/>", () => {
  it("Footer component is showing", () => {
    const { getByText } = render(<Footer />);

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

  //snapshot footer component
  // iK 20250524 I uncommented this because snapshot test is inappropriate because of year changes
  // test("snapshot footer component", () => {
  //   const { container } = render(<Footer />);

  //   expect(container).toMatchSnapshot();
  // });
});
