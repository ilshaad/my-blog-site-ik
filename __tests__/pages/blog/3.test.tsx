import { render } from "@testing-library/react";
import Blog_three from "../../../pages/blog/3";

describe("<3/> blog page", () => {
  const blogThreePage = () => render(<Blog_three />);

  test("renders blog 3 post image", () => {
    const { getByAltText } = blogThreePage();

    const image = getByAltText("blog 3 image");

    expect(image).toBeInTheDocument();
  });

  test("renders blog 3 post title", () => {
    const { getByRole } = blogThreePage();

    const h1 = getByRole("heading", {
      name: /How to create a controlled form component with React-Typescript/i,
    });

    expect(h1).toBeInTheDocument();
  });

  test("snapshot blog post 3", () => {
    const { container } = blogThreePage();

    expect(container).toMatchSnapshot();
  });
});
