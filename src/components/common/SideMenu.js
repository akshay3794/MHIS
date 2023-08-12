/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {TouchableOpacity, Image, Alert, View} from 'react-native';
import {Icon} from './icons';
import {CustomText} from './CustomText';
import {S, texts} from '../../css';
import {logo} from './images_exports';
import {inputLabel} from '../../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('loggedIn').then(val => {
      let res = JSON.parse(val);
      this.setState({loggedIn: res});
    });
  }

  onLogoutPress() {
    Alert.alert('MHIS', 'Are you sure you want to logout?', [
      {
        text: 'Yes',
        onPress: () => this.logout(),
      },
      {
        text: 'No',
        style: 'cancel',
      },
    ]);
  }

  async logout() {
    this.setState({loggedIn: false});
    await AsyncStorage.removeItem('loggedIn');
    this.props.navigation.closeDrawer();
  }

  pressHandler() {
    this.props.navigation.closeDrawer();
    if (this.state.loggedIn) {
      this.props.navigation.push('Profile', {from: 'sidemenu'});
    } else {
      this.props.navigation.push('MemberLogin');
    }
  }

  render() {
    return (
      <View style={[S.sa]}>
        <View style={[S.wmax, S.acenter, S.mb10]}>
          <Image
            source={logo}
            resizeMode="contain"
            style={{height: 120, width: 120, borderRadius: 95}}
          />
        </View>
        <TouchableOpacity
          onPress={() => this.pressHandler()}
          style={[S.pv10, S.rstart]}
          activeOpacity={0.8}>
          <Icon
            name={'person'}
            iconFamily="Ionicons"
            color={inputLabel}
            size={22}
          />
          <CustomText
            style={[texts.w14, S.ml10, texts.black]}
            text={this.state.loggedIn ? 'Member Profile' : 'Member Login'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Toast.show({type: 'info', text1: 'Coming soon...'})}
          style={[S.pv10, S.rstart]}
          activeOpacity={0.8}>
          <Icon
            name="card-giftcard"
            iconFamily="MaterialIcons"
            color={inputLabel}
            size={22}
          />
          <CustomText
            style={[texts.w14, S.ml10, texts.black]}
            text="Vouchers"
          />
        </TouchableOpacity>
        {this.state.loggedIn ? (
          <TouchableOpacity
            onPress={() => this.onLogoutPress()}
            style={[S.pv10, S.rstart]}
            activeOpacity={0.8}>
            <Icon
              name="logout"
              iconFamily="AntDesign"
              color={inputLabel}
              size={22}
            />
            <CustomText
              style={[texts.w14, S.ml10, texts.black]}
              text="Logout"
            />
          </TouchableOpacity>
        ) : null}
        <Toast position="bottom" visibilityTime={1000} />
      </View>
    );
  }
}
