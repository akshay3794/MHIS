import {Platform, StyleSheet} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { black, inputBackground, orange, white } from '../utils/colors';
export const style = StyleSheet.create({
     header:{
          height:Platform.OS=='ios'?moderateScale(80):moderateScale(60),
          width:'100%',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
          elevation:4,
          backgroundColor:black,
     },
     headerLogo:{
          width:'100%',
          height: moderateScale(50),
     },
     inputText: {
          width: '100%',
          height: moderateScale(40),
          backgroundColor: inputBackground,
          borderRadius: moderateScale(12),
          paddingHorizontal: moderateScale(12),
          flexDirection: 'column',
          justifyContent: 'center',
          marginBottom:moderateScale(8)
     },
     btnShell: {
          backgroundColor: orange,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: moderateScale(12),
          height: moderateScale(40),
     },
     homeCard:{
          width:'45%',
          height:moderateScale(120),
          alignItems:'center',
          justifyContent:'space-around',
          backgroundColor:white,
          elevation:2,
          borderRadius:moderateScale(5)
     },
     cardImage:{
          width:moderateScale(60),
          height:moderateScale(60)
     },
     propertyCard:{
          width:'100%',
          height: moderateScale(240),
          borderRadius:moderateScale(12),
          elevation:3,
          marginBottom: moderateScale(12),
     },
});
