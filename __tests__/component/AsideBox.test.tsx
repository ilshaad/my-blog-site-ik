import { render } from "@testing-library/react";
import AsideBox from "../../components/AsideBox";

describe("<Aside/>", () => {
  it("renders both svg link box & blog description box", () => {
    const { getByTestId, container } = render(<AsideBox />);

    const AsideBox_component = getByTestId("AsideBox_component");

    // 2 boxes, one is svg links box & the other is about box
    expect(AsideBox_component.children.length).toEqual(2);

    expect(container).toMatchSnapshot();
  });
});
