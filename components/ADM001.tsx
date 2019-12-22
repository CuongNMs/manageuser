import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    Alert
} from 'react-native'
import { Provider, connect } from 'react-redux'
import { NavigationStackProp } from 'react-navigation-stack';
import store from '../redux/store/store'

export class ADM001 extends React.Component<{ navigation: NavigationStackProp<{}> }> {
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
                    onPress={this.login}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>

        );
    }

    login = () => {
        return fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                login_name: this.state.login_name,
                password: this.state.password
            })
        })
            .then((response) =>{   
                    return response.json();
                }
            )
            .then((res) => {
                return {
                    message: res.message
                  }
            })
            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                throw error;
            });
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
