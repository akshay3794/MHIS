import React,{Component} from "react";
import { Image, ScrollView, View } from "react-native";
import { S, texts } from "../../css";
import LogoHeader from "../common/LogoHeader";
import { CustomText } from "../common/CustomText";
import { membershipImage } from "../common/images_exports";

export default class Membership extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={S.hsa}>
                <LogoHeader from='membership' navigation={this.props.navigation} />
                <ScrollView style={S.wmax} contentContainerStyle={[S.p24,{flexGrow:1}]}>
                    <CustomText style={[texts.c18,texts.fwBold,{alignSelf:'center'}]} text='OUR MEMBERSHIP PLANS' />
                    <Image source={membershipImage} style={[S.wmax,S.h180,S.mv10]} resizeMode='contain' />
                    <CustomText style={[texts.c14]} text={"Confused which hotel will provide you the best services? Well, you don't have to worry anymore, because you have landed at the right place. Mariot holidays inn suites is everything that the customers' desire.\n"} />
                    <CustomText style={[texts.c14]} text={"Exceptional holiday packages with affordable prices. A one-stop destination for all your exotic vacation needs.\n"} />
                    <CustomText style={[texts.c14]} text={"Mariot holidays inn suites assures you a fully equipped rooms with all modern facility that lets you have a fabulous holiday trip. Come along with us if you need a break from your ordinary lifestyle. We are here for you.\n"} />
                    <CustomText style={[texts.c14,texts.fwBold]} text={"Highlights Of mariot holidays Travel Membership Plan\n"} />
                    <CustomText style={[texts.c14]} text={"1. 25 years premium holidays membership available\n"} />
                    <CustomText style={[texts.c14]} text={"2. 6N/7D at 500+ destinations (domestic & international)\n"} />
                    <CustomText style={[texts.c14]} text={"3. Diverse indoor and outdoor activities.\n"} />
                    <CustomText style={[texts.c14]} text={"4. Free movie tickets, flight assistance, attractive holiday packages and other such vouchers for our members.\n"} />
                    <CustomText style={[texts.c14]} text={"5. Smooth pickup & drop facilities with nominal charges."} />
                </ScrollView>
            </View>
        )
    }
}