import { render } from "@testing-library/react";
import Blog_seven from "../../../pages/blog/7";

describe("<7/> blog page", () => {
  const blogSevenPage = () => render(<Blog_seven />);

  test("renders blog 7 post image", () => {
    const { getByAltText } = blogSevenPage();

    const image = getByAltText("blog 7 image");

    expect(image).toBeInTheDocument();
  });

  test("renders blog 7 post title", () => {
    const { getByRole } = blogSevenPage();

    const h1 = getByRole("heading", {
      name: /Capitalise the first character of a word/,
    });

    expect(h1).toBeInTheDocument();
  });

  test("snapshot blog post 7", () => {
    const { container } = blogSevenPage();

    expect(container).toMatchSnapshot();
  });
});
