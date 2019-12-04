import React from 'react';
import {View, Image, StyleSheet, TextInput, Text, TouchableHighlight} from 'react-native';
import LoginTextInput from './LoginTextInput';
import { NavigationStackProp } from 'react-navigation-stack'

// interface Props {
//     navigate?: (screenName: string, params: object)=>void
// }
export default class ADM001 extends React.Component<{navigation: NavigationStackProp<{}>}> {
    constructor(props: any){
        super(props);
    }
    render(){
        const {navigate} = this.props.navigation
        return <View style = {styles.container}>
                    <View style={styles.viewCommon}>
                        <Text style={styles.textLabel}>アカウント名およびパスワードを入力してください</Text>
                    </View>
                        <LoginTextInput style={styles.myTextInput} 
                                title={"アカウント名"} 
                                validate={"email"} />

                        <LoginTextInput style={styles.myTextInput} 
                                title={"パスワード"} secureTextEntry 
                                validate={"email"} />
                                
                    <View style={styles.viewCommon}>
                        <TouchableHighlight style={[styles.button, styles.viewCommon]} onPress={() => {
                            navigate("ADM002", {
                                name: "Cuong"
                            })
                        }}>
                            <Text>ログイン</Text>
                        </TouchableHighlight>
                    </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
    },
    viewCommon: {
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
        borderRadius: 5,
        borderWidth: 1,
        marginVertical: 10,
        
    },
    myTextInput: {
        height: 30,
        // marginVertical: 10
    },
});
