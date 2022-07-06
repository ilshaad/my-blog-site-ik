import { render } from "@testing-library/react";
import Blog1Codes from "../../../components/blogPostCodes/Blog1";

describe("<Blog1/> code for blog1 component", () => {
  const blogOneComponent = () => render(<Blog1Codes />);

  test("renders the <code> tag", () => {
    const { getByRole } = blogOneComponent();

    const codeTag = getByRole("code");

    expect(codeTag).toBeInTheDocument();
  });

  // snapshot component
  test("snapshot Blog1 code tag", () => {
    const { container } = blogOneComponent();

    expect(container).toMatchSnapshot();
  });
});
