import * as React from "react";

export interface PullDownContentProps {
    height?: string;
    background?: any;
    label?: string;
}

export const PullDownContent: React.SFC<PullDownContentProps> = ({height = "200px", background = "none", label = "Pull down to refresh"}) => (
    <div id="container2">
        <div id="arrow" />
        <span>{label}</span>
        <style>
            {`
                #container2 {
                    background: ${background};
                    height: ${height};
                    text-align: center;
                }
                #arrow {
                    margin: 10px auto;
                    border-left: 15px solid transparent;
                    border-right: 15px solid transparent;
                    border-top: 15px solid #666666;
                    height: 0;
                    width: 0;
                    -webkit-animation: fadein 1.5s infinite;
                    animation: fadein 1.5s infinite;
                }
                @keyframes fadein {
                    0%, 100% {
                        opacity: 0;
                    }
                    45%, 55% {
                        opacity: 1;
                    }
                }
            `}
        </style>
    </div>
);
