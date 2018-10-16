import React from "react";
import ReactDOM from "react-dom";
import Enzyme from "enzyme";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import PrimarySearch from "./components/Search/primarySearch/primarySearch";
import HomeBody from "./components/Home/homeBody";
Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//testing Home page component rendering
describe("Home Page component", () => {
  it(" should render without throwing an error", () => {
    expect(
      shallow(<HomeBody />)
        .find("div", "conainer text-center")
        .exists()
    ).toBe(true);
  });
  it(" Alert msgs should render without throwing an error", () => {
    expect(
      shallow(<HomeBody />)
        .find("div", "alert alert-dark-sm text-center")
        .exists()
    ).toBe(true);
  });
  it(" Feedback element should render without throwing an error", () => {
    expect(
      shallow(<HomeBody />)
        .find("div.container")
        .exists()
    ).toBe(true);
  });

  it("should renders the primary search box", () => {
    expect(shallow(<HomeBody />).find("#primarySearchbox").length).toEqual(1);
  });
});

//SearchBox component
describe("Primary search input", () => {
  it("should respond to button click and evvent change of the search component", () => {
    const wrapper = shallow(<PrimarySearch />);
    wrapper
      .find("#searchBox")
      .simulate("change", { target: { name: "userName", value: "da" } });
    expect(wrapper.state("userName")).toEqual("da");
  });
});
