import { render } from "@testing-library/react";
import Blog_six from "../../../pages/blog/6";

describe("<6/> blog page", () => {
  const blogSixPage = () => render(<Blog_six />);

  test("renders blog 6 post image", () => {
    const { getByAltText } = blogSixPage();

    const image = getByAltText("blog 6 image");

    expect(image).toBeInTheDocument();
  });

  test("renders blog 6 post title", () => {
    const { getByRole } = blogSixPage();

    const h1 = getByRole("heading", {
      name: /Create an ascending and descending sort function/,
    });

    expect(h1).toBeInTheDocument();
  });

  test("snapshot blog post 6", () => {
    const { container } = blogSixPage();

    expect(container).toMatchSnapshot();
  });
});
