/*tslint:disable no-implicit-dependencies*/

import * as React from "react";
import * as renderer from "react-test-renderer";
import {PullDownContent} from "../../src";

describe("PullDownContent spec", () => {
    it("App shows PullDownContent", () => {
        const element = renderer
            .create((
                <PullDownContent
                    background={"#CCC"}
                    height="200px"
                />
            ))
                .toJSON();
        expect(element).toMatchSnapshot();
    });
});
