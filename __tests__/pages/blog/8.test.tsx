import { render } from "@testing-library/react";
import Blog_eight from "../../../pages/blog/8";

describe("<8/> blog page", () => {
  const blogEightPage = () => render(<Blog_eight />);

  test("renders blog 8 post image", () => {
    const { getByAltText } = blogEightPage();

    const image = getByAltText("blog 8 image");

    expect(image).toBeInTheDocument();
  });

  test("renders blog 8 post title", () => {
    const { getByRole } = blogEightPage();

    const h1 = getByRole("heading", {
      name: /Most common HTML entities you will use/,
    });

    expect(h1).toBeInTheDocument();
  });

  test("snapshot blog post 8", () => {
    const { container } = blogEightPage();

    expect(container).toMatchSnapshot();
  });
});
