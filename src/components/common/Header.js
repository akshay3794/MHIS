import React,{PureComponent} from "react";
import {TouchableOpacity, View} from 'react-native'
import { S, texts } from "../../css";
import { moderateScale } from "react-native-size-matters";
import { white } from "../../utils/colors";
import { CustomText } from "./CustomText";
import { Icon } from "./icons";

export default class Header extends PureComponent{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={[S.wmax,S.headerHeight,S.rbetween,S.ph5,S.bb]}>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>this.props.onPress()}>
                    <Icon iconFamily='AntDesign' name='arrowleft' size={moderateScale(20)} color={white} />
                </TouchableOpacity>
                <CustomText text={this.props.label} style={[texts.w16]} />
                <View style={{width:moderateScale(20)}} />
            </View>
        )
    }
}