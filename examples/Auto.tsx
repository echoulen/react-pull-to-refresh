import * as React from "react";
import { PullDownContent, PullToRefresh, RefreshContent, ReleaseContent } from "../src";

export interface AutoProps {
}

export interface AutoState {
}

export class Auto extends React.Component<AutoProps, AutoState> {
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
                    triggerHeight="auto"
                    backgroundColor="white"
                >
                    <div id="basic-container">
                        <div id="basic-label">PullToRefresh</div>
                    </div>
                    <div>
                        <h2>Scrollable content</h2>

                        <div id="scrollable-content" />
                    </div>
                    <style>{`
                        #basic-container {
                            height: 50vh;
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
                        #scrollable-content {
                            height: 100vh;
                            width: 100%;
                            background: darkmagenta;
                        }
                    `}</style>
                </PullToRefresh>
            </div>
        );
    }
}
