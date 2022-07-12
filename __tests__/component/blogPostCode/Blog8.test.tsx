import { render } from "@testing-library/react";
import Blog8Codes from "../../../components/blogPostCodes/Blog8";

describe("<Blog8/> code for blog8 component", () => {
  const blogEightComponent = () => render(<Blog8Codes />);

  test("renders the <code> tag", () => {
    const { getByRole } = blogEightComponent();

    const codeTag = getByRole("code");

    expect(codeTag).toBeInTheDocument();
  });

  // snapshot component
  test("snapshot Blog8 code tag", () => {
    const { container } = blogEightComponent();

    expect(container).toMatchSnapshot();
  });
});
