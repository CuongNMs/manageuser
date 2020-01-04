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



type DetailUserProps = {
    navigation: {
        state: {
            params: {
                user_id:string
                login_name: string
                full_name: string
                full_name_kana: string
                birthday: string
                email: string
                tel: string
                name_level: string
                start_date: string
                end_date: string
            }
        }
    }
}
export class ADM003 extends React.Component<DetailUserProps>{
    state = {
        login_name: "",
        full_name: "",
        full_name_kana: "",
        birthday: "",
        email: "",
        tel: "",
        name_level: "",
        start_date: "",
        end_date:""
    }

    componentDidMount() {
        const {login_name, full_name , full_name_kana, birthday, email, tel,name_level, start_date, end_date} = this.props.navigation.state.params
        this.setState({login_name, full_name, full_name_kana, birthday,email,tel,name_level,start_date,end_date})
    }

    render() {        
        const {navigation} = this.props
        const {login_name, full_name, full_name_kana, birthday} = this.state
        return <View style = {styles.container}>      
            <TextInput style={styles.textInput} editable={false}
                value={login_name}
                onChangeText = {(text) => {
                    this.setState({login_name: text})
                }}
                placeholder={"Enter login name"}>

            </TextInput>
            <TextInput style={styles.textInput} editable={false}
                value={full_name}
                onChangeText = {(text) => {
                    this.setState({full_name: text})
                }}
                placeholder={"Enter full name"}>

            </TextInput>
            <TextInput style={styles.textInput} editable={false}
                value={full_name_kana}
                onChangeText = {(text) => {
                    this.setState({full_name_kana: text})
                }}
                placeholder={"Enter full name kana"}>
            </TextInput>
            <TextInput style={styles.textInput} editable={false}
                value={birthday}
                onChangeText = {(text) => {
                    this.setState({birthday: text})
                }}
                placeholder={"Enter birthday"}>
            </TextInput>
            
        </View>
    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        borderRadius: 50,
        margin: 20
    },
    textInput: {
        height: 35,
        borderColor: 'gray',
        borderWidth: 1,
        marginHorizontal: 30,
        borderRadius: 8, 
        paddingHorizontal: 6,
        marginBottom: 16
    },
    twoButtons: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnAdd: {
        height: 35,
        margin: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
    }
})