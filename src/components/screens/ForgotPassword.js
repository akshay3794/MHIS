/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {S, texts} from '../../css';
import LogoHeader from '../common/LogoHeader';
import {CustomText} from '../common/CustomText';
import {CustomInput} from '../common/customInput';
import Button from '../common/button';
import Loader from '../common/loader';
import {emailRegex} from '../../utils/regex';

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      loader: false,
      emailErr: false,
    };
  }

  onContinuePress() {
    let err = 0;
    let isEmailValid = emailRegex.test(this.state.email);
    if (this.state.email === '') {
      err = 1;
      this.setState({emailErr: true});
    } else if (!isEmailValid) {
      err = 1;
      this.setState({emailErr: true});
    }
    console.log(emailRegex.test(this.state.email));

    if (err === 0) {
      let obj = {
        email: this.state.email,
      };
      console.log(obj);
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
          <Button
            buttonText="Continue"
            onPress={() => this.onContinuePress()}
          />
        </ScrollView>
        <Loader show={this.state.loader} />
      </View>
    );
  }
}
