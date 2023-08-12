/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {S, texts} from '../../css';
import {CustomText} from '../common/CustomText';
import {locationImage} from '../common/images_exports';
import LogoHeader from '../common/LogoHeader';

export default class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'domestic',
      domesticData: [],
      internationalData: [],
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('locations').then(val => {
      let data = JSON.parse(val);
      this.setState({
        domesticData: data.domestic,
        internationalData: data.international,
      });
    });
  }

  render() {
    return (
      <View style={S.hsa}>
        <LogoHeader from="Locations" navigation={this.props.navigation} />
        <View style={S.sa}>
          <View style={[S.br5, S.bg, S.p5, S.rcenter, S.mb10]}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.setState({activeTab: 'domestic'})}
              style={[
                S.h30wp50,
                this.state.activeTab === 'domestic' ? S.br5elev : null,
              ]}>
              <CustomText style={[texts.c14]} text={'Domestic'} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.setState({activeTab: 'international'})}
              style={[
                S.h30wp50,
                this.state.activeTab === 'international' ? S.br5elev : null,
              ]}>
              <CustomText style={[texts.c14]} text={'International'} />
            </TouchableOpacity>
          </View>
          <FlatList
            contentContainerStyle={[S.pb50, {flexGrow: 1}]}
            ListHeaderComponent={() => (
              <Image
                source={locationImage}
                style={[S.wmax, S.h200, S.mb10, S.br10]}
                resizeMode="contain"
              />
            )}
            data={
              this.state.activeTab === 'domestic'
                ? this.state.domesticData
                : this.state.internationalData
            }
            numColumns={3}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item}
            renderItem={({item}) => {
              return (
                <View style={[S.h50wp32, S.bg, S.ml5, S.mb5]}>
                  <CustomText
                    text={item}
                    style={[texts.c14]}
                    numberOfLines={1}
                    ellipsesMode="tail"
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }
}
