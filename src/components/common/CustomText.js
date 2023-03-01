// Core Imports
import React, {Component} from 'react';
import {Text} from 'react-native';

export class CustomText extends Component {
     constructor(props) {
          super(props);
     }

     render() {
          return (
               <Text style={this.props.style} allowFontScaling={false} numberOfLines={this.props?.numberOfLines} ellipsizeMode={this.props?.ellipsizeMode}>
                    {this.props.text}
               </Text>
          );
     }
}
