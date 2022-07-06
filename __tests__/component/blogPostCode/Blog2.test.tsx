import { render } from "@testing-library/react";
import Blog1Codes from "../../../components/blogPostCodes/Blog2";

describe("<Blog2/> code for blog2 component", () => {
  const blogOneComponent = () => render(<Blog1Codes />);

  test("renders the <code> tag", () => {
    const { getByRole } = blogOneComponent();

    const codeTag = getByRole("code");

    expect(codeTag).toBeInTheDocument();
  });

  // snapshot component
  test("snapshot Blog2 code tag", () => {
    const { container } = blogOneComponent();

    expect(container).toMatchSnapshot();
  });
});
