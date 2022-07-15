import { render } from "@testing-library/react";
import Blog10Codes from "../../../components/blogPostCodes/Blog10";

describe("<Blog10/> code for blog10 component", () => {
  const blogTenComponent = () => render(<Blog10Codes />);

  test("renders the <code> tag", () => {
    const { getByRole } = blogTenComponent();

    const codeTag = getByRole("code");

    expect(codeTag).toBeInTheDocument();
  });

  // snapshot component
  test("snapshot Blog10 code tag", () => {
    const { container } = blogTenComponent();

    expect(container).toMatchSnapshot();
  });
});
