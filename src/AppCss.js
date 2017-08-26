import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "area-search-app-header": {
        "backgroundColor": "#b3b3b3",
        "height": 70
    },
    "area-search-app-header h2": {
        "textAlign": "center"
    },
    "area-search-app-body": {
        "backgroundColor": "#f4f4f4"
    }
});