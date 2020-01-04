import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack';
import {login} from './Login'

export class ADM001 extends React.Component<{navigation: NavigationStackProp<{}>}> {
    state = {
        isLogin: true,
        login_name: '',
        password: ''
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    LOGIN
               </Text>
                <TextInput
                    style={styles.textInput} placeholder='Username'
                    onChangeText={(login_name) => this.setState({ login_name })}
                    underlineColorAndroid='transparent'
                />

                <TextInput
                    style={styles.textInput} placeholder='Password'
                    onChangeText={(password) => this.setState({ password })}
                    underlineColorAndroid='transparent'
                />

                <TouchableOpacity style={styles.btn}
                    onPress={() => {
                        login(this.state.login_name, this.state.password)
                        .then((message) => {
                            if(!message) {
                                Alert.alert("Sai tên đăng nhập hoặc mật khẩu")
                            }else{
                                navigate!("ADM002", {name: "Hoang"})
                            }
                        })
                    }}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>

        );
    }

    
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2896d3',
        paddingLeft: 40,
        paddingRight: 40
    },
    header: {
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
        fontWeight: 'bold'
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    btn: {
        alignSelf: 'stretch',
        backgroundColor: '#01c853',
        padding: 20,
        alignItems: 'center'
    }
})
