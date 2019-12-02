import React from 'react'
import {View, 
    Text,
    TextInput, Image, 
    StyleSheet,
    Dimensions,
    TouchableHighlight} from 'react-native'

interface Props {
    title: string
    placeholder: string
    secureTextEntry?: boolean
    validate: string
    style: object
}
export default class LoginTextInput extends React.Component<Props> {
    render() {
        const {title, placeholder, secureTextEntry, validate} = this.props
        return <View style={[this.props.style, styles.container]}>
                        <Text style={styles.title}>{title.toUpperCase()}:</Text>
                        <TextInput style={styles.textInput}
                            placeholder={placeholder} secureTextEntry={secureTextEntry}
                        />
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        //justifyContent: 'flex-start',
        //alignItems: 'stretch',
        marginHorizontal: 10
    },
    title: {
        textAlign: 'left',
        paddingVertical: 5,
        //paddingRight: 10
    },
    textInput: {
        flex: 1,
        marginStart: 25,
        backgroundColor: 'red',
        borderWidth: 1,
        fontSize: 14,
        paddingVertical: 4,
        
    }
    
})