import React from 'react'
import {View, 
    Text,
    TextInput, Image, 
    StyleSheet,
    Dimensions,
    TouchableHighlight} from 'react-native'

interface Props {
    title: string
    secureTextEntry?: boolean
    validate: string
    style: object
}
export default class LoginTextInput extends React.Component<Props> {
    render() {
        const {title, secureTextEntry, validate} = this.props
        return <View style={[this.props.style, styles.container]}>
                        <Text style={styles.title}>{title.toUpperCase()}:</Text>
                        <TextInput style={styles.textInput}
                            secureTextEntry={secureTextEntry}
                        />
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 10,
        marginHorizontal: 55,
    },
    title: {
        textAlign: 'right',
        paddingVertical: 5,
        marginRight: 10,
       // backgroundColor: 'red'
    },
    textInput: {
        borderWidth: 1,
        fontSize: 14,
        paddingVertical: 4,
        width: 200,
        
    }
    
})