import React,{Component} from 'react';
import {View, Image, StatusBar} from 'react-native';
import {S} from '../../css';
import { black } from '../../utils/colors';
import { logo } from '../common/images_exports';
import Orientation from 'react-native-orientation-locker';

export default class SplashScreen extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        Orientation.lockToPortrait();
        setTimeout(() => {
            this.props.navigation.navigate('Home')
        }, 1000);
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