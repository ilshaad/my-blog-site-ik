import { render } from "@testing-library/react";
import {
  DockerComposeFile,
  DockerfileFrontend,
  GithubActionsFile,
} from "../../../components/blogPostCodes/Blog5";

describe("<Blog5/> code for blog5 component", () => {
  test("DockerfileFrontend renders the <code> tag", () => {
    const { getByRole } = render(<DockerfileFrontend />);

    const codeTag = getByRole("code");

    expect(codeTag).toBeInTheDocument();
  });

  // snapshot component
  test("snapshot DockerfileFrontend code tag", () => {
    const { container } = render(<DockerfileFrontend />);

    expect(container).toMatchSnapshot();
  });

  test("DockerComposeFile renders the <code> tag", () => {
    const { getByRole } = render(<DockerComposeFile />);

    const codeTag = getByRole("code");

    expect(codeTag).toBeInTheDocument();
  });

  // snapshot component
  test("snapshot DockerComposeFile code tag", () => {
    const { container } = render(<DockerComposeFile />);

    expect(container).toMatchSnapshot();
  });

  test("GithubActionsFile renders the <code> tag", () => {
    const { getByRole } = render(<GithubActionsFile />);

    const codeTag = getByRole("code");

    expect(codeTag).toBeInTheDocument();
  });

  // snapshot component
  test("snapshot GithubActionsFile code tag", () => {
    const { container } = render(<GithubActionsFile />);

    expect(container).toMatchSnapshot();
  });
});
