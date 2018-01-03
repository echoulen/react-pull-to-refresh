import * as React from "react";
import styled from "styled-components";
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
                >
                    <Container>
                        <Label>PullToRefresh</Label>
                    </Container>
                </PullToRefresh>
            </div>
        );
    }
}

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: darkslategray;
`;

const Label = styled.div`
    margin-top: 20px;
    color: aliceblue;
    border: 1px solid aliceblue;
    border-radius: 6px;
    padding: 5px 2px;
    &:hover {
        cursor: pointer;
    }
`;
