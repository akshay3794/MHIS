import React,{PureComponent} from 'react'
import { View, ActivityIndicator } from 'react-native';
import { S, styles } from '../../css';
import Modal from 'react-native-modal';

export default class Loader extends PureComponent{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Modal
                isVisible={this.props.show}
                style={{margin:0}}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
            >
                <View style={S.hp100wp100}>
                    <ActivityIndicator size="large" color="#FFFFFF" />
                </View>
            </Modal>
        )
    }
}