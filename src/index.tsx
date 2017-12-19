/* tslint:disable:no-implicit-dependencies */
import * as React from "react";
import {render} from "react-dom";
import {AppContainer} from "react-hot-loader";
import {PullToRefresh} from "./PullToRefresh";

const onRefresh = () => {
    return new Promise((reslove) => {
        setTimeout(reslove, 3000);
    });
};

const renderMasterLayout = () => {
    const root = document.getElementById("sample");
    render(
        <AppContainer>
            <div>
                <div>Header</div>
                <PullToRefresh
                    pullDownContent={<span>pullDownContent</span>}
                    releaseContent={<span>releaseContent</span>}
                    refreshContent={<span>refreshing</span>}
                    pullDownThreshold={50}
                    onRefresh={onRefresh}
                >
                    <div style={{backgroundColor: "green", height: "300px", color: "white", textAlign: "center"}}>
                        PullToRefresh
                    </div>
                </PullToRefresh>
            </div>
        </AppContainer>,
        root,
    );
};

renderMasterLayout();

// Hot Module Replacement API
declare const module: { hot: any };

if (module.hot) {
    module.hot.accept("./PullToRefresh", () => {
        renderMasterLayout();
    });
}
