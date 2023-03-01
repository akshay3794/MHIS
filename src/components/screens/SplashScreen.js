import React,{Component} from 'react';
import {View, Image, StatusBar} from 'react-native';
import { S, texts } from '../../css';
import { black } from '../../utils/colors';
import { CustomText } from '../common/CustomText';
import { logo } from '../common/images_exports';

export default class SplashScreen extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('HomeScreen')
        }, 3000);
    }

    render(){
        return(
            <View style={[S.hsa,S.cc]}>
                <StatusBar barStyle={'dark-content'} backgroundColor={black} />
                <Image source={logo} resizeMode='contain' style={S.hp50wp90} />
            </View>
        )
    }
}