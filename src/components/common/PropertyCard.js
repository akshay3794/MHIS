import React, {PureComponent} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {CustomText} from './CustomText';
import {S, styles, texts} from '../../css';
import {hotel1} from './images_exports';
import SmallButton from './smallButton';

export default class PropertyCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: props.imageUrl,
      image: '',
      loggedIn: props.loggedIn,
    };
  }

  componentDidMount() {
    let images = JSON.parse(this.props.item.images);
    if (images.length > 0) {
      this.setState({image: this.state.imageUrl + images[0]});
    }
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('SingleProperty', {
            item: this.props.item,
            imageUrl: this.state.imageUrl,
          })
        }
        activeOpacity={0.8}
        style={styles.propertyCard}>
        <Image
          source={this.state.image === '' ? hotel1 : {uri: this.state.image}}
          style={[S.h300wp100, S.br10elev]}
        />
        <View style={[S.flx, S.p10]}>
          <View style={[S.rbetween]}>
            <CustomText
              style={[texts.c16, texts.fwBold]}
              text={this.props.item.name}
            />
            <CustomText style={[texts.c12]} text={this.props.item.city} />
          </View>
          <CustomText
            numberOfLines={5}
            ellipsizeMode="tail"
            style={[texts.b12, texts.grey]}
            text={this.props.item.description}
          />
        </View>
        {this.state.loggedIn ? (
          <View style={{alignItems: 'flex-end'}}>
            <SmallButton
              buttonText={'Book'}
              onPress={() =>
                this.props.navigation.navigate('Booking', {
                  data: this.props.item,
                })
              }
            />
          </View>
        ) : null}
      </TouchableOpacity>
    );
  }
}
