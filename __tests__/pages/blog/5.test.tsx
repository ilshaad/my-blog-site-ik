import { render } from "@testing-library/react";
import Blog_five from "../../../pages/blog/5";

describe("<5/> blog page", () => {
  const blogFivePage = () => render(<Blog_five />);

  test("renders blog 5 post image", () => {
    const { getByAltText } = blogFivePage();

    const image = getByAltText("blog 5 image");

    expect(image).toBeInTheDocument();
  });

  test("renders blog 5 post title", () => {
    const { getByRole } = blogFivePage();

    const h1 = getByRole("heading", {
      name: /Deploy multiple Docker containers pipeline using Github Actions and Heroku/,
    });

    expect(h1).toBeInTheDocument();
  });

  test("snapshot blog post 5", () => {
    const { container } = blogFivePage();

    expect(container).toMatchSnapshot();
  });
});
