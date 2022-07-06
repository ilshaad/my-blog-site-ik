import { render } from "@testing-library/react";
import Blog_one from "../../../pages/blog/1";

describe("<1/> blog page", () => {
  const blogOnePage = () => render(<Blog_one />);

  test("renders blog 1 post image", () => {
    const { getByAltText } = blogOnePage();

    const image = getByAltText("blog 1 image");

    expect(image).toBeInTheDocument();
  });

  test("renders blog 1 post title", () => {
    const { getByRole } = blogOnePage();

    const h1 = getByRole("heading", {
      name: /create timestamp in sql format/i,
    });

    expect(h1).toBeInTheDocument();
  });

  test("snapshot blog post 1", () => {
    const { container } = blogOnePage();

    expect(container).toMatchSnapshot();
  });
});
