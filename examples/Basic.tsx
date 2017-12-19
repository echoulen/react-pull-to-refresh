import * as React from "react";
import {PullToRefresh} from "../src";

export interface BasicProps {
}

export interface BasicState {
}

export class Basic extends React.Component<BasicProps, BasicState> {
    private onRefresh() {
        return new Promise((resolve) => {
            setTimeout(resolve, 2000);
        });
    }

    public render() {
        return (
            <div style={{overflow: "scroll"}}>
                <PullToRefresh
                    pullDownContent={<div style={{backgroundColor: "red"}}>pullDownContent</div>}
                    releaseContent={<div style={{backgroundColor: "red"}}>releaseContent</div>}
                    refreshContent={<div style={{backgroundColor: "red", height: "200px"}}>refreshContent</div>}
                    pullDownThreshold={200}
                    onRefresh={this.onRefresh}
                >
                    <div style={{height: "95vh", textAlign: "center"}}>
                        PullToRefresh
                    </div>
                </PullToRefresh>
            </div>
        );
    }
}
