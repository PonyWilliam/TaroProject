
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "login": {
    "width": "60%",
    "marginTop": 0,
    "marginRight": "20%",
    "marginBottom": 0,
    "marginLeft": "20%"
  },
  "flex": {
    "display": "flex"
  },
  "flex__direction--row": {
    "flexDirection": "row"
  },
  "flex__direction--column": {
    "flexDirection": "column"
  },
  "flex__direction--row-reverse": {
    "flexDirection": "row-reverse"
  },
  "flex__direction--column-reverse": {
    "flexDirection": "column-reverse"
  },
  "flex__align--start": {
    "alignItems": "flex-start",
    "WebkitBoxAlign": "start"
  },
  "flex__align--end": {
    "alignItems": "flex-end",
    "WebkitBoxAlign": "end"
  },
  "flex__align--center": {
    "alignItems": "center",
    "WebkitBoxAlign": "center"
  },
  "flex__align--stretch": {
    "alignItems": "stretch",
    "WebkitBoxAlign": "stretch"
  },
  "flex__align--baseline": {
    "alignItems": "baseline",
    "WebkitBoxAlign": "baseline"
  },
  "flex__justify--start": {
    "justifyContent": "flex-start",
    "WebkitBoxPack": "start"
  },
  "flex__justify--end": {
    "justifyContent": "flex-end",
    "WebkitBoxPack": "end"
  },
  "flex__justify--center": {
    "justifyContent": "center",
    "WebkitBoxPack": "center"
  },
  "flex__justify--between": {
    "justifyContent": "space-between",
    "WebkitBoxPack": "justify"
  },
  "flex__justify--around": {
    "justifyContent": "space-around",
    "WebkitBoxPack": "space-around"
  },
  "flex__align-content--start": {
    "alignContent": "flex-start"
  },
  "flex__align-content--end": {
    "alignContent": "flex-end"
  },
  "flex__align-content--center": {
    "alignContent": "center"
  },
  "flex__align-content--between": {
    "alignContent": "space-between"
  },
  "flex__align-content--around": {
    "alignContent": "space-around"
  },
  "flex__align-content--stretch": {
    "alignContent": "stretch"
  },
  "flex--no-wrap": {
    "flexWrap": "nowrap"
  },
  "flex--wrap": {
    "flexWrap": "wrap"
  },
  "flex--wrap-reverse": {
    "flexWrap": "wrap-reverse"
  },
  "search": {
    "backgroundColor": "#FFF",
    "borderRadius": scalePx2dp(6),
    "marginTop": 0,
    "marginRight": scalePx2dp(12),
    "marginBottom": 0,
    "marginLeft": scalePx2dp(12),
    "paddingTop": 0,
    "paddingRight": scalePx2dp(12),
    "paddingBottom": 0,
    "paddingLeft": scalePx2dp(12),
    "position": "relative",
    "bottom": scalePx2dp(20),
    "shadowOffset": {
      "width": 0,
      "height": scalePx2dp(2)
    },
    "shadowRadius": scalePx2dp(4),
    "shadowColor": "rgba(0, 0, 0, 0.13)",
    "shadowOpacity": 1
  }
})
