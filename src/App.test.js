import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { BucketContainer } from "./Bucket.styles";

const wrapper = shallow(<App />);

describe("Renders Kanban Board heading", function () {
  it("should render a H1 Tag with Kanban Board", function () {
    expect(wrapper.find("h1").text()).toEqual("Kanban Board");
  });
});

describe("Renders Three Buckets", () => {
  it("should render three buckets", () => {
    expect(wrapper.find(BucketContainer)).toHaveLength(3);
  });

  it("renders todo bucket with two entries", () => {});
});
