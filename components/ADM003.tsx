import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    Alert
} from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack';
import { getUsers } from './GetUser';
export class ADM003 extends React.Component<{ navigation: NavigationStackProp<{}> }>{
    state = {
        login_name: String
    }

    async componentDidMount() {
        try {
            this.setState({login_name : this.props.navigation.state.params})
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        console.log(this.state.login_name);
        return (
            <View>
                <Text>ADM003</Text>
                
            </View>
        );
    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
    },
});