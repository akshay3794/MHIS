/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {ScrollView, TextInput, View} from 'react-native';
import {S, texts} from '../../css';
import Button from '../common/button';
import {CustomInput} from '../common/customInput';
import {CustomText} from '../common/CustomText';
import Header from '../common/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {black, inputBackground} from '../../utils/colors';
import {moderateScale} from 'react-native-size-matters';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile_picture: '',
      showCameraModal: false,
      name: '',
      phoneNumber: '',
      email: '',
      showButton: false,
      loader: false,
      from: props.route.params.from,
      profileData: {},
      childrens: '',
      offers: '',
      anniversary_date: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('profileData').then(val => {
      let data = JSON.parse(val);
      console.log('data', data);
      let child = JSON.parse(data.children_names);
      let offers = JSON.parse(data.offers);
      let anniversary = data.anniversary_date.split(' ');
      this.setState({
        profileData: data,
        childrens: child.toString(),
        offers: offers.toString(),
        anniversary_date: anniversary[0],
      });
    });
  }

  backHandler() {
    if (this.state.from === 'sidemenu') {
      this.props.navigation.pop();
    } else {
      this.props.navigation.pop(2);
    }
  }

  render() {
    return (
      <View style={[S.hsa]}>
        <Header label="Profile" onPress={() => this.backHandler()} />
        <ScrollView
          style={[S.wmax, S.hmax, S.bw]}
          contentContainerStyle={[S.p18, S.acenter]}>
          <View style={S.wmax}>
            <CustomText style={[S.mb8, texts.c16]} text="Name *" />
            <CustomInput
              placeholder=""
              editable={false}
              value={this.state.profileData.member_name}
            />
            <CustomText style={[S.mb8, texts.c16]} text="Co-Applicant Name *" />
            <CustomInput
              placeholder=""
              editable={false}
              value={this.state.profileData.co_applicant}
            />
            <CustomText style={[S.mb8, texts.c16]} text="Children" />
            <TextInput
              value={this.state.childrens}
              editable={false}
              multiline={true}
              style={[
                {
                  width: '100%',
                  height: moderateScale(100),
                  color: black,
                  backgroundColor: inputBackground,
                  textAlignVertical: 'top',
                  borderRadius: moderateScale(12),
                  paddingHorizontal: moderateScale(12),
                },
                texts.c12,
              ]}
            />
            {/* <CustomInput
              placeholder=""
              editable={false}
              value={this.state.childrens}
              multiline={true}
            /> */}
            <CustomText style={[S.mb8, texts.c16]} text="E-mail ID *" />
            <CustomInput
              placeholder=""
              editable={false}
              value={this.state.profileData.email}
            />
            <CustomText style={[S.mb8, texts.c16]} text="Address" />
            <CustomInput
              placeholder=""
              editable={false}
              value={this.state.profileData.address}
            />
            <CustomText style={[S.mb8, texts.c16]} text="Anniversary date" />
            <CustomInput
              placeholder=""
              editable={false}
              value={this.state.anniversary_date}
            />
            <CustomText style={[S.mb8, texts.c16]} text="Membership Number" />
            <CustomInput
              placeholder=""
              editable={false}
              value={this.state.profileData.membership_number}
            />
            <CustomText style={[S.mb8, texts.c16]} text="Membership Tenure" />
            <CustomInput
              placeholder=""
              editable={false}
              value={this.state.profileData.membership_tenure}
            />
            <CustomText
              style={[S.mb8, texts.c16]}
              text="Annual Maintenance Cost"
            />
            <CustomInput
              placeholder=""
              editable={false}
              value={this.state.profileData.annual_mcos}
            />
            <CustomText style={[S.mb8, texts.c16]} text="Used Holidays" />
            <CustomInput
              placeholder=""
              editable={false}
              multiline={true}
              value={this.state.profileData?.last_holiday_used}
            />
            <CustomText style={[S.mb8, texts.c16]} text="Remaining Holidays" />
            <CustomInput
              placeholder=""
              editable={false}
              multiline={true}
              value={this.state.profileData?.remaining_holidays}
            />
            <CustomText style={[S.mb8, texts.c16]} text="Total amount" />
            <CustomInput
              placeholder=""
              editable={false}
              multiline={true}
              value={this.state.profileData?.amount}
            />
            <CustomText style={[S.mb8, texts.c16]} text="Offers" />
            <TextInput
              value={this.state.offers}
              editable={false}
              multiline={true}
              style={[
                {
                  width: '100%',
                  height: moderateScale(100),
                  color: black,
                  backgroundColor: inputBackground,
                  textAlignVertical: 'top',
                  borderRadius: moderateScale(12),
                  paddingHorizontal: moderateScale(12),
                },
                texts.c12,
              ]}
            />
          </View>
          <View style={[S.pv20, S.wmax]}>
            <Button
              buttonText="Change Password"
              onPress={() => this.props.navigation.navigate('ChangePassword')}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
