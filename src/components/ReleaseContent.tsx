import * as React from "react";

export interface ReleaseContentProps {
    height?: string;
    background?: any;
    label?: string;
}

export const ReleaseContent: React.SFC<ReleaseContentProps> = ({height = "200px", background = "none", label = "Release to refresh"}) => (
    <div id="container">
        <div id="arrow"/>
        <span>{label}</span>
        <style>{`
            #container {
                background: ${background || "none"};
                height: ${height || "200px"};
                text-align: center;
            }
            #arrow {
                margin: 10px auto;
                border-left: 15px solid transparent;
                border-right: 15px solid transparent;
                border-bottom: 15px solid #666666;
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
        `}</style>
    </div>
);
