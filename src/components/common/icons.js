import React, {Component} from 'react';
import {Animated} from 'react-native';
// vector icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export class Icon extends Component {
     constructor() {
          super();
          this.shouldUpdate = false;
          this.AnimatedValue = new Animated.Value(0);
     }

     UNSAFE_componentWillReceiveProps(nextProps) {
          if (this.props.name !== nextProps.name) {
               this.shouldUpdate = true;
               this.AnimatedValue.setValue(0);
          } else if (nextProps.animateAllActive) {
               if (this.props.isActive || nextProps.isActive) {
                    this.shouldUpdate = true;
                    this.AnimatedValue.setValue(0);
               } else {
                    this.shouldUpdate = false;
               }
          } else if (this.props.isActive !== nextProps.isActive) {
               this.shouldUpdate = true;
               this.AnimatedValue.setValue(0);
          } else {
               this.shouldUpdate = false;
          }
     }

     getIcon(iconFamily) {
          switch (iconFamily) {
               case 'AntDesign':
                    return AntDesign
               case 'Entypo':
                    return Entypo
               case 'EvilIcons':
                    return EvilIcons
               case 'FontAwesome':
                    return FontAwesome
               case 'Foundation':
                    return Foundation
               case 'Ionicons':
                    return Ionicons
               case 'SimpleLineIcons':
                    return SimpleLineIcons
               case 'MaterialIcons':
                    return MaterialIcons
               case 'MaterialCommunityIcons':
                    return MaterialCommunityIcons
               case 'Octicons':
                    return Octicons
               case 'Zocial':
                    return Zocial
               default:
                    return MaterialCommunityIcons
          }
     }

     render() {
          let {color, colorOutputRange, colorInputRange, animation, iconFamily, name, size, scaleInputRange, scaleOutputRange} = this.props;
          let Icon = this.getIcon(iconFamily);
          const AnimatedIcon = Animated.createAnimatedComponent(Icon);
          if (this.shouldUpdate) Animated.timing(this.AnimatedValue, animation,).start();

          return (
               <AnimatedIcon
                    size={size}
                    name={name}
                    style={{
                         color: colorOutputRange && colorInputRange ? this.AnimatedValue.interpolate({outputRange: colorOutputRange, inputRange: colorInputRange, useNativeDriver:true}) : color,
                         backgroundColor: 'transparent',
                         transform: [
                              {
                                   scale: this.AnimatedValue.interpolate({
                                        inputRange: scaleInputRange,
                                        outputRange: scaleOutputRange,
                                        useNativeDriver: true
                                   }),
                              },
                         ],
                    }}
               />
          );
     }
}

Icon.defaultProps = {
     color: 'rgba(0,0,0,0.5)',
     iconFamily: 'MaterialCommunityIcons',
     animation: {
          toValue: 1,
          duration: 500,
     },
     scaleInputRange: [0, 0.6, 1],
     scaleOutputRange: [1, 1.1, 1],
};
