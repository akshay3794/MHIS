/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {S, styles, texts} from '../../css';
import {black} from '../../utils/colors';
import {CustomText} from '../common/CustomText';
import {
  hotel1,
  hotel3,
  hotel4,
  hotel2,
  membership,
  hotel,
  contactUs,
  aboutUs,
  location,
  payment,
} from '../common/images_exports';
import Slider from '../common/Slider';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import {getLocationsApi} from '../../api/app_api';
import LogoHeader from '../common/LogoHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../common/loader';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
    };
  }

  componentDidMount() {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        this.setState({loader: true});
        this.getLocations();
      } else {
        Toast.show({
          type: 'error',
          text1: 'No internet. Please try again',
        });
      }
    });
  }

  async getLocations() {
    await getLocationsApi()
      .then(async res => {
        this.setState({loader: false});
        if (res.data.code === 1) {
          await AsyncStorage.setItem(
            'locations',
            JSON.stringify(res.data.data),
          );
        }
      })
      .catch(err => {
        console.log('err', err);
        this.setState({loader: false});
      });
  }

  render() {
    return (
      <SafeAreaView style={S.hsa}>
        <StatusBar backgroundColor={black} barStyle="light-content" />
        <LogoHeader from="home" navigation={this.props.navigation} />
        <ScrollView
          style={S.wmax}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={S.sa}>
            <View style={[S.wmax]}>
              <Slider
                images={[
                  {img: hotel1},
                  {img: hotel2},
                  {img: hotel3},
                  {img: hotel4},
                ]}
                localImg={true}
              />
            </View>
            <CustomText
              text="Best deals in hotel and resorts"
              style={[texts.c18, S.mv20, texts.tac]}
            />
            <View style={[S.rbetween, S.mb15]}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Properties')}
                style={styles.homeCard}
                activeOpacity={0.8}>
                <Animated.View
                  style={[S.flx, S.acenter, S.caround]}
                  entering={FadeIn}
                  exiting={FadeOut}>
                  {/* <Icon color={black} size={moderateScale(60)} iconFamily="FontAwesome" name="building" /> */}
                  <Image
                    source={hotel}
                    resizeMode="contain"
                    style={styles.cardImage}
                  />
                  <CustomText
                    text="Properties"
                    style={[texts.b16, texts.orng, texts.fw600]}
                  />
                </Animated.View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.homeCard}
                activeOpacity={0.8}
                onPress={() => this.props.navigation.navigate('Membership')}>
                <Animated.View
                  style={[S.flx, S.acenter, S.caround]}
                  entering={FadeIn}
                  exiting={FadeOut}>
                  {/* <Icon color={black} size={moderateScale(60)} iconFamily="FontAwesome" name="vcard" /> */}
                  <Image
                    source={membership}
                    resizeMode="contain"
                    style={styles.cardImage}
                  />
                  <CustomText
                    text="Membership"
                    style={[texts.b16, texts.orng]}
                  />
                </Animated.View>
              </TouchableOpacity>
            </View>
            <View style={[S.rbetween, S.mb30]}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Locations')}
                style={styles.homeCard}
                activeOpacity={0.8}>
                <Animated.View
                  style={[S.flx, S.acenter, S.caround]}
                  entering={FadeIn}
                  exiting={FadeOut}>
                  {/* <Icon color={black} size={moderateScale(60)} iconFamily="Entypo" name="location-pin" /> */}
                  <Image
                    source={location}
                    resizeMode="contain"
                    style={styles.cardImage}
                  />
                  <CustomText
                    text="Locations"
                    style={[texts.b16, texts.orng]}
                  />
                </Animated.View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Payment')}
                style={[styles.homeCard]}
                activeOpacity={0.8}>
                <Animated.View
                  style={[S.flx, S.acenter, S.caround]}
                  entering={FadeIn}
                  exiting={FadeOut}>
                  {/* <Icon color={black} size={moderateScale(60)} iconFamily="MaterialIcons" name="payment" /> */}
                  <Image
                    source={payment}
                    resizeMode="contain"
                    style={styles.cardImage}
                  />
                  <CustomText text="Payment" style={[texts.b16, texts.orng]} />
                </Animated.View>
              </TouchableOpacity>
            </View>
            <View style={S.rbetween}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ContactUs')}
                style={styles.homeCard}
                activeOpacity={0.8}>
                <Animated.View
                  style={[S.flx, S.acenter, S.caround]}
                  entering={FadeIn}
                  exiting={FadeOut}>
                  {/* <Icon color={black} size={moderateScale(60)} iconFamily="MaterialCommunityIcons" name="headphones" /> */}
                  <Image
                    source={contactUs}
                    resizeMode="contain"
                    style={styles.cardImage}
                  />
                  <CustomText
                    text="Contact Us"
                    style={[texts.b16, texts.orng]}
                  />
                </Animated.View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('AboutUs')}
                style={styles.homeCard}
                activeOpacity={0.8}>
                <Animated.View
                  style={[S.flx, S.acenter, S.caround]}
                  entering={FadeIn}
                  exiting={FadeOut}>
                  {/* <Icon color={black} size={moderateScale(60)} iconFamily="Entypo" name="info-with-circle" /> */}
                  <Image
                    source={aboutUs}
                    resizeMode="contain"
                    style={styles.cardImage}
                  />
                  <CustomText text="About Us" style={[texts.b16, texts.orng]} />
                </Animated.View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <Toast position="bottom" visibilityTime={1000} />
        <Loader show={this.state.loader} />
      </SafeAreaView>
    );
  }
}
