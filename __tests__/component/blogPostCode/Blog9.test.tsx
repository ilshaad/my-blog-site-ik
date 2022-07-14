import { render } from "@testing-library/react";
import {
  ReactHOC,
  ReactComponent,
  UseHOC,
} from "../../../components/blogPostCodes/Blog9";

describe("<Blog9/> code for blog9 component", () => {
  // const blogNineComponent = () => render(<Blog9Codes />);

  test("ReactHOC renders the <code> tag", () => {
    const { getByRole } = render(<ReactHOC />);

    const codeTag = getByRole("code");

    expect(codeTag).toBeInTheDocument();
  });

  // snapshot component
  test("snapshot ReactHOC code tag", () => {
    const { container } = render(<ReactHOC />);

    expect(container).toMatchSnapshot();
  });

  test("ReactComponent renders the <code> tag", () => {
    const { getByRole } = render(<ReactComponent />);

    const codeTag = getByRole("code");

    expect(codeTag).toBeInTheDocument();
  });

  // snapshot component
  test("snapshot ReactComponent code tag", () => {
    const { container } = render(<ReactComponent />);

    expect(container).toMatchSnapshot();
  });

  test("UseHOC renders the <code> tag", () => {
    const { getByRole } = render(<UseHOC />);

    const codeTag = getByRole("code");

    expect(codeTag).toBeInTheDocument();
  });

  // snapshot component
  test("snapshot UseHOC code tag", () => {
    const { container } = render(<UseHOC />);

    expect(container).toMatchSnapshot();
  });
});
