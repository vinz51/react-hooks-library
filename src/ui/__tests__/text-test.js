import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Text from "../text";

describe("Text component", () => {
  describe("Snapshots", () => {
    const myTreeComponent = renderer.create(<Text text="My text" />).toJSON();

    expect(myTreeComponent).toMatchSnapshot();
  });

  describe("Actions", () => {
    it("calls onclick", () => {
      const myOnClick = jest.fn();
      const myComponent = shallow(<Text onClick={myOnClick} text="My text" />);

      myComponent.simulate("click");

      expect(myOnClick).toHaveBeenCalled();
    });
  });
});
