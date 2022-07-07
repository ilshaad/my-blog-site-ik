import { render } from "@testing-library/react";
import Blog3Codes from "../../../components/blogPostCodes/Blog3";

describe("<Blog3/> code for blog3 component", () => {
  const blogThreeComponent = () => render(<Blog3Codes />);

  test("renders the <code> tag", () => {
    const { getByRole } = blogThreeComponent();

    const codeTag = getByRole("code");

    expect(codeTag).toBeInTheDocument();
  });

  // snapshot component
  test("snapshot Blog3 code tag", () => {
    const { container } = blogThreeComponent();

    expect(container).toMatchSnapshot();
  });
});
