import { render } from "@testing-library/react";
import AsideBox from "../../components/AsideBox";

describe("<Aside/>", () => {
  it("renders both svg link box & blog descript box", () => {
    const { getByTestId } = render(<AsideBox />);

    const AsideBox_component = getByTestId("AsideBox_component");

    expect(AsideBox_component.children.length).toEqual(2);
  });
});
