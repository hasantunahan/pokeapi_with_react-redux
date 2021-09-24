import { Dimensions } from "react-native";

export function getWidth(width){
    return Dimensions.get('window').width*width
}

export function getHeight(height){
    return Dimensions.get('window').height*height
}