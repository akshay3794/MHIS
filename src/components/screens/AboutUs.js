import React,{Component} from "react";
import { ScrollView, View } from "react-native";
import { S, texts } from "../../css";
import { about } from "../../utils/aboutText";
import { CustomText } from "../common/CustomText";
import Header from "../common/Header";

export default class AboutUs extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={S.hsa}>
                <Header label='About Us' onPress={()=>this.props.navigation.pop()} />
                <ScrollView style={S.wmax} contentContainerStyle={[S.p24,{flexGrow:1}]}>
                    <CustomText style={[texts.c14,texts.taj]} text={about} />
                </ScrollView>
            </View>
        )
    }
}