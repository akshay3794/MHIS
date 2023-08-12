// Core Imports
import React, {Component} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';

// Styling
import {S, styles, texts} from '../../css';
import {black, errorRed, inputBackground} from '../../utils/colors';
import {Icon} from './icons';

export class CustomInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={[
          styles.inputText,
          S.rbetween,
          this.props?.styles,
          {backgroundColor: this.props?.error ? errorRed : inputBackground},
        ]}>
        <View style={[S.flx]}>
          <TextInput
            editable={this.props?.editable}
            autoCapitalize={this.props?.autoCapitalize}
            placeholder={this.props?.placeholder}
            secureTextEntry={this.props?.secureTextEntry}
            maxLength={this.props?.maxLength}
            placeholderTextColor={black}
            keyboardType={this.props?.keyboardType}
            style={[texts.c12]}
            onChangeText={this.props?.onChangeText}
            value={this.props?.value}
            multiline={this.props?.multiline}
          />
        </View>
        {this.props?.showEye ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props?.onEyePress()}>
            <Icon
              name={this.props?.secureTextEntry ? 'eye-off' : 'eye'}
              iconFamily="Ionicons"
              color={black}
              size={20}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}
