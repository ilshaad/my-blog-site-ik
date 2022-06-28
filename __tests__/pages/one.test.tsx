import { render, screen } from "@testing-library/react";
import One from "../../pages/one";

describe.skip("One page testing iK", () => {
  it("renders a heading", () => {
    const { container } = render(<One />);

    const heading = screen.getByRole("heading", {
      name: /page one/i,
    });

    expect(heading).toBeInTheDocument();

    // expect(container).toMatchSnapshot();
  });
});
