import React,{Component} from "react";
import { View } from "react-native";
import { S, texts } from "../../css";
import { CustomText } from "./CustomText";
import Header from "./Header";
import { hotel1, hotel2, hotel3,hotel4 } from "./images_exports";
import Slider from "./Slider";

export default class SingleProperty extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={S.hsa}>
                <Header label='Four point by sheroton' onPress={()=>this.props.navigation.pop()} />
                <View style={S.sa}>
                    <View style={[S.wmax]}>
                        <Slider
                            images={[hotel1,hotel2,hotel3,hotel4]}
                        />
                    </View>
                    <CustomText style={[texts.c14,S.mv15]} text="Set 4.8 km from Indira Gandhi International Airport, this upscale hotel surrounded by lawns and gardens is 12 km from Chhatarpur Temple and 16 km from the Connaught Place business district.
Modern rooms have hardwood floors, free Wi-Fi and 40-inch flat-screen TVs, as well as minibars, and tea and coffeemaking facilities. Upgraded rooms include sitting areas and/or pool views. Room service is available 24/7.
Breakfast and parking are complimentary. There's a casual international restaurant with floor-to-ceiling windows, and a streamlined bar. Other amenities include a fitness room and an outdoor pool." />
                    <CustomText style={[texts.c14,texts.fwBold]} text='Location'/>
                    <CustomText style={[texts.c14,S.mv15]} text="Plot No 9, National Highway - 8, Samalka, New Delhi, Delhi 110037" />
                </View>
            </View>
        )
    }
}