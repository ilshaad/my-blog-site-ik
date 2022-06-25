import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";

describe("<Header/>", () => {
  it("renders the Ilshaad Blog heading", () => {
    const { container, getByRole } = render(<Header />);

    // const { getByRole } = screen;

    // * the link (<a>) is under the heading but is a link & the heading of all pages
    const heading = getByRole("heading", { name: /Ilshaad Blog/ });

    expect(heading).toBeInTheDocument();

    // expect(container).toMatchSnapshot();
  });
});
