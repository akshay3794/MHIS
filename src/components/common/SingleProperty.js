/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {S, styles, texts} from '../../css';
import {CustomText} from './CustomText';
import LogoHeader from './LogoHeader';
import Slider from './Slider';
import {moderateScale} from 'react-native-size-matters';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import Button from './button';
import AsyncStorage from '@react-native-async-storage/async-storage';

Geocoder.init('AIzaSyCBI-6NdRgtcNFRCv9DA9JHcfLYBbjNFqk');

export default class SingleProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.route.params.item,
      images: JSON.parse(props.route.params.item.images),
      imageUrl: props.route.params.imageUrl,
      imageArr: [],
      facilities: JSON.parse(props.route.params.item.facilities),
      latitude: 37.78825,
      longitude: -122.4324,
      loggedIn: false,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('loggedIn').then(val => {
      let res = JSON.parse(val);
      this.setState({loggedIn: res});
    });
    let imgs = [];
    if (this.state.images.length > 0) {
      this.state.images.forEach(element => {
        imgs.push({img: this.state.imageUrl + element});
      });
      this.setState({imageArr: imgs});
      let add = this.props.route.params.item.address;
      Geocoder.from(add)
        .then(json => {
          var location = json.results[0].geometry.location;
          this.setState({
            latitude: location.lat,
            longitude: location.lng,
          });
        })
        .catch(error => console.warn(error));
    }
  }

  render() {
    return (
      <View style={S.hsa}>
        <LogoHeader
          from="singleProperties"
          navigation={this.props.navigation}
        />
        <ScrollView
          style={[S.wmax, S.hmax]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[S.p18, {flexGrow: 1}]}>
          <View style={[S.wmax]}>
            <Slider images={this.state.imageArr} localImg={false} />
          </View>
          <CustomText
            style={[texts.c16, texts.fwBold, S.mt15]}
            text={this.state.data?.name}
          />
          <CustomText
            style={[texts.c14, S.mv15]}
            text={this.state.data?.description}
          />
          <CustomText style={[texts.c14, texts.fwBold]} text="Location" />
          <CustomText
            style={[texts.c14, S.mv15]}
            text={this.state.data?.address}
          />
          <CustomText
            style={[texts.c14, texts.fwBold, S.mb15]}
            text="Facilities"
          />
          {this.state.facilities.map((item, index) => {
            return (
              <View style={[S.rstart]} key={index}>
                <CustomText style={[texts.c14, S.mr10]} text={'\u2B24'} />
                <CustomText style={[texts.c14]} text={item} />
              </View>
            );
          })}
          <View
            style={{
              width: '100%',
              height: moderateScale(200),
              marginVertical: moderateScale(10),
              borderRadius: moderateScale(10),
            }}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              zoomEnabled={false}
              zoomTapEnabled={false}
              zoomControlEnabled={false}
              rotateEnabled={false}
              scrollEnabled={false}
              region={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}>
              <Marker
                coordinate={{
                  latitude: this.state.latitude,
                  longitude: this.state.longitude,
                }}
              />
            </MapView>
          </View>
          {this.state.loggedIn ? (
            <Button
              buttonText="Book"
              onPress={() =>
                this.props.navigation.navigate('Booking', {
                  data: this.props.data,
                })
              }
            />
          ) : null}
        </ScrollView>
      </View>
    );
  }
}
