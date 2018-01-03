/*tslint:disable no-implicit-dependencies*/

import * as React from "react";
import * as renderer from "react-test-renderer";
import {RefreshContent} from "../../src";

describe("RefreshContent spec", () => {
    it("App shows RefreshContent", () => {
        const element = renderer
            .create((
                <RefreshContent
                    background={"#CCC"}
                    height="200px"
                />
            ))
                .toJSON();
        expect(element).toMatchSnapshot();
    });
});
