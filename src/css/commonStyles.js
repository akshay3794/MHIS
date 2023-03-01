import {Platform, StyleSheet} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {black, subtleBorder, white} from '../utils/colors';
export const commonStyles = StyleSheet.create({
     t: {
          borderWidth: 1,
          backgroundColor: subtleBorder,
     },
     flx: {
          flex: 1,
     },
     headerHeight:{
          height:Platform.OS==='android'?moderateScale(60):moderateScale(80)
     },
     abs: {
          position: 'absolute',
     },
     sa: {
          backgroundColor: white,
          height: '100%',
          padding: moderateScale(24),
     },
     hsa: {
          backgroundColor: white,
          height: '100%',
          width:'100%'
     },
     hmax: {
          height: '100%',
     },
     wmax: {
          width: '100%',
     },
     h5: {
          height: moderateScale(5),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h10: {
          height: moderateScale(10),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h15: {
          height: moderateScale(15),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h20: {
          height: moderateScale(20),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h25: {
          height: moderateScale(25),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h30: {
          height: moderateScale(30),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h35: {
          height: moderateScale(35),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h40: {
          height: moderateScale(40),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h45: {
          height: moderateScale(45),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h50: {
          height: moderateScale(50),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h55: {
          height: moderateScale(55),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h60: {
          height: moderateScale(60),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h65: {
          height: moderateScale(65),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h70: {
          height: moderateScale(70),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h75: {
          height: moderateScale(75),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h80: {
          height: moderateScale(80),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h85: {
          height: moderateScale(85),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h90: {
          height: moderateScale(90),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h95: {
          height: moderateScale(95),
          alignItems: 'center',
          justifyContent: 'center',
     },

     // Heights from 100 to 200
     h100: {
          height: moderateScale(100),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h110: {
          height: moderateScale(110),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h120: {
          height: moderateScale(120),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h130: {
          height: moderateScale(130),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h140: {
          height: moderateScale(140),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h150: {
          height: moderateScale(150),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h160: {
          height: moderateScale(160),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h170: {
          height: moderateScale(170),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h180: {
          height: moderateScale(180),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h190: {
          height: moderateScale(190),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h200: {
          height: moderateScale(200),
          alignItems: 'center',
          justifyContent: 'center',
     },

     // Heights from 210 to 300
     h210: {
          height: moderateScale(210),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h220: {
          height: moderateScale(220),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h230: {
          height: moderateScale(230),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h240: {
          height: moderateScale(240),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h250: {
          height: moderateScale(250),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h260: {
          height: moderateScale(260),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h270: {
          height: moderateScale(270),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h280: {
          height: moderateScale(280),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h290: {
          height: moderateScale(290),
          alignItems: 'center',
          justifyContent: 'center',
     },

     // Heights from 300 to 400
     h300: {
          height: moderateScale(300),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h310: {
          height: moderateScale(310),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h320: {
          height: moderateScale(320),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h330: {
          height: moderateScale(330),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h340: {
          height: moderateScale(340),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h350: {
          height: moderateScale(350),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h360: {
          height: moderateScale(360),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h370: {
          height: moderateScale(370),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h380: {
          height: moderateScale(380),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h390: {
          height: (390),
          alignItems: 'center',
          justifyContent: 'center',
     },
     h400: {
          height: moderateScale(400),
          alignItems: 'center',
          justifyContent: 'center',
     },

     // Heights in Percentages
     hp5: {
          height: '5%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp10: {
          height: '10%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp15: {
          height: '15%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp20: {
          height: '20%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp25: {
          height: '25%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp30: {
          height: '30%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp35: {
          height: '35%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp40: {
          height: '40%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp45: {
          height: '45%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp50: {
          height: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp55: {
          height: '55%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp60: {
          height: '60%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp65: {
          height: '65%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp70: {
          height: '70%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp75: {
          height: '75%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp80: {
          height: '80%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp85: {
          height: '85%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp90: {
          height: '90%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp95: {
          height: '95%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp100: {
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },

     // Heights with Width 100%
     // Heights from 5 to 100
     h5wp100: {
          height: moderateScale(5),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h10wp100: {
          height: moderateScale(10),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h15wp100: {
          height: moderateScale(15),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h20wp100: {
          height: moderateScale(20),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h25wp100: {
          height: moderateScale(25),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h30wp100: {
          height: moderateScale(30),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h35wp100: {
          height: moderateScale(35),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h40wp100: {
          height: moderateScale(40),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h45wp100: {
          height: moderateScale(45),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h50wp100: {
          height: moderateScale(50),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h55wp100: {
          height: moderateScale(55),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h60wp100: {
          height: moderateScale(60),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h65wp100: {
          height: moderateScale(65),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h70wp100: {
          height: moderateScale(70),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h75wp100: {
          height: moderateScale(75),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h80wp100: {
          height: moderateScale(80),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h85wp100: {
          height: moderateScale(85),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h90wp100: {
          height: moderateScale(90),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h95wp100: {
          height: moderateScale(95),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },

     // Heights from 100 to 200
     h100wp100: {
          height: moderateScale(100),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h110wp100: {
          height: moderateScale(110),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h120wp100: {
          height: moderateScale(120),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h130wp100: {
          height: moderateScale(130),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h140wp100: {
          height: moderateScale(140),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h150wp100: {
          height: moderateScale(150),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h160wp100: {
          height: moderateScale(160),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h170wp100: {
          height: moderateScale(170),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h180wp100: {
          height: moderateScale(180),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h190wp100: {
          height: moderateScale(190),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h200wp100: {
          height: moderateScale(200),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },

     // Heights from 200 to 300
     h200wp100: {
          height: moderateScale(200),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h210wp100: {
          height: moderateScale(210),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h220wp100: {
          height: moderateScale(220),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h230wp100: {
          height: moderateScale(230),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h240wp100: {
          height: moderateScale(240),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h250wp100: {
          height: moderateScale(250),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h260wp100: {
          height: moderateScale(260),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h270wp100: {
          height: moderateScale(270),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h280wp100: {
          height: moderateScale(280),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h290wp100: {
          height: moderateScale(290),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },

     // Heights from 300 to 400
     h300wp100: {
          height: moderateScale(300),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h310wp100: {
          height: moderateScale(310),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h320wp100: {
          height: moderateScale(320),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h330wp100: {
          height: moderateScale(330),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h340wp100: {
          height: moderateScale(340),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h350wp100: {
          height: moderateScale(350),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h360wp100: {
          height: moderateScale(360),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h370wp100: {
          height: moderateScale(370),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h380wp100: {
          height: moderateScale(380),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h390wp100: {
          height: moderateScale(390),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h400wp100: {
          height: moderateScale(400),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },

     // Heights in Percentages
     hp5wp100: {
          height: '5%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp10wp100: {
          height: '10%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp15wp100: {
          height: '15%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp20wp100: {
          height: '20%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp25wp100: {
          height: '25%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp30wp100: {
          height: '30%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp35wp100: {
          height: '35%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp40wp100: {
          height: '40%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp45wp100: {
          height: '45%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp50wp100: {
          height: '50%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp55wp100: {
          height: '55%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp60wp100: {
          height: '60%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp65wp100: {
          height: '65%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp70wp100: {
          height: '70%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp75wp100: {
          height: '75%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp80wp100: {
          height: '80%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp85wp100: {
          height: '85%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp90wp100: {
          height: '90%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp95wp100: {
          height: '95%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp100wp100: {
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp50wp90: {
          height: '50%',
          width: '90%',
          alignItems: 'center',
          justifyContent: 'center',
     },

     //   Heights with 50% Width
     //   Heights from 5 to 100
     h5wp50: {
          height: moderateScale(5),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h10wp50: {
          height: moderateScale(10),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h15wp50: {
          height: moderateScale(15),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h20wp50: {
          height: moderateScale(20),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h25wp50: {
          height: moderateScale(25),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h30wp50: {
          height: moderateScale(30),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h35wp50: {
          height: moderateScale(35),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h40wp50: {
          height: moderateScale(40),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h45wp50: {
          height: moderateScale(45),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h50wp50: {
          height: moderateScale(50),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h55wp50: {
          height: moderateScale(55),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h60wp50: {
          height: moderateScale(60),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h65wp50: {
          height: moderateScale(65),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h70wp50: {
          height: moderateScale(70),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h75wp50: {
          height: moderateScale(75),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h80wp50: {
          height: moderateScale(80),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h85wp50: {
          height: moderateScale(85),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h90wp50: {
          height: moderateScale(90),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h95wp50: {
          height: moderateScale(95),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },

     // Heights from 100 to 200
     h100wp50: {
          height: moderateScale(100),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h110wp50: {
          height: moderateScale(110),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h120wp50: {
          height: moderateScale(120),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h130wp50: {
          height: moderateScale(130),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h140wp50: {
          height: moderateScale(140),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h150wp50: {
          height: moderateScale(150),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h160wp50: {
          height: moderateScale(160),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h170wp50: {
          height: moderateScale(170),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h180wp50: {
          height: moderateScale(180),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h190wp50: {
          height: moderateScale(190),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h200wp50: {
          height: moderateScale(200),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },

     // Heights from 200 to 300
     h200wp50: {
          height: moderateScale(200),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h210wp50: {
          height: moderateScale(210),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h220wp50: {
          height: moderateScale(220),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h230wp50: {
          height: moderateScale(230),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h240wp50: {
          height: moderateScale(240),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h250wp50: {
          height: moderateScale(250),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h260wp50: {
          height: moderateScale(260),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h270wp50: {
          height: moderateScale(270),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h280wp50: {
          height: moderateScale(280),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h290wp50: {
          height: moderateScale(290),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },

     // Heights from
     h300wp50: {
          height: moderateScale(300),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h310wp50: {
          height: moderateScale(310),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h320wp50: {
          height: moderateScale(320),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h330wp50: {
          height: moderateScale(330),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h340wp50: {
          height: moderateScale(340),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h350wp50: {
          height: moderateScale(350),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h360wp50: {
          height: moderateScale(360),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h370wp50: {
          height: moderateScale(370),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h380wp50: {
          height: moderateScale(380),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h390wp50: {
          height: moderateScale(390),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     h400wp50: {
          height: moderateScale(400),
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },

     // Heights in Percentages
     hp5wp50: {
          height: '5%',
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp10wp50: {
          height: '10%',
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp15wp50: {
          height: '15%',
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp20wp50: {
          height: '20%',
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp25wp50: {
          height: '25%',
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp30wp50: {
          height: '30%',
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp35wp50: {
          height: '35%',
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp40wp50: {
          height: '40%',
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp45wp50: {
          height: '45%',
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp50wp50: {
          height: '50%',
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp55wp50: {
          height: '55%',
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp60wp50: {
          height: '60%',
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp65wp50: {
          height: '65%',
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp70wp50: {
          height: '70%',
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp75wp50: {
          height: '75%',
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp80wp50: {
          height: '80%',
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp85wp50: {
          height: '85%',
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp90wp50: {
          height: '90%',
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp95wp50: {
          height: '95%',
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     hp100wp50: {
          height: '100%',
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },

     //   WIDTH
     //   Width from 5 to 100
     w5: {
          width: moderateScale(5),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w10: {
          width: moderateScale(10),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w15: {
          width: moderateScale(15),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w20: {
          width: moderateScale(20),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w25: {
          width: moderateScale(25),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w30: {
          width: moderateScale(30),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w35: {
          width: moderateScale(35),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w40: {
          width: moderateScale(40),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w45: {
          width: moderateScale(45),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w50: {
          width: moderateScale(50),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w55: {
          width: moderateScale(55),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w60: {
          width: moderateScale(60),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w65: {
          width: moderateScale(65),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w70: {
          width: moderateScale(70),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w75: {
          width: moderateScale(75),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w80: {
          width: moderateScale(80),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w85: {
          width: moderateScale(85),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w90: {
          width: moderateScale(90),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w95: {
          width: moderateScale(95),
          alignItems: 'center',
          justifyContent: 'center',
     },

     // widths from 100 to 200
     w100: {
          width: moderateScale(100),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w110: {
          width: moderateScale(110),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w120: {
          width: moderateScale(120),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w130: {
          width: moderateScale(130),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w140: {
          width: moderateScale(140),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w150: {
          width: moderateScale(150),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w160: {
          width: moderateScale(160),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w170: {
          width: moderateScale(170),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w180: {
          width: moderateScale(180),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w190: {
          width: moderateScale(190),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w200: {
          width: moderateScale(200),
          alignItems: 'center',
          justifyContent: 'center',
     },

     // widths from 210 to 300
     w210: {
          width: moderateScale(210),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w220: {
          width: moderateScale(220),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w230: {
          width: moderateScale(230),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w240: {
          width: moderateScale(240),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w250: {
          width: moderateScale(250),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w260: {
          width: moderateScale(260),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w270: {
          width: moderateScale(270),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w280: {
          width: moderateScale(280),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w290: {
          width: moderateScale(290),
          alignItems: 'center',
          justifyContent: 'center',
     },

     // widths from 300 to 400
     w300: {
          width: moderateScale(300),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w310: {
          width: moderateScale(310),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w320: {
          width: moderateScale(320),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w330: {
          width: moderateScale(330),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w340: {
          width: moderateScale(340),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w350: {
          width: moderateScale(350),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w360: {
          width: moderateScale(360),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w370: {
          width: moderateScale(370),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w380: {
          width: moderateScale(380),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w390: {
          width: moderateScale(390),
          alignItems: 'center',
          justifyContent: 'center',
     },
     w400: {
          width: moderateScale(400),
          alignItems: 'center',
          justifyContent: 'center',
     },

     // widths in Percentages
     wp5: {
          width: '5%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     wp10: {
          width: '10%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     wp15: {
          width: '15%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     wp20: {
          width: '20%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     wp25: {
          width: '25%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     wp30: {
          width: '30%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     wp35: {
          width: '35%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     wp40: {
          width: '40%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     wp45: {
          width: '45%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     wp50: {
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     wp55: {
          width: '55%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     wp60: {
          width: '60%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     wp65: {
          width: '65%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     wp70: {
          width: '70%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     wp75: {
          width: '75%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     wp80: {
          width: '80%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     wp85: {
          width: '85%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     wp90: {
          width: '90%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     wp95: {
          width: '95%',
          alignItems: 'center',
          justifyContent: 'center',
     },
     wp100: {
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
     },

     // Templates
     cc: {
          alignItems: 'center',
          justifyContent: 'center',
     },
     start: {
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
     },

     // With FlexDirection: 'row'
     rcenter: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
     },
     rstart: {
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
     },
     rend: {
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
     },
     rbetween: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
     },
     raround: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
     },
     revenly: {
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
     },

     // With FlexDirection: 'column '
     cstart: {
          justifyContent: 'flex-start',
     },
     cend: {
          justifyContent: 'flex-end',
     },
     cbetween: {
          justifyContent: 'space-between',
     },
     caround: {
          justifyContent: 'space-around',
     },
     cevenly: {
          justifyContent: 'space-evenly',
     },

     //   Align Items
     astart: {
          alignItems: 'flex-start',
     },
     acenter: {
          alignItems: 'center',
     },
     aend: {
          alignItems: 'flex-end',
     },

     //   Padding and Margin

     //   Padding
     //   Padding Overall
     p0: {
          padding: 0,
     },
     p2: {
          padding: moderateScale(2),
     },
     p3: {
          padding: moderateScale(3),
     },
     p5: {
          padding: moderateScale(5),
     },
     p10: {
          padding: moderateScale(10),
     },
     p12: {
          padding: moderateScale(12),
     },
     p15: {
          padding: moderateScale(15),
     },
     p20: {
          padding: moderateScale(20),
     },
     p24: {
          padding: moderateScale(24),
     },
     p25: {
          padding: moderateScale(25),
     },
     p30: {
          padding: moderateScale(30),
     },
     p40: {
          padding: moderateScale(40),
     },
     p50: {
          padding: moderateScale(50),
     },

     //   Padding Top
     pt0: {
          paddingTop: 0,
     },
     pt2: {
          paddingTop: moderateScale(2),
     },
     pt3: {
          paddingTop: moderateScale(3),
     },
     pt5: {
          paddingTop: moderateScale(5),
     },
     pt10: {
          paddingTop: moderateScale(10),
     },
     pt15: {
          paddingTop: moderateScale(15),
     },
     pt16: {
          paddingTop: moderateScale(16),
     },
     pt20: {
          paddingTop: moderateScale(20),
     },
     pt25: {
          paddingTop: moderateScale(25),
     },
     pt30: {
          paddingTop: moderateScale(30),
     },
     pt40: {
          paddingTop: moderateScale(40),
     },
     pt45: {
          paddingTop: moderateScale(45),
     },
     pt50: {
          paddingTop: moderateScale(50),
     },

     //   Padding Bottom
     pb0: {
          paddingBottom: 0,
     },
     pb2: {
          paddingBottom: moderateScale(2),
     },
     pb3: {
          paddingBottom: moderateScale(3),
     },
     pb5: {
          paddingBottom: moderateScale(5),
     },
     pb10: {
          paddingBottom: moderateScale(10),
     },
     pb15: {
          paddingBottom: moderateScale(15),
     },
     pb20: {
          paddingBottom: moderateScale(20),
     },
     pb23: {
          paddingBottom: moderateScale(23),
     },
     pb25: {
          paddingBottom: moderateScale(25),
     },
     pb28: {
          paddingBottom: moderateScale(28),
     },
     pb30: {
          paddingBottom: moderateScale(30),
     },
     pb40: {
          paddingBottom: moderateScale(40),
     },
     pb50: {
          paddingBottom: moderateScale(50),
     },
     pb59: {
          paddingBottom: moderateScale(59),
     },
     pb130:{
          paddingBottom: moderateScale(130),
     },

     // Padding Left
     pl2: {
          paddingLeft: moderateScale(2),
     },
     pl3: {
          paddingLeft: moderateScale(3),
     },
     pl5: {
          paddingLeft: moderateScale(5),
     },
     pl10: {
          paddingLeft: moderateScale(10),
     },
     pl15: {
          paddingLeft: moderateScale(15),
     },
     pl20: {
          paddingLeft: moderateScale(20),
     },
     pl25: {
          paddingLeft: moderateScale(25),
     },
     pl30: {
          paddingLeft: moderateScale(30),
     },
     pl32: {
          paddingLeft: moderateScale(32),
     },
     pl40: {
          paddingLeft: moderateScale(40),
     },
     pl50: {
          paddingLeft: moderateScale(50),
     },

     // Padding Right
     pr2: {
          paddingRight: moderateScale(2),
     },
     pr3: {
          paddingRight: moderateScale(3),
     },
     pr5: {
          paddingRight: moderateScale(5),
     },
     pr10: {
          paddingRight: moderateScale(10),
     },
     pr15: {
          paddingRight: moderateScale(15),
     },
     pr20: {
          paddingRight: moderateScale(20),
     },
     pr25: {
          paddingRight: moderateScale(25),
     },
     pr30: {
          paddingRight: moderateScale(30),
     },
     pr40: {
          paddingRight: moderateScale(40),
     },
     pr50: {
          paddingRight: moderateScale(50),
     },

     // Padding Horizontal
     ph2: {
          paddingHorizontal: moderateScale(2),
     },
     ph3: {
          paddingHorizontal: moderateScale(3),
     },
     ph5: {
          paddingHorizontal: moderateScale(5),
     },
     ph10: {
          paddingHorizontal: moderateScale(10),
     },
     ph15: {
          paddingHorizontal: moderateScale(15),
     },
     ph20: {
          paddingHorizontal: moderateScale(20),
     },
     ph25: {
          paddingHorizontal: moderateScale(25),
     },
     ph30: {
          paddingHorizontal: moderateScale(30),
     },
     ph40: {
          paddingHorizontal: moderateScale(40),
     },
     ph50: {
          paddingHorizontal: moderateScale(50),
     },

     // Padding Vertical
     pv2: {
          paddingVertical: moderateScale(2),
     },
     pv3: {
          paddingVertical: moderateScale(3),
     },
     pv5: {
          paddingVertical: moderateScale(5),
     },
     pv10: {
          paddingVertical: moderateScale(10),
     },
     pv15: {
          paddingVertical: moderateScale(15),
     },
     pv20: {
          paddingVertical: moderateScale(20),
     },
     pv25: {
          paddingVertical: moderateScale(25),
     },
     pv30: {
          paddingVertical: moderateScale(30),
     },
     pv40: {
          paddingVertical: moderateScale(40),
     },
     pv50: {
          paddingVertical: moderateScale(50),
     },
     pv100: {
          paddingVertical: moderateScale(100)
     },

     //   Margin

     // Margin Overall
     m0: {
          margin: moderateScale(0),
     },
     m2: {
          margin: moderateScale(2),
     },
     m3: {
          margin: moderateScale(3),
     },
     m5: {
          margin: moderateScale(5),
     },
     m10: {
          margin: moderateScale(10),
     },
     m15: {
          margin: moderateScale(15),
     },
     m20: {
          margin: moderateScale(20),
     },
     m25: {
          margin: moderateScale(25),
     },
     m30: {
          margin: moderateScale(30),
     },
     m40: {
          margin: moderateScale(40),
     },
     m50: {
          margin: moderateScale(50),
     },

     //   margin Top
     mt0: {
          marginTop: moderateScale(0),
     },
     mt2: {
          marginTop: moderateScale(2),
     },
     mt3: {
          marginTop: moderateScale(3),
     },
     mt5: {
          marginTop: moderateScale(5),
     },
     mt8: {
          marginTop: moderateScale(8),
     },
     mt10: {
          marginTop: moderateScale(10),
     },
     mt15: {
          marginTop: moderateScale(15),
     },
     mt20: {
          marginTop: moderateScale(20),
     },
     mt25: {
          marginTop: moderateScale(25),
     },
     mt30: {
          marginTop: moderateScale(30),
     },
     mt40: {
          marginTop: moderateScale(40),
     },
     mt50: {
          marginTop: moderateScale(50),
     },
     mt100: {
          marginTop: moderateScale(100),
     },
     mt120: {
          marginTop: moderateScale(120),
     },

     //   margin Bottom
     mb2: {
          marginBottom: moderateScale(2),
     },
     mb3: {
          marginBottom: moderateScale(3),
     },
     mb5: {
          marginBottom: moderateScale(5),
     },
     mb8:{
          marginBottom: moderateScale(8)
     },
     mb10: {
          marginBottom: moderateScale(10),
     },
     mb15: {
          marginBottom: moderateScale(15),
     },
     mb20: {
          marginBottom: moderateScale(20),
     },
     mb25: {
          marginBottom: moderateScale(25),
     },
     mb30: {
          marginBottom: moderateScale(30),
     },
     mb40: {
          marginBottom: moderateScale(40),
     },
     mb50: {
          marginBottom: moderateScale(50),
     },
     mb100: {
          marginBottom: moderateScale(100)
     },

     // margin Left
     ml2: {
          marginLeft: moderateScale(2),
     },
     ml3: {
          marginLeft: moderateScale(3),
     },
     ml5: {
          marginLeft: moderateScale(5),
     },
     ml10: {
          marginLeft: moderateScale(10),
     },
     ml15: {
          marginLeft: moderateScale(15),
     },
     ml20: {
          marginLeft: moderateScale(20),
     },
     ml25: {
          marginLeft: moderateScale(25),
     },
     ml30: {
          marginLeft: moderateScale(30),
     },
     ml40: {
          marginLeft: moderateScale(40),
     },
     ml50: {
          marginLeft: moderateScale(50),
     },

     // margin Right
     mr2: {
          marginRight: moderateScale(2),
     },
     mr3: {
          marginRight: moderateScale(3),
     },
     mr5: {
          marginRight: moderateScale(5),
     },
     mr10: {
          marginRight: moderateScale(10),
     },
     mr15: {
          marginRight: moderateScale(15),
     },
     mr20: {
          marginRight: moderateScale(20),
     },
     mr25: {
          marginRight: moderateScale(25),
     },
     mr30: {
          marginRight: moderateScale(30),
     },
     mr40: {
          marginRight: moderateScale(40),
     },
     mr50: {
          marginRight: moderateScale(50),
     },
     mr180: {
          marginRight: moderateScale(180),
     },

     // margin Horizontal
     mh2: {
          marginHorizontal: moderateScale(2),
     },
     mh3: {
          marginHorizontal: moderateScale(3),
     },
     mh5: {
          marginHorizontal: moderateScale(5),
     },
     mh10: {
          marginHorizontal: moderateScale(10),
     },
     mh15: {
          marginHorizontal: moderateScale(15),
     },
     mh20: {
          marginHorizontal: moderateScale(20),
     },
     mh25: {
          marginHorizontal: moderateScale(25),
     },
     mh30: {
          marginHorizontal: moderateScale(30),
     },
     mh40: {
          marginHorizontal: moderateScale(40),
     },
     mh50: {
          marginHorizontal: moderateScale(50),
     },

     // margin Vertical
     mv2: {
          marginVertical: moderateScale(2),
     },
     mv3: {
          marginVertical: moderateScale(3),
     },
     mv5: {
          marginVertical: moderateScale(5),
     },
     mv8: {
          marginVertical: moderateScale(8),
     },
     mv10: {
          marginVertical: moderateScale(10),
     },
     mv15: {
          marginVertical: moderateScale(15),
     },
     mv20: {
          marginVertical: moderateScale(20),
     },
     mv25: {
          marginVertical: moderateScale(25),
     },
     mv30: {
          marginVertical: moderateScale(30),
     },
     mv40: {
          marginVertical: moderateScale(40),
     },
     mv50: {
          marginVertical: moderateScale(50),
     },

     // Border Radius, Border Width and Elevation

     // Border Width
     bw: {
          borderWidth: moderateScale(1),
     },
     bw2: {
          borderWidth: moderateScale(2),
     },

     // With Elevation
     elev: {
          backgroundColor: white,
          elevation: moderateScale(8),
     },
     br2elev: {
          borderRadius: moderateScale(2),
          backgroundColor: white,
          elevation: 2,
     },
     br5elev: {
          borderRadius: moderateScale(5),
          backgroundColor: white,
          elevation: 5,
     },
     br10elev: {
          borderRadius: moderateScale(10),
          backgroundColor: white,
          elevation: 5,
     },
     br15elev: {
          borderRadius: moderateScale(15),
          backgroundColor: white,
          elevation: 5,
     },
     br20elev: {
          borderRadius: moderateScale(20),
          backgroundColor: white,
          elevation: 5,
     },
     br25elev: {
          borderRadius: moderateScale(25),
          backgroundColor: white,
          elevation: 5,
     },
     br30elev: {
          borderRadius: moderateScale(30),
          backgroundColor: white,
          elevation: 5,
     },
     bb:{
          backgroundColor:black
     },

     // Without Elevation
     br2: {
          borderRadius: moderateScale(2),
     },
     br5: {
          borderRadius: moderateScale(5),
     },
     br10: {
          borderRadius: moderateScale(10),
     },
     br12: {
          borderRadius: moderateScale(12),
     },
     br15: {
          borderRadius: moderateScale(15),
     },
     br20: {
          borderRadius: moderateScale(20),
     },
     br25: {
          borderRadius: moderateScale(25),
     },
     br30: {
          borderRadius: moderateScale(30),
     },
});
