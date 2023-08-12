/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {S, texts} from '../../css';
import LogoHeader from '../common/LogoHeader';
import {CustomText} from '../common/CustomText';
import {CustomInput} from '../common/customInput';
import Button from '../common/button';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {bookingApi} from '../../api/app_api';
import Toast from 'react-native-toast-message';
import Loader from '../common/loader';

export default class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      showPicker: false,
      hotelData: props.route.params.data,
      userData: {},
      adults: '',
      kids: '',
      adultsErr: false,
      kidsErr: false,
      checkIn: '',
      checkOut: '',
      checkInErr: false,
      checkOutErr: false,
      current: '',
      mobile: '',
      mobileErr: false,
      loader: false,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('profileData').then(val => {
      let data = JSON.parse(val);
      console.log(data);
      this.setState({userData: data});
    });
    AsyncStorage.getItem('token').then(val => {
      console.log('token', val);
    });
  }

  async pressHandler() {
    let err = 0;
    if (this.state.mobile === '' || this.state.mobile.length !== 10) {
      err = 1;
      this.setState({mobileErr: true});
    }
    if (this.state.checkIn === '') {
      err = 1;
      this.setState({checkInErr: true});
    }
    if (this.state.checkOut === '') {
      err = 1;
      this.setState({checkOutErr: true});
    }
    if (this.state.adults === '') {
      err = 1;
      this.setState({adultsErr: true});
    }
    if (this.state.kids === '') {
      err = 1;
      this.setState({kidsErr: true});
    }
    if (err === 0) {
      let data = {
        member_id: this.state.userData?.membership_number,
        name: this.state.userData?.member_name,
        mobile: this.state.mobile,
        email: this.state.userData?.email,
        checkIn: this.state.checkIn,
        checkOut: this.state.checkOut,
        adults: this.state.adults,
        kids: this.state.kids,
        hotel_name: this.state.hotelData.name,
      };
      this.setState({loader: true});
      await bookingApi(data)
        .then(res => {
          this.setState({loader: false});
          if (res.data[0].status === 200) {
            this.setState({
              adults: '',
              kids: '',
              checkIn: '',
              checkOut: '',
              mobile: '',
              showPicker: false,
            });
            Toast.show({type: 'success', text1: 'Booking request sent.'});
          }
        })
        .catch(err => {
          this.setState({loader: false});
          console.log(err);
        });
    }
  }

  onChange(event, selectedDate) {
    if (event.type === 'set') {
      let newD = selectedDate.toLocaleString();
      let arr = newD.split(',');
      if (this.state.current === 'In') {
        this.setState({
          showPicker: false,
          checkIn: arr[0],
        });
      } else {
        this.setState({
          showPicker: false,
          checkOut: arr[0],
        });
      }
    }
  }

  render() {
    return (
      <View style={S.hsa}>
        <LogoHeader from="Booking" navigation={this.props.navigation} />
        <KeyboardAvoidingView
          style={[S.flx, S.sa]}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView
            style={[S.flx]}
            contentContainerStyle={[{flexGrow: 1}]}
            showsVerticalScrollIndicator={false}>
            <CustomText
              style={[S.mb8, texts.fwBold, texts.c24, texts.tac]}
              text="Booking Form"
            />
            <CustomText style={[S.mb8, texts.c16]} text="Member Id" />
            <CustomInput
              editable={false}
              placeholder="Id"
              value={this.state.userData?.membership_number}
            />
            <CustomText style={[S.mb8, texts.c16]} text="Name" />
            <CustomInput
              editable={false}
              placeholder="Name"
              value={this.state.userData?.member_name}
            />
            <CustomText style={[S.mb8, texts.c16]} text="Mobile Number" />
            <CustomInput
              placeholder=""
              keyboardType="number-pad"
              autoCapitalize="none"
              onChangeText={text =>
                this.setState({mobile: text, mobileErr: false})
              }
              value={this.state.mobile}
              error={this.state.mobileErr}
            />
            <CustomText style={[S.mb8, texts.c16]} text="Email" />
            <CustomInput
              editable={false}
              placeholder={'abc@xyz.com'}
              value={this.state.userData?.email}
            />
            <CustomText style={[S.mb8, texts.c16]} text="Check In Date" />
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this.setState({current: 'In', showPicker: true})}>
              <CustomInput editable={false} value={this.state.checkIn} />
            </TouchableOpacity>
            <CustomText style={[S.mb8, texts.c16]} text="Check Out Date" />
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this.setState({current: 'Out', showPicker: true})}>
              <CustomInput editable={false} value={this.state.checkOut} />
            </TouchableOpacity>
            <CustomText style={[S.mb8, texts.c16]} text="Adults" />
            <CustomInput
              placeholder=""
              keyboardType="number-pad"
              autoCapitalize="none"
              onChangeText={text =>
                this.setState({adults: text, adultsErr: false})
              }
              value={this.state.adults}
              error={this.state.adultsErr}
            />
            <CustomText style={[S.mb8, texts.c16]} text="Kids" />
            <CustomInput
              placeholder=""
              keyboardType="number-pad"
              autoCapitalize="none"
              onChangeText={text => this.setState({kids: text, kidsErr: false})}
              value={this.state.kids}
              error={this.state.kidsErr}
            />
            <View style={[S.pv10]}>
              <Button buttonText="Submit" onPress={() => this.pressHandler()} />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        {this.state.showPicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={this.state.date}
            minimumDate={this.state.date}
            mode="date"
            onChange={(event, selectedDate) =>
              this.onChange(event, selectedDate)
            }
          />
        )}
        <Loader show={this.state.loader} />
        <Toast position="bottom" visibilityTime={1000} />
      </View>
    );
  }
}
