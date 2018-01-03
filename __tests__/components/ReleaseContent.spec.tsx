/*tslint:disable no-implicit-dependencies*/

import * as React from "react";
import * as renderer from "react-test-renderer";
import {ReleaseContent} from "../../src";

describe("ReleaseContent spec", () => {
    it("App shows ReleaseContent", () => {
        const element = renderer
            .create((
                <ReleaseContent
                    background={"#CCC"}
                    height="200px"
                />
            ))
                .toJSON();
        expect(element).toMatchSnapshot();
    });
});
