import { Dimensions } from "react-native";

export function getWidth(width){
    return Dimensions.get('screen').width*width
}

export function getHeight(height){
    return Dimensions.get('screen').height*height
}