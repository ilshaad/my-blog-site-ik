import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";

describe("<Footer/>", () => {
  it("display the current year (new Date()) within the footer", () => {
    render(<Footer />);

    const { getByText, debug } = screen;

    const currentYear = new Date().getFullYear();

    const timeTag = getByText(currentYear);

    debug(timeTag);

    expect(timeTag).toBeInTheDocument();
  });
});

// describe("<Footer/>", () => {
//   it("renders the Ilshaad Blog heading", () => {
//     const { container } = render(<Footer />);

//     const { getByRole, debug } = screen;

//     // * the link (<a>) is under the heading but is a link & the heading of all pages
//     const heading = getByRole("link", { name: /Ilshaad Blog/ });

//     expect(heading).toBeInTheDocument();

//     expect(container).toMatchSnapshot();
//   });
// });
