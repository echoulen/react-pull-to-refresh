import * as React from "react";
import {PullToRefresh, ReleaseContent, RefreshContent, PullDownContent} from "../src";

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
                    pullDownContent={<PullDownContent />}
                    releaseContent={<ReleaseContent />}
                    refreshContent={<RefreshContent />}
                    pullDownThreshold={200}
                    onRefresh={this.onRefresh}
                    backgroundColor="white"
                >
                    <div id="basic-container">
                        <div id="basic-label">PullToRefresh</div>
                    </div>
                    <style>{`
                        #basic-container {
                            height: 100vh;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            background: darkslategray;
                        }
                        #basic-label {
                            user-select: none;
                            margin-top: 20px;
                            color: aliceblue;
                            border: 1px solid aliceblue;
                            border-radius: 6px;
                            padding: 5px 2px;
                        }
                        #basic-label:hover {
                            cursor: pointer;
                        }
                    `}</style>
                </PullToRefresh>
            </div>
        );
    }
}
