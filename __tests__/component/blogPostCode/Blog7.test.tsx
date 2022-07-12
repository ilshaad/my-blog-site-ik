import { render } from "@testing-library/react";
import Blog7Codes from "../../../components/blogPostCodes/Blog7";

describe("<Blog7/> code for blog7 component", () => {
  const blogSevenComponent = () => render(<Blog7Codes />);

  test("renders the <code> tag", () => {
    const { getByRole } = blogSevenComponent();

    const codeTag = getByRole("code");

    expect(codeTag).toBeInTheDocument();
  });

  // snapshot component
  test("snapshot Blog7 code tag", () => {
    const { container } = blogSevenComponent();

    expect(container).toMatchSnapshot();
  });
});
