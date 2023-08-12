/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  View,
  Platform,
} from 'react-native';
import {S, styles, texts} from '../../css';
import {white} from '../../utils/colors';
import Button from '../common/button';
import {CustomInput} from '../common/customInput';
import {CustomText} from '../common/CustomText';
import Loader from '../common/loader';
import LogoHeader from '../common/LogoHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {changePassword} from '../../api/app_api';

export default class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      old_password: '',
      old_password_error: false,
      secure_old: true,
      new_password: '',
      new_password_err: false,
      secure_new: true,
      confirm_password: '',
      confirm_password_err: false,
      secure_confirm: true,
      loading: false,
      uid: '',
      token: '',
      email: '',
    };
  }

  async componentDidMount() {
    await AsyncStorage.multiGet(['profileData', 'token']).then(val => {
      let data = JSON.parse(val[0][1]);
      this.setState({uid: data.id, email: data.email, token: val[1][1]});
    });
  }

  async onPressHandler() {
    let err = 0;
    if (this.state.old_password === '') {
      err = 1;
      this.setState({old_password_error: true});
    }
    if (this.state.new_password === '') {
      err = 1;
      this.setState({new_password_err: true});
    } else if (this.state.new_password.length < 8) {
      err = 1;
      this.setState({new_password_err: true});
    }
    if (this.state.confirm_password === '') {
      err = 1;
      this.setState({confirm_password_err: true});
    } else if (this.state.confirm_password.length < 8) {
      err = 1;
      this.setState({confirm_password_err: true});
    }
    if (err === 0) {
      if (this.state.new_password !== this.state.confirm_password) {
        err = 1;
        Alert.alert('MHIS', "Password didn't match");
      } else {
        this.setState({loading: true});
        let data = {
          email: this.state.email,
          old_password: this.state.old_password,
          new_password: this.state.new_password,
          cnew_password: this.state.confirm_password,
        };
        await changePassword(this.state.token, this.state.uid, data)
          .then(response => {
            if (response.data.code === 1) {
              Alert.alert('MHIS', 'Password changed successfully.');
              this.setState({
                old_password: '',
                new_password: '',
                confirm_password: '',
                loading: false,
              });
            }
          })
          .catch(err => {
            console.log(err);
            this.setState({loading: false});
          });
      }
    }
  }

  render() {
    return (
      <View style={S.hsa}>
        <LogoHeader from="changePassword" navigation={this.props.navigation} />
        <KeyboardAvoidingView
          style={[S.flx, {backgroundColor: white}]}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView
            style={[S.wmax, {backgroundColor: white}]}
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}>
            <View style={[S.sa]}>
              <CustomText
                style={[styles.inputLabel, S.mb8, texts.b9]}
                text="Old Password"
              />
              <CustomInput
                placeholder="Enter old password"
                autoCapitalize="none"
                onChangeText={text =>
                  this.setState({old_password: text, old_password_error: false})
                }
                secureTextEntry={this.state.secure_old}
                value={this.state.old_password}
                showEye={true}
                onEyePress={() =>
                  this.setState({secure_old: !this.state.secure_old})
                }
                error={this.state.old_password_error}
              />
              <CustomText
                style={[styles.inputLabel, S.mb8, texts.b9]}
                text="New password"
              />
              <CustomInput
                placeholder="Enter new password"
                autoCapitalize="none"
                onChangeText={text =>
                  this.setState({new_password: text, new_password_err: false})
                }
                secureTextEntry={this.state.secure_new}
                value={this.state.new_password}
                showEye={true}
                onEyePress={() =>
                  this.setState({secure_new: !this.state.secure_new})
                }
                error={this.state.new_password_err}
              />
              <CustomText
                style={[styles.inputLabel, S.mb8, texts.b9]}
                text="Confirm password"
              />
              <CustomInput
                placeholder="Confirm new password"
                autoCapitalize="none"
                onChangeText={text =>
                  this.setState({
                    confirm_password: text,
                    confirm_password_err: false,
                  })
                }
                secureTextEntry={this.state.secure_confirm}
                value={this.state.confirm_password}
                showEye={true}
                onEyePress={() =>
                  this.setState({secure_confirm: !this.state.secure_confirm})
                }
                error={this.state.confirm_password_err}
              />
              <View style={[S.mt40]}>
                <Button
                  buttonText="Continue"
                  onPress={() => this.onPressHandler()}
                />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <Loader show={this.state.loading} />
      </View>
    );
  }
}
