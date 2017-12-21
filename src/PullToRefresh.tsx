import * as React from "react";
import {autobind} from "core-decorators";

export interface PullToRefreshProps {
    pullDownContent: JSX.Element;
    releaseContent: JSX.Element;
    refreshContent: JSX.Element;
    pullDownThreshold: number;
    onRefresh: () => Promise<any>;
}

export interface PullToRefreshState {
    pullToRefreshThresholdBreached: boolean;
    maxPullDownDistance: number;
    onRefreshing: boolean;
}

export class PullToRefresh extends React.Component<PullToRefreshProps, PullToRefreshState> {
    private container: any;
    @autobind
    private containerRef(container) {
        this.container = container;
    }

    private pullTag: any;
    @autobind
    private pullTagRef(pullTag) {
        this.pullTag = pullTag;
    }

    private pullDown: any;
    @autobind
    private pullDownRef(pullDown) {
        this.pullDown = pullDown;
        const maxPullDownDistance = this.pullDown && this.pullDown.firstChild && this.pullDown.firstChild["getBoundingClientRect"]
            ? this.pullDown.firstChild["getBoundingClientRect"]().height : 0;
        this.setState({maxPullDownDistance});
    }

    private dragging = false;
    private startY = 0;
    private currentY = 0;

    constructor(props: Readonly<PullToRefreshProps>) {
        super(props);
        this.state = {
            pullToRefreshThresholdBreached: false,
            maxPullDownDistance: 0,
            onRefreshing: false,
        };
    }

    public componentDidMount(): void {
        this.pullTag.addEventListener("touchstart", this.onTouchStart);
        this.container.addEventListener("touchmove", this.onTouchMove);
        this.container.addEventListener("touchend", this.onEnd);
        this.pullTag.addEventListener("mousedown", this.onTouchStart);
        this.container.addEventListener("mousemove", this.onTouchMove);
        this.container.addEventListener("mouseup", this.onEnd);
    }

    public componentWillUnmount(): void {
        this.pullTag.removeEventListener("touchstart", this.onTouchStart);
        this.container.removeEventListener("touchmove", this.onTouchMove);
        this.container.removeEventListener("touchend", this.onEnd);
        this.pullTag.removeEventListener("mousedown", this.onTouchStart);
        this.container.removeEventListener("mousemove", this.onTouchMove);
        this.container.removeEventListener("mouseup", this.onEnd);
    }

    @autobind
    private onTouchStart(e) {
        this.dragging = true;
        this.startY = e["pageY"] || e.touches[0].pageY;
        this.currentY = this.startY;

        this.container.style.transition = "transform 0.2s cubic-bezier(0,0,0.31,1)";
        this.pullDown.style.transition = "transform 0.2s cubic-bezier(0,0,0.31,1)";
    }

    @autobind
    private onTouchMove(e) {
        if (!this.dragging) {
            return;
        }

        this.currentY = e["pageY"] || e.touches[0].pageY;
        if (this.currentY < this.startY) {
            return;
        }

        if ((this.currentY - this.startY) >= this.props.pullDownThreshold) {
            this.setState({
                pullToRefreshThresholdBreached: true,
            });
        }

        if (this.currentY - this.startY > this.state.maxPullDownDistance) {
            return;
        }

        this.container.style.overflow = "visible";
        this.container.style.transform = `translate(0px, ${this.currentY - this.startY}px)`;
    }

    @autobind
    private onEnd() {
        this.dragging = false;
        this.startY = 0;
        this.currentY = 0;

        if (!this.state.pullToRefreshThresholdBreached) {
            this.initContainer();
            return;
        }

        this.container.style.overflow = "visible";
        this.container.style.transform = `translate(0px, ${this.props.pullDownThreshold}px)`;
        this.setState({
            onRefreshing: true,
        }, () => {
            this.props.onRefresh().then(() => {
                this.initContainer();
                setTimeout(() => {
                    this.setState({
                        onRefreshing: false,
                        pullToRefreshThresholdBreached: false,
                    });
                }, 200);
            });
        });
    }

    private initContainer() {
        requestAnimationFrame(() => {
            this.container.style.overflow = "auto";
            this.container.style.transform = "none";
        });
    }

    private renderPullDownContent() {
        const {releaseContent, pullDownContent, refreshContent} = this.props;
        const {onRefreshing, pullToRefreshThresholdBreached} = this.state;
        const content = onRefreshing ? refreshContent : pullToRefreshThresholdBreached ? releaseContent : pullDownContent;
        const contentStyle: React.CSSProperties = {
            position: "absolute",
            overflow: "hidden",
            left: 0,
            right: 0,
            top: 0,
        };
        return (
            <div style={contentStyle} ref={this.pullDownRef}>
                {content}
            </div>
        );
    }

    public render() {
        const containerStyle: React.CSSProperties = {
            height: "auto",
            overflow: "hidden",
            WebkitOverflowScrolling: "touch",
            position: "relative",
            zIndex: 1,
            backgroundColor: "white",
        };

        const pullHiddenTagStyle: React.CSSProperties = {
            height: "50px",
            width: "100%",
            position: "absolute",
            top: 0,
            zIndex: 100,
        };

        return (
            <div style={containerStyle}>
                {this.renderPullDownContent()}
                <div ref={this.containerRef} style={containerStyle}>
                    <div ref={this.pullTagRef} style={pullHiddenTagStyle} />
                    {this.props.children}
                </div>
            </div>
        );
    }
}
