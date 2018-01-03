/* tslint:disable:no-implicit-dependencies */
import * as React from "react";
import {render} from "react-dom";
import {AppContainer} from "react-hot-loader";
import {Basic} from "../examples/Basic";

const renderExample = () => {
    const root = document.getElementById("sample");
    render(
        <AppContainer>
            <Basic />
        </AppContainer>,
        root,
    );
};

renderExample();

// Hot Module Replacement API
declare const module: { hot: any };

if (module.hot) {
    module.hot.accept("./components/PullToRefresh", () => {
        renderExample();
    });
}
