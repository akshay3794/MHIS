/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {Alert, ScrollView, View, TouchableOpacity} from 'react-native';
import {loginApi} from '../../api/app_api';
import {S, texts} from '../../css';
import Button from '../common/button';
import {CustomInput} from '../common/customInput';
import {CustomText} from '../common/CustomText';
import Loader from '../common/loader';
import LogoHeader from '../common/LogoHeader';

export default class MemberLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      secure_entry: true,
      emailErr: false,
      passErr: false,
      loader: false,
    };
  }

  async onLogin() {
    let err = 0;
    if (this.state.email === '') {
      err = 1;
      this.setState({emailErr: true});
    }
    if (this.state.password === '') {
      err = 1;
      this.setState({passErr: true});
    }
    if (err === 0) {
      let obj = {
        email: this.state.email,
        password: this.state.password,
      };
      this.setState({loader: true});
      await loginApi(obj).then(res => {
        console.log('res', res.data.data);
        this.setState({loader: false});
        if (res.data.code === 1) {
          const firstPair = ['token', res.data.token];
          const secondPair = [
            'profileData',
            JSON.stringify(res.data.user_details),
          ];
          const thirdPair = ['loggedIn', JSON.stringify(true)];
          AsyncStorage.multiSet([firstPair, secondPair, thirdPair]);
          this.props.navigation.navigate('Profile', {from: 'login'});
        } else {
          Alert.alert('MHIS', res.data.error);
        }
      });
    }
  }

  render() {
    return (
      <View style={S.hsa}>
        <LogoHeader from="login" navigation={this.props.navigation} />
        <ScrollView style={S.wmax} contentContainerStyle={[{flex: 1}, S.p24]}>
          <CustomText text="Email" style={[texts.c12, S.mv8]} />
          <CustomInput
            placeholder="abc@xyz.com"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={text => this.setState({email: text, emailErr: false})}
            value={this.state.email}
            error={this.state.emailErr}
          />
          <CustomText text="Password" style={[texts.c12, S.mv8]} />
          <CustomInput
            placeholder="********"
            keyboardType="default"
            autoCapitalize="none"
            secureTextEntry={this.state.secure_entry}
            onChangeText={text =>
              this.setState({password: text, passErr: false})
            }
            value={this.state.password}
            onEyePress={() =>
              this.setState({secure_entry: !this.state.secure_entry})
            }
            showEye={true}
            error={this.state.passErr}
          />
          {/* <TouchableOpacity
            activeOpacity={0.8}
            style={[S.mb30, {alignSelf: 'flex-end'}]}
            onPress={() => this.props.navigation.navigate('ForgotPassword')}>
            <CustomText style={[texts.b12, texts.red]} text="Forgot Password" />
          </TouchableOpacity> */}
          <Button buttonText="Continue" onPress={() => this.onLogin()} />
        </ScrollView>
        <Loader show={this.state.loader} />
      </View>
    );
  }
}
