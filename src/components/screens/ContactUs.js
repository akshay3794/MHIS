/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, ScrollView, View, TouchableOpacity, Linking} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {S, texts} from '../../css';
import {black, green} from '../../utils/colors';
import {CustomText} from '../common/CustomText';
import Header from '../common/Header';
import {Icon} from '../common/icons';
import {logo} from '../common/images_exports';

export default class ContactUs extends Component {
  constructor(props) {
    super(props);
  }

  openDialer(val) {
    Linking.openURL(`tel:${val}`);
  }

  openMail(val) {
    Linking.openURL(`mailto:${val}`);
  }

  render() {
    return (
      <View style={S.hsa}>
        <Header
          label="Contact Us"
          onPress={() => this.props.navigation.goBack()}
        />
        <ScrollView style={[S.wmax]} contentContainerStyle={{flexGrow: 1}}>
          <View style={S.sa}>
            <Image source={logo} style={[S.hp20wp100]} resizeMode="contain" />
            <View style={[S.rcenter, S.mv15]}>
              <Icon
                iconFamily="Ionicons"
                name="time"
                size={moderateScale(20)}
                color={green}
              />
              <CustomText
                text="10:00 AM to 6:00 PM (Monday - Friday)"
                style={[texts.c14]}
              />
            </View>
            <View style={[S.br5elev, S.p10, S.mv15]}>
              <View style={[S.rstart, S.mb8]}>
                <Icon
                  iconFamily="FontAwesome"
                  name="phone"
                  size={moderateScale(25)}
                  color={black}
                />
                <CustomText
                  text="Call Us @"
                  style={[texts.c18, texts.fwBold, S.mh10]}
                />
              </View>
              <View style={[S.rbetween]}>
                <CustomText text="Customer Care" style={[texts.c14]} />
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[S.mb10]}
                  onPress={() => this.openDialer('+911144459173')}>
                  <CustomText text="+911144459173" style={[texts.c14]} />
                  {/* <CustomText text="011-41729205" style={[texts.c14]} /> */}
                </TouchableOpacity>
              </View>
              <View style={[S.rbetween]}>
                <CustomText text="Holiday Reservation" style={[texts.c14]} />
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => this.openDialer('18005325777')}>
                  <CustomText text="18005325777" style={[texts.c14]} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={[S.br5elev, S.p10, S.mv15]}>
              <View style={[S.rstart, S.mb8]}>
                <Icon
                  iconFamily="Ionicons"
                  name="mail"
                  size={moderateScale(25)}
                  color={black}
                />
                <CustomText
                  text="Mail Us @"
                  style={[texts.c18, texts.fwBold, S.mh10]}
                />
              </View>
              <View>
                <CustomText text="Customer Care" style={[texts.c14]} />
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[S.mb10]}
                  onPress={() =>
                    this.openMail('customercare@mariotholidaysinnsuites.com')
                  }>
                  <CustomText
                    text="customercare@mariotholidaysinnsuites.com"
                    style={[texts.c14]}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <CustomText text="Holiday Reservation" style={[texts.c14]} />
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() =>
                    this.openMail('info@mariotholidaysinnsuites.com')
                  }>
                  <CustomText
                    text="info@mariotholidaysinnsuites.com"
                    style={[texts.c14]}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* <View style={[S.br5elev, S.p10]}>
              <View style={[S.rstart, S.mb8]}>
                <Icon
                  iconFamily="MaterialCommunityIcons"
                  name="office-building"
                  size={moderateScale(25)}
                  color={black}
                />
                <CustomText
                  text="Our Offices"
                  style={[texts.c18, texts.fwBold, S.mh10]}
                />
              </View>
              <CustomText
                text={
                  'Mariot holidays inn & suites pvt. Ltd. \nCorporate office: A-10 Block -A, 3rd Floor, Lajpat nagar part -2, New Delhi'
                }
                style={[texts.c16]}
              />
            </View> */}
          </View>
        </ScrollView>
      </View>
    );
  }
}
