import React from 'react';
import {View, Image, StyleSheet, TextInput, Text, TouchableHighlight} from 'react-native';
import LoginTextInput from './LoginTextInput';



export default class ADM001 extends React.Component {
    constructor(props: any){
        super(props);
    }

    render(){
        return <View style = {styles.container}>
            <Text style={styles.textLabel}>アカウント名およびパスワードを入力してください</Text>

            <LoginTextInput style={styles.myTextInput} 
                    title={"アカウント名"} placeholder={"Enter your email"} 
                    validate={"email"} />

            <LoginTextInput style={styles.myTextInput} 
                    title={"パスワード"} placeholder={"Enter your password"} secureTextEntry 
                    validate={"email"} />

            <TouchableHighlight style={styles.button}>
                <Text>ログイン</Text>
             </TouchableHighlight>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    textLabel: {
        fontSize: 16,
        marginVertical: 10,
        fontWeight: "bold"
    },
    button: {
        height: 20,
        width: 100,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 5,
        borderWidth: 1,
        marginVertical: 10
    },
    myTextInput: {
        height: 30,
        marginVertical: 10
    },

});
