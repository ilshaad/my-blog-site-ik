import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders the blog posts collection list", () => {
    const { getByRole } = render(<Home />);

    // which is basically <Row> containers for each blog posts
    const ul_blogPosts = getByRole("list");

    expect(ul_blogPosts).toBeInTheDocument();

    expect(ul_blogPosts.children.length).toBeGreaterThan(0);
  });
});
