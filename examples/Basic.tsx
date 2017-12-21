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
                    pullDownContent={<div style={{backgroundColor: "grey", height: "200px", textAlign: "center"}}>Pull down to refresh</div>}
                    releaseContent={<div style={{backgroundColor: "green", height: "200px", textAlign: "center"}}>Release to refresh</div>}
                    refreshContent={<div style={{backgroundColor: "yellow", height: "200px", textAlign: "center"}}>Refreshing</div>}
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
