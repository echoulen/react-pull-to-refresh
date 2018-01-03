# react-js-pull-to-refresh

Pull to refresh with react
 > Support all mobile(iOS, Android) and Desktop browser (Chrome, Safari, firefox, Opera, QQ, UC, ... etc)


[![npm version](https://badge.fury.io/js/react-js-pull-to-refresh.svg)](https://badge.fury.io/js/react-js-pull-to-refresh)
[![license](https://img.shields.io/github/license/echoulen/react-js-pull-to-refresh.svg)](https://opensource.org/licenses/MIT)

![](https://media.giphy.com/media/xT1R9LCrbpOJ4J7HoI/giphy.gif)

## installation
`npm install react-js-pull-to-refresh --save`

or

`yarn add react-js-pull-to-refresh`

## Props
|Name|Type|Required
|:------:|:------:|:------:|
|pullDownContent|JSX.Element|true|
|releaseContent|JSX.Element|true|
|refreshContent|JSX.Element|true|
|pullDownThreshold|number|true|
|onRefresh|Promise|true|

## Usage

#### import PullToRefresh
```js
import {PullToRefresh} from "react-js-pull-to-refresh";
```

#### Sample
```js
<PullToRefresh
  pullDownContent={<div style={{backgroundColor: "grey", height: "200px", textAlign: "center"}}>Pull down to refresh</div>}
  releaseContent={<div style={{backgroundColor: "green", height: "200px", textAlign: "center"}}>Release to refresh</div>}
  refreshContent={<div style={{backgroundColor: "yellow", height: "200px", textAlign: "center"}}>Refreshing</div>}
  pullDownThreshold={200}
  onRefresh={this.onRefresh}
>
  <div style={{height: "150vh", textAlign: "center"}}>
    <div>PullToRefresh</div>
  </div>
</PullToRefresh>
```

## Contributing
`npm run dev`
