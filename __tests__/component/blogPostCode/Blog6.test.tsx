import { render } from "@testing-library/react";
import {
  MockDataArrayOfObjects,
  AscendingFunction,
  DescendingFunction,
} from "../../../components/blogPostCodes/Blog6";

describe("<Blog6/> code for blog6 component", () => {
  // const blogOneComponent = () => render(<Blog6Codes />);

  test("MockDataArrayOfObjects renders the <code> tag", () => {
    const { getByRole } = render(<MockDataArrayOfObjects />);

    const codeTag = getByRole("code");

    expect(codeTag).toBeInTheDocument();
  });

  // snapshot component
  test("snapshot MockDataArrayOfObjects code tag", () => {
    const { container } = render(<MockDataArrayOfObjects />);

    expect(container).toMatchSnapshot();
  });

  test("AscendingFunction renders the <code> tag", () => {
    const { getByRole } = render(<AscendingFunction />);

    const codeTag = getByRole("code");

    expect(codeTag).toBeInTheDocument();
  });

  // snapshot component
  test("snapshot AscendingFunction code tag", () => {
    const { container } = render(<AscendingFunction />);

    expect(container).toMatchSnapshot();
  });

  test("DescendingFunction renders the <code> tag", () => {
    const { getByRole } = render(<DescendingFunction />);

    const codeTag = getByRole("code");

    expect(codeTag).toBeInTheDocument();
  });

  // snapshot component
  test("snapshot DescendingFunction code tag", () => {
    const { container } = render(<DescendingFunction />);

    expect(container).toMatchSnapshot();
  });
});
