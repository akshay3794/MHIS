/* eslint-disable handle-callback-err */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  View,
  VirtualizedList,
} from 'react-native';
import {S, texts} from '../../css';
import Modal from 'react-native-modal';
import {CustomText} from '../common/CustomText';
import {black, orange, white} from '../../utils/colors';
import {Icon} from '../common/icons';
import {moderateScale} from 'react-native-size-matters';
import {getHotelsFilterByCityApi} from '../../api/app_api';
import LogoHeader from '../common/LogoHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../common/loader';
import PropertyCard from '../common/PropertyCard';
import PickerItem from '../common/PickerItem';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';

let stageData = ['Domestic', 'International'];

export default class Properties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 'Domestic',
      selectedCity: '',
      showModal: false,
      selectedData: [],
      currentSelected: '',
      currentPicker: '',
      domesticData: [],
      internationalData: [],
      hotelData: [],
      loader: false,
      imageUrl: '',
      loggedIn: false,
      page: 1,
      hasPagination: false,
      loadMore: true,
    };
  }

  async componentDidMount() {
    await AsyncStorage.getItem('loggedIn').then(val => {
      let res = JSON.parse(val);
      this.setState({loggedIn: res});
    });
    await AsyncStorage.getItem('locations')
      .then(val => {
        let data = JSON.parse(val);
        this.setState({
          domesticData: data.domestic,
          internationalData: data.international,
          selectedCity: data.domestic[0],
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({loadMore: false, loader: false});
      });
    this.setState({loader: true});
    await this.getHotelData('getAll');
  }

  async getHotelData(apikey) {
    NetInfo.fetch().then(async state => {
      if (state.isConnected) {
        await getHotelsFilterByCityApi(
          this.state.selection,
          this.state.selectedCity,
          this.state.page,
        )
          .then(res => {
            if (res.data.status === 200) {
              let hasPagination =
                res.data.pagination.totalPage > res.data.pagination.currentPage;
              if (apikey === 'getAll') {
                this.setState({
                  hotelData: res.data.data,
                  imageUrl: res.data.ImageBaseURl,
                  loader: false,
                  page: hasPagination ? this.state.page + 1 : this.state.page,
                  loadMore: hasPagination,
                });
              } else {
                this.setState({
                  hotelData: [...this.state.hotelData, ...res.data.data],
                  imageUrl: res.data.ImageBaseURl,
                  page: hasPagination ? this.state.page + 1 : this.state.page,
                  loadMore: hasPagination,
                });
              }
            } else {
              this.setState({loader: false, loadMore: false});
            }
          })
          .catch(err => {
            this.setState({loader: false, loadMore: false});
          });
      } else {
        this.setState({loader: false, loadMore: false});
        Toast.show({type: 'error', text1: 'No internet. Please try again'});
      }
    });
  }

  async paginate() {
    if (this.state.loadMore) {
      this.setState({loadMore: false}, () => {
        this.getHotelData('page');
      });
    }
  }

  pressHandler(val) {
    if (val === 'stage') {
      this.setState({
        selectedData: stageData,
        currentSelected: this.state.selection,
        showModal: true,
        currentPicker: val,
      });
    } else {
      this.setState({
        selectedData:
          this.state.selection === 'Domestic'
            ? this.state.domesticData
            : this.state.internationalData,
        currentSelected: this.state.selectedCity,
        showModal: true,
        currentPicker: val,
      });
    }
  }

  async onItemPress(title) {
    if (this.state.currentPicker === 'stage') {
      this.setState(
        {
          selection: title,
          currentSelected: title,
          showModal: false,
          page: 1,
          selectedCity:
            title === 'Domestic'
              ? this.state.domesticData[0]
              : this.state.internationalData[0],
        },
        () => {
          this.getHotelData('getAll');
        },
      );
    } else {
      this.setState(
        {
          selectedCity: title,
          currentSelected: title,
          showModal: false,
          page: 1,
        },
        () => {
          this.getHotelData('getAll');
        },
      );
    }
  }

  render() {
    return (
      <View style={S.hsa}>
        <LogoHeader from="properties" navigation={this.props.navigation} />
        <View style={S.sa}>
          {/* <CustomText style={[texts.cb17,S.mb10]} text='Welcome to Mariot Holidays Inn & Suites' /> */}
          <CustomText style={[texts.cb17, S.mb10]} text="Properties" />
          <View style={[S.rbetween, S.wmax, S.mb20]}>
            <TouchableOpacity
              onPress={() => this.pressHandler('stage')}
              activeOpacity={0.8}
              style={[
                S.rbetween,
                S.br10elev,
                S.ph10,
                {width: '47%', height: moderateScale(50)},
              ]}>
              <CustomText style={[texts.c14]} text={this.state.selection} />
              <Icon
                name="caretdown"
                iconFamily="AntDesign"
                color={black}
                size={20}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.pressHandler('city')}
              activeOpacity={0.8}
              style={[
                S.rbetween,
                S.br10elev,
                S.ph10,
                {width: '47%', height: moderateScale(50)},
              ]}>
              <CustomText style={[texts.c14]} text={this.state.selectedCity} />
              <Icon
                name="caretdown"
                iconFamily="AntDesign"
                color={black}
                size={20}
              />
            </TouchableOpacity>
          </View>
          {this.state.hotelData.length > 0 && (
            <VirtualizedList
              style={[S.wmax, S.hmax]}
              data={this.state.hotelData}
              getItemCount={data => data.length}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
              getItem={(data, index) => data[index]}
              renderItem={({item}) => (
                <PropertyCard
                  loggedIn={this.state.loggedIn}
                  navigation={this.props.navigation}
                  item={item}
                  imageUrl={this.state.imageUrl}
                />
              )}
              contentContainerStyle={[S.pb40, {flexGrow: 1}]}
              onEndReachedThreshold={0.5}
              initialNumToRender={5}
              maxToRenderPerBatch={10}
              windowSize={15}
              onEndReached={() => this.paginate()}
              ListFooterComponent={() => (
                <View>
                  {this.state.loadMore ? (
                    <View
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: moderateScale(30),
                        paddingVertical: moderateScale(5),
                      }}>
                      <ActivityIndicator
                        animating
                        size="small"
                        color={orange}
                      />
                    </View>
                  ) : null}
                </View>
              )}
            />
          )}
        </View>
        <Toast position="bottom" visibilityTime={1000} />
        <Modal
          isVisible={this.state.showModal}
          style={[{margin: 0}, S.p10, S.ccenter, S.bgo]}
          onBackButtonPress={() => this.setState({showModal: false})}
          onBackdropPress={() => this.setState({showModal: false})}
          animationIn={'fadeIn'}
          animationOut={'fadeOut'}
          hasBackdrop
          animationInTiming={800}
          animationOutTiming={800}>
          <View style={[S.p12, S.br10elev, {backgroundColor: white}]}>
            <FlatList
              data={this.state.selectedData}
              renderItem={({item}) => (
                <PickerItem
                  title={item}
                  selected={this.state.currentSelected}
                  onItemPress={title => this.onItemPress(title)}
                />
              )}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </Modal>
        <Loader show={this.state.loader} />
      </View>
    );
  }
}
