import { render } from "@testing-library/react";
import Blog_four from "../../../pages/blog/4";

describe("<4/> blog page", () => {
  const blogFourPage = () => render(<Blog_four />);

  test("renders blog 4 post image", () => {
    const { getByAltText } = blogFourPage();

    const image = getByAltText("blog 4 image");

    expect(image).toBeInTheDocument();
  });

  test("renders blog 4 post title", () => {
    const { getByRole } = blogFourPage();

    const h1 = getByRole("heading", {
      name: /Create an Axios instance/,
    });

    expect(h1).toBeInTheDocument();
  });

  test("snapshot blog post 4", () => {
    const { container } = blogFourPage();

    expect(container).toMatchSnapshot();
  });
});
