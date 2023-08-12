import React, {Component} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {S} from '../../css';
import LogoHeader from '../common/LogoHeader';
import Toast from 'react-native-toast-message';

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  render() {
    return (
      <View style={S.hsa}>
        <LogoHeader from="Payment" navigation={this.props.navigation} />
        <WebView
          source={{uri: 'https://payments.cashfree.com/forms/mhispayment'}}
          style={S.flx}
          onError={syntheticEvent => {
            const {nativeEvent} = syntheticEvent;
            if (nativeEvent.code === -2) {
              Toast.show({
                type: 'error',
                text1: 'No Internet. Please try again.',
              });
            }
          }}
        />
        <Toast position="bottom" visibilityTime={1000} />
      </View>
    );
  }
}
