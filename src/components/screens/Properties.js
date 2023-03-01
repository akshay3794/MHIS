import React,{Component} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import { S, styles, texts } from '../../css';
import Header from '../common/Header';
import {Picker} from '@react-native-picker/picker';
import { hotel1 } from '../common/images_exports';
import { CustomText } from '../common/CustomText';

const DATA = [
    {
      id: '1',
    },
    {
      id: '2',
    },
    {
      id: '3',
    },
    {
      id: '4',
    },
    {
      id: '5',
    },
    {
      id: '6',
    },
    {
      id: '7',
    },
];

const Item = ({title, navigation}) => (
    <TouchableOpacity onPress={()=>navigation.navigate('SingleProperty')} activeOpacity={0.8} style={styles.propertyCard}>
        <Image source={hotel1} style={[S.hp50wp100,S.br12]} />
        <View style={[S.flx,S.p12]}>
            <View style={[S.rbetween]}>
                <CustomText style={[texts.c16,texts.fwBold]} text='Four point by sheroton' />
                <CustomText style={[texts.c12]} text='New Delhi' />
            </View>
            <CustomText numberOfLines={5} ellipsizeMode='tail' style={[texts.b12,texts.grey]} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged" />
        </View>
    </TouchableOpacity>
);

export default class Properties extends Component{
    constructor(props){
        super(props)
        this.state={
            selection:''
        }
    }

    render(){
        return(
            <View style={S.hsa}>
                <Header label='Properties' onPress={()=>this.props.navigation.pop()} />
                <View style={S.sa}>
                    <Picker
                        selectedValue={this.state.selection}
                        mode='dialog'
                        onValueChange={(itemValue, itemIndex) => this.setState({selection:itemValue})}
                        style={[S.mb8,S.br10elev]}
                    >
                        <Picker.Item label="Domestic" value="0" />
                        <Picker.Item label="International" value="1" />
                    </Picker>
                    <FlatList
                        data={DATA}
                        style={[S.flx]}
                        contentContainerStyle={[S.pb50]}
                        renderItem={({item}) => <Item title={item.title} navigation={this.props.navigation} />}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        )
    }
}