import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "submit_error_div": {
        "color": "red",
        "display": "none"
    },
    "show-div": {
        "display": "block"
    },
    "area-search-app-body-enter-details": {
        "textAlign": "center",
        "border": "1px solid black",
        "minHeight": 130,
        "paddingTop": 22,
        "paddingBottom": 28,
        "marginTop": 100,
        "marginBottom": 450
    },
    "display_response_message": {
        "textAlign": "center",
        "paddingTop": 10
    },
    "go_back_button": {
        "marginLeft": "46%",
        "marginBottom": 50
    }
});