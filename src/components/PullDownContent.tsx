import * as React from "react";
import styled from "styled-components";

export interface PullDownContentProps {
    height?: number;
    background?: any;
    label?: string;
}

export const PullDownContent: React.SFC<PullDownContentProps> = (props) => (
    <Container {...props}>
        <Arrow />
        <span>{props.label || "Pull down to refresh"}</span>
    </Container>
);

const Container = styled.div`
    background: ${(props: PullDownContentProps) => props.background || "none"};
    height: ${(props: PullDownContentProps) => props.height || "200px"};
    text-align: center;
`;

const Arrow = styled.div`
    margin: 10px auto;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 15px solid #666666;
    height: 0;
    width: 0;

    -webkit-animation: fadein 1.5s infinite;
    animation: fadein 1.5s infinite;
    @keyframes fadein {
        0%, 100% {
            opacity: 0;
        }
        45%, 55% {
            opacity: 1;
        }
    }
`;
