import React,{Component} from "react";
import { View,Image, TouchableOpacity, StatusBar, ScrollView } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { S, styles, texts } from "../../css";
import { black } from "../../utils/colors";
import { CustomText } from "../common/CustomText";
import { Icon } from "../common/icons";
import { logo, hotel, membership, login, aboutUs, contactUs, hotel1, hotel3, hotel4, hotel2 } from "../common/images_exports";
import Slider from "../common/Slider";
import Geolocation from '@react-native-community/geolocation';

export default class HomeScreen extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        Geolocation.getCurrentPosition(info => console.log(info));
    }

    render(){
        return(
            <View style={S.hsa}>
                <StatusBar backgroundColor={black} barStyle='light-content' />
                <View style={styles.header}>
                    <Image source={logo} style={styles.headerLogo} resizeMode='contain' />
                </View>
                <ScrollView style={S.wmax} showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow:1}}>
                    <View style={S.sa}>
                        <View style={[S.wmax,S.mb15]}>
                            <Slider
                                images={[hotel1,hotel2,hotel3,hotel4]}
                            />
                        </View>
                        <View style={[S.rbetween,S.mb15]}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Properties')} style={styles.homeCard} activeOpacity={0.8}>
                                <Icon color={black} size={moderateScale(60)} iconFamily="FontAwesome" name="building" />
                                <CustomText text='Properties' style={[texts.b16,texts.orng,texts.fw600]} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.homeCard} activeOpacity={0.8}>
                                <Icon color={black} size={moderateScale(60)} iconFamily="FontAwesome" name="vcard" />
                                <CustomText text='Membership' style={[texts.b16,texts.orng]} />
                            </TouchableOpacity>
                        </View>
                        <View style={[S.rbetween,S.mb30]}>
                            <TouchableOpacity style={styles.homeCard} activeOpacity={0.8}>
                                <Icon color={black} size={moderateScale(60)} iconFamily="Entypo" name="location-pin" />
                                <CustomText text='Locations' style={[texts.b16,texts.orng]} />
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.homeCard]}>
                                <Icon color={black} size={moderateScale(60)} iconFamily="MaterialIcons" name="payment" />
                                <CustomText text='Payment' style={[texts.b16,texts.orng]} />
                            </TouchableOpacity>
                        </View>
                        <View style={S.rbetween}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ContactUs')} style={styles.homeCard} activeOpacity={0.8}>
                                <Icon color={black} size={moderateScale(60)} iconFamily="MaterialCommunityIcons" name="headphones" />
                                <CustomText text='Contact Us' style={[texts.b16,texts.orng]} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('AboutUs')} style={styles.homeCard} activeOpacity={0.8}>
                                <Icon color={black} size={moderateScale(60)} iconFamily="Entypo" name="info-with-circle" />
                                <CustomText text='About Us' style={[texts.b16,texts.orng]} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
