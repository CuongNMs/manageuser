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
export class ADM002 extends React.Component<{ navigation: NavigationStackProp<{}> }>{
    state = {
        users: []
    }
    async componentDidMount() {
        try {
            let response = await getUsers();
            if (response.length > 0) {
                this.setState({ users: response })
                console.log(this.state.users)
            }
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <View>
                <Text>
                    ADM002
               </Text>

                <FlatList data={this.state.users}
                    renderItem={this._FlatListItem}
                >
                </FlatList>
            </View>
        )
    }

    _FlatListItem = (item: any) => (
        <View>
            <Text style={styles.flatListItem}>{item.login_name}</Text>
        </View>
        
    )
}
type UserProps = {
    login_name: string
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
    },
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16
    }
})