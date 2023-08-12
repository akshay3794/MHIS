import React,{Component} from "react";
import { Image, ScrollView, View } from "react-native";
import { S, texts } from "../../css";
import { CustomText } from "../common/CustomText";
import LogoHeader from "../common/LogoHeader";
import { hotel1 } from "../common/images_exports";

export default class AboutUs extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={S.hsa}>
                <LogoHeader from='about' navigation={this.props.navigation} />
                <ScrollView style={S.wmax} contentContainerStyle={[S.p24,{flexGrow:1}]}>
                    <CustomText style={[texts.c18,texts.fwBold,{alignSelf:'center'}]} text={'About Us'} />
                    <Image source={hotel1} style={[S.wmax,S.h180,S.mv10,S.br10]} resizeMode='contain' />
                    <CustomText style={[texts.c14]} text={"Mariot Holidays Inn & Suites provides an exquisite, sophisticated and alluring hotel for every individual that gets connected with us. The unique infrastructure and theme based hotels will be a never before experience for you. Also, these destination hotels have been stationed in such a way that you have easy access to nearby airports and other hotspots.\n"} />
                    <CustomText style={[texts.c14]} text={"MHIS envisions to render avant-garde holistic facilities and has come a long way in this endeavour.\n"} />
                    <CustomText style={[texts.c14]} text={"Our family consists of 300 highly skilled professionals who work persistently to fulfil our customer's desires. MHIS gives you the opportunity to connect with it via multiple membership plans. You get a chance to become part of our rapidly growing family with offers you cannot miss.\n"} />
                    <CustomText style={[texts.c14]} text={"MHIS is spread across the globe with 250 associates and 1,700 ties up properties. Mariot Holidays Inn & Suites has its prime functional head office in New Delhi.\n"} />
                    <CustomText style={[texts.c14,texts.fwBold]} text={"Why OPT FOR Mhis?\n"} />
                    <CustomText style={[texts.c14]} text={"• Exceptional hospitality"} />
                    <CustomText style={[texts.c14]} text={"• Dedicated Staff"} />
                    <CustomText style={[texts.c14]} text={"• Customised tours and Awe-inspiring hotels"} />
                    <CustomText style={[texts.c14]} text={"• 100% client satisfaction"} />
                    <CustomText style={[texts.c14]} text={"• Wide network"} />
                    <CustomText style={[texts.c14]} text={"• Domestic and International services"} />
                    <CustomText style={[texts.c14]} text={"• Within your Budget"} />
                </ScrollView>
            </View>
        )
    }
}