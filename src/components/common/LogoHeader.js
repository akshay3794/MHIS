import React,{PureComponent} from "react";
import {TouchableOpacity, View, Image} from 'react-native'
import { styles } from "../../css";
import { moderateScale } from "react-native-size-matters";
import { white } from "../../utils/colors";
import { Icon } from "./icons";
import { logo } from "./images_exports";

export default class LogoHeader extends PureComponent{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.header}>
                {this.props.from==='home'?
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>this.props.navigation.openDrawer()}>
                        <Icon color={white} size={moderateScale(20)} iconFamily="Ionicons" name="menu-outline" />
                    </TouchableOpacity>
                :
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>this.props.navigation.goBack()}>
                        <Icon iconFamily='AntDesign' name='arrowleft' size={moderateScale(20)} color={white} />
                    </TouchableOpacity>
                }
                <Image source={logo} style={styles.headerLogo} resizeMode='contain' />
                <View style={{width:moderateScale(30)}} />
            </View>
        )
    }
}