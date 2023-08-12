import React,{PureComponent} from 'react'
import { TouchableOpacity } from 'react-native';
import { styles, texts } from '../../css';
import { CustomText } from './CustomText';

export default class SmallButton extends PureComponent{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <TouchableOpacity activeOpacity={0.8} style={[styles.smallBtnShell]} onPress={()=>this.props.onPress()}>
                <CustomText style={[texts.b16,texts.white,texts.tac]} text={this.props.buttonText} />
            </TouchableOpacity>
        )
    }
}