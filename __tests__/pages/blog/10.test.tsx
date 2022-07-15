import { render } from "@testing-library/react";
import Blog_ten from "../../../pages/blog/10";

describe("<10/> blog page", () => {
  const blogTenPage = () => render(<Blog_ten />);

  test("renders blog 10 post image", () => {
    const { getByAltText } = blogTenPage();

    const image = getByAltText("blog 10 image");

    expect(image).toBeInTheDocument();
  });

  test("renders blog 10 post title", () => {
    const { getByRole } = blogTenPage();

    const h1 = getByRole("heading", {
      name: /Create a dictionary object with Typescript interface/,
    });

    expect(h1).toBeInTheDocument();
  });

  test("snapshot blog post 10", () => {
    const { container } = blogTenPage();

    expect(container).toMatchSnapshot();
  });
});
