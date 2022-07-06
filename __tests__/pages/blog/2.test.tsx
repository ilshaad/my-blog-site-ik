import { render } from "@testing-library/react";
import Blog_two from "../../../pages/blog/2";

describe("<2/> blog page", () => {
  const blogTwoPage = () => render(<Blog_two />);

  test("renders blog 2 post image", () => {
    const { getByAltText } = blogTwoPage();

    const image = getByAltText("blog 2 image");

    expect(image).toBeInTheDocument();
  });

  test("renders blog 2 post title", () => {
    const { getByRole } = blogTwoPage();

    const h1 = getByRole("heading", {
      name: /Parse SQL timestamp/i,
    });

    expect(h1).toBeInTheDocument();
  });

  test("snapshot blog post 2", () => {
    const { container } = blogTwoPage();

    expect(container).toMatchSnapshot();
  });
});
