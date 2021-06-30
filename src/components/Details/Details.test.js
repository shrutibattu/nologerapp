import React from "react";
import { render } from "@testing-library/react";
import Details from "./Details";

describe("Details tests", () => {
  it("should render", () => {
    expect(render(<Details />)).toBeTruthy();
  });
});
