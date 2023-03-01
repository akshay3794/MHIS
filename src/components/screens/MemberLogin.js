import React,{Component} from "react";
import {ScrollView, TouchableOpacity, View} from 'react-native';
import { S, texts } from "../../css";
import Button from "../common/button";
import { CustomInput } from "../common/customInput";
import { CustomText } from "../common/CustomText";
import Header from "../common/Header";

export default class MemberLogin extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            secure_entry:true
        }
    }

    render(){
        return(
            <View style={S.hsa}>
                <Header label='Member Login' onPress={()=>this.props.navigation.pop()}/>
                <ScrollView style={S.wmax} contentContainerStyle={[{flex:1},S.p24]}>
                    <CustomText text='Email' style={[texts.c12,S.mv8]} />
                    <CustomInput
                        placeholder='abc@xyz.com'
                        keyboardType="email-address"
                        autoCapitalize='none'
                        onChangeText={text => this.setState({email: text})}
                        value={this.state.email}
                    />
                    <CustomText text='Password' style={[texts.c12,S.mv8]} />
                    <CustomInput
                        placeholder='********'
                        keyboardType="default"
                        autoCapitalize='none'
                        secure_entry={this.state.secure_entry}
                        onChangeText={text => this.setState({password: text})}
                        value={this.state.password}
                        onEyePress={() => this.setState({secure_entry: !this.state.secure_entry})}
                        showEye={true}
                    />
                    <TouchableOpacity style={[S.mb30,{alignSelf:'flex-end'}]}>
                        <CustomText style={[texts.b12,texts.red]} text='Forgot Password' />
                    </TouchableOpacity>
                    <Button buttonText='Continue' onPress={()=>console.log('hi')} />
                </ScrollView>
            </View>
        )
    }
}