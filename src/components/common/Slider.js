import React,{PureComponent} from "react";
import { Dimensions } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import FastImage from 'react-native-fast-image'
import { S } from "../../css";
import { black, grayBorder, orange } from "../../utils/colors";
import { moderateScale } from "react-native-size-matters";

let width = Dimensions.get('window').width - moderateScale(50)

export default class Slider extends PureComponent {
    constructor(props) {
      super(props);
    }

    render(){
        return(
            <SliderBox
                // ImageComponent={FastImage}
                ImageComponentStyle={[S.mt10,S.br15]}
                imageLoadingColor={black}
                sliderBoxHeight={200}
                parentWidth={width}
                images={this.props.images}
                autoplay
                circleLoop
                resizeMode='contain'
                dotColor={orange}
                inactiveDotColor={grayBorder}
            />
        )
    }
}