import {Platform, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {black, orange, white} from '../utils/colors';
export const style = StyleSheet.create({
  header: {
    height: Platform.OS === 'ios' ? moderateScale(80) : moderateScale(60),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: black,
    paddingHorizontal: moderateScale(15),
  },
  headerLogo: {
    width: moderateScale(60),
    height: moderateScale(40),
  },
  inputText: {
    width: '100%',
    height: moderateScale(40),
    borderRadius: moderateScale(12),
    paddingHorizontal: moderateScale(12),
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: moderateScale(8),
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
  smallBtnShell: {
    backgroundColor: orange,
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(12),
    height: moderateScale(40),
  },
  homeCard: {
    width: '46%',
    height: moderateScale(110),
    backgroundColor: white,
    elevation: 2,
    borderRadius: moderateScale(5),
  },
  cardImage: {
    width: moderateScale(60),
    height: moderateScale(60),
  },
  propertyCard: {
    width: '100%',
    borderRadius: moderateScale(12),
    marginBottom: moderateScale(20),
  },
  drawerStyle: {
    width: '80%',
    height: '100%',
    backgroundColor: 'white',
  },
  profileImageBox: {
    borderWidth: moderateScale(5),
    borderRadius: moderateScale(95),
    borderColor: orange,
    height: moderateScale(130),
    width: moderateScale(130),
    backgroundColor: orange,
  },
  profileImage: {
    height: moderateScale(120),
    width: moderateScale(120),
    borderRadius: moderateScale(95),
  },
  profileModal: {
    margin: 0,
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  pickerItem: {
    width: '100%',
    height: moderateScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
