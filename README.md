# react-js-pull-to-refresh

Pull to refresh with react
 > Support all mobile(iOS, Android) and Desktop browser (Chrome, Safari, firefox, Opera, QQ, UC, ... etc)


[![npm version](https://badge.fury.io/js/react-js-pull-to-refresh.svg)](https://badge.fury.io/js/react-js-pull-to-refresh)
[![license](https://img.shields.io/github/license/echoulen/react-js-pull-to-refresh.svg)](https://opensource.org/licenses/MIT)
[![codebeat badge](https://codebeat.co/badges/3be54568-d7c5-4cc2-b5a4-8eae143b4dbf)](https://codebeat.co/projects/github-com-echoulen-react-pull-to-refresh-master)

![](https://media.giphy.com/media/xT1R9LCrbpOJ4J7HoI/giphy.gif)

## Demo
[See the demo in action at https://echoulen.github.io/react-pull-to-refresh/](https://echoulen.github.io/react-pull-to-refresh/)

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
|triggerHeight|number|false|
|backgroundColor|string|false|

## Usage

#### import PullToRefresh
```js
import {PullToRefresh} from "react-js-pull-to-refresh";
```

#### import default content (optional)
```typescript
import {PullDownContent, ReleaseContent, RefreshContent} from "react-js-pull-to-refresh";
```


#### Sample
```jsx
<PullToRefresh
  pullDownContent={<PullDownContent />}
  releaseContent={<ReleaseContent />}
  refreshContent={<RefreshContent />}
  pullDownThreshold={200}
  onRefresh={this.onRefresh}
  triggerHeight={50}
  backgroundColor='white'
>
  <div style={{height: '150vh', textAlign: 'center'}}>
    <div>PullToRefresh</div>
  </div>
</PullToRefresh>
```

### Sample code in typescript
[Link](https://github.com/echoulen/react-pull-to-refresh/blob/master/examples/Basic.tsx)

## Contributing
`npm run dev`
