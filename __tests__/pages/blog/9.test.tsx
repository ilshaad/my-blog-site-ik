import { render } from "@testing-library/react";
import Blog_nine from "../../../pages/blog/9";

describe("<9/> blog page", () => {
  const blogNinePage = () => render(<Blog_nine />);

  test("renders blog 9 post image", () => {
    const { getByAltText } = blogNinePage();

    const image = getByAltText("blog 9 image");

    expect(image).toBeInTheDocument();
  });

  test("renders blog 9 post title", () => {
    const { getByRole } = blogNinePage();

    const h1 = getByRole("heading", {
      name: /Create a React HOC scaffold/,
    });

    expect(h1).toBeInTheDocument();
  });

  test("snapshot blog post 9", () => {
    const { container } = blogNinePage();

    expect(container).toMatchSnapshot();
  });
});
