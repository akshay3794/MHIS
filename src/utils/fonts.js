import { Dimensions, Platform } from "react-native";
import { moderateScale } from "react-native-size-matters";

export let fonts = {
    heading:moderateScale(45),
    title:moderateScale(24),
    extraLargeText:moderateScale(20),
    largeText:moderateScale(18),
    text:moderateScale(16),
    smallText:moderateScale(14),
    extraSmallText:moderateScale(12),
    miniText:moderateScale(10),
    extraMiniText:moderateScale(8),
    headerHeight: Platform.OS === 'android' ? moderateScale(60):moderateScale(80),
    deviceType: Platform.OS === 'android' ? 0 : 1,
    deviceHeight:Dimensions.get('window').height,
    deviceWidth:Dimensions.get('window').width
}