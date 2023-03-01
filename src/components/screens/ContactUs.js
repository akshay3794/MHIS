import React,{Component} from "react";
import { Image, ScrollView, View, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { S, texts } from "../../css";
import { black, green } from "../../utils/colors";
import { CustomText } from "../common/CustomText";
import Header from "../common/Header";
import { Icon } from "../common/icons";
import { logo } from "../common/images_exports";

export default class ContactUs extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={S.hsa}>
                <Header label='Contact Us' onPress={()=>this.props.navigation.goBack()} />
                <ScrollView style={[S.wmax]} contentContainerStyle={{flexGrow: 1}}>
                    <View style={S.sa}>
                        <Image source={logo} style={[S.hp20wp100]} resizeMode='contain' />
                        <View style={[S.rcenter,S.mv15]}>
                            <Icon iconFamily='Ionicons' name='time' size={moderateScale(20)} color={green} />
                            <CustomText text='10:00 AM to 6:00 PM' style={[texts.c14]} />
                        </View>
                        <View style={[S.br5elev,S.p10,S.mv15]}>
                            <View style={[S.rstart,S.mb8]}>
                                <Icon iconFamily='FontAwesome' name='phone' size={moderateScale(25)} color={black} />
                                <CustomText text='Call Us @' style={[texts.c18,texts.fwBold,S.mh10]} />
                            </View>
                            <TouchableOpacity activeOpacity={0.8} style={[S.mb10]} >
                                <CustomText text='Customer Care' style={[texts.c14]} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} >
                                <CustomText text='Holiday Reservation' style={[texts.c14]} />
                            </TouchableOpacity>
                        </View>
                        <View style={[S.br5elev,S.p10,S.mv15]}>
                            <View style={[S.rstart,S.mb8]}>
                                <Icon iconFamily='Ionicons' name='mail' size={moderateScale(25)} color={black} />
                                <CustomText text='Mail Us @' style={[texts.c18,texts.fwBold,S.mh10]} />
                            </View>
                            <TouchableOpacity activeOpacity={0.8} style={[S.mb10]} >
                                <CustomText text='Customer Care' style={[texts.c14]} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} >
                                <CustomText text='Holiday Reservation' style={[texts.c14]} />
                            </TouchableOpacity>
                        </View>
                        <View style={[S.br5elev,S.p10,S.rstart,S.mb8]}>
                            <Icon iconFamily='MaterialCommunityIcons' name='office-building' size={moderateScale(25)} color={black} />
                            <CustomText text='Our Offices' style={[texts.c18,texts.fwBold,S.mh10]} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}