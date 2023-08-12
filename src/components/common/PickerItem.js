import React,{PureComponent} from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "./icons";
import { CustomText } from "./CustomText";
import { S, styles, texts } from "../../css";
import { orange } from "../../utils/colors";
import { moderateScale } from "react-native-size-matters";

export default class PickerItem extends PureComponent{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <TouchableOpacity style={styles.pickerItem} activeOpacity={0.8} onPress={()=>this.props.onItemPress(this.props.title)}>
                <CustomText style={[texts.c14,S.astart]} text={this.props.title}/>
                {this.props.title === this.props.selected?
                    <Icon name="check" iconFamily="AntDesign" color={orange} size={moderateScale(15)} />
                :
                    null
                }
            </TouchableOpacity>
        )
    }
}