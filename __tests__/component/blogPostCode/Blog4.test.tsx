import { render } from "@testing-library/react";
import {
  InstanceCreateCode,
  FetchInstanceCode,
} from "../../../components/blogPostCodes/Blog4";

describe("<Blog4/> code for blog4 component", () => {
  test("renders the <code> tag from <InstanceCreateCode/>", () => {
    const { getByRole } = render(<InstanceCreateCode />);

    const codeTag = getByRole("code");

    expect(codeTag).toBeInTheDocument();
  });

  // snapshot component
  test("snapshot Blog4 code tag <InstanceCreateCode/>", () => {
    const { container } = render(<InstanceCreateCode />);

    expect(container).toMatchSnapshot();
  });

  test("renders the <code> tag from <FetchInstanceCode/>", () => {
    const { getByRole } = render(<FetchInstanceCode />);

    const codeTag = getByRole("code");

    expect(codeTag).toBeInTheDocument();
  });

  // snapshot component
  test("snapshot Blog4 code tag <FetchInstanceCode/>", () => {
    const { container } = render(<FetchInstanceCode />);

    expect(container).toMatchSnapshot();
  });
});
