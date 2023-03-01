import React,{Component} from 'react'
import { TouchableOpacity, Image, Alert, View } from 'react-native'
import { Icon } from './icons';
import { CustomText } from './CustomText';
import { S,texts } from '../../css';
import { profilePic } from './images_exports';
import { inputLabel } from '../../utils/colors';

export default class SideMenu extends Component{
    constructor(props){
        super(props)
    }

    onLogoutPress(){
        Alert.alert(
            'Bliss','Are you sure?',
            [
                {
                    text: 'Yes',
                    onPress: () => console.log('hi')
                },
                {
                    text: 'No',
                    style: 'cancel',
                }
            ]
        )
    }

    pressHandler(){
        this.props.navigation.closeDrawer();
        this.props.navigation.push('Profile')
    }

    render(){
        return(
            <View style={[S.sa]}>
                <View style={[S.wmax,S.acenter,S.mb10]}>
                    <Image source={profilePic} style={{height: 120,width: 120,borderRadius: 95}}/>
                </View>
                <TouchableOpacity onPress={()=>this.pressHandler()} style={[S.pv10,S.rstart]} activeOpacity={0.8}>
                    <Icon name={'person'} iconFamily="Ionicons" color={inputLabel} size={22} />
                    <CustomText style={[texts.w14, S.ml10, texts.black]} text="Profile" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.onLogoutPress()} style={[S.pv10,S.rstart]} activeOpacity={0.8}>
                    <Icon name='logout' iconFamily="AntDesign" color={inputLabel} size={22} />
                    <CustomText style={[texts.w14, S.ml10, texts.black]} text="Logout" />
                </TouchableOpacity>
            </View>
        )
    }
}