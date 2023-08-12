import React,{PureComponent} from "react";
import { Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { ImageSlider } from "react-native-image-slider-banner";
import { orange, white } from "../../utils/colors";

let width = Dimensions.get('window').width - moderateScale(50)

export default class Slider extends PureComponent {
    constructor(props) {
      super(props);
    }

    render(){
        return(
            <ImageSlider 
                data={this.props.images}
                autoPlay={true}
                localImg={this.props.localImg}
                activeIndicatorStyle={{backgroundColor:orange}}
                inActiveIndicatorStyle={{backgroundColor:white}}
            />
        )
    }
}