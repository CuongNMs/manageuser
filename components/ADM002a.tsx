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

type ProductListProps = {
    navigation: NavigationStackProp<{}>;
};

export class ADM002 extends React.Component<{ navigation: NavigationStackProp<{}> }>{
    state = {
        users: []
    }
    async componentDidMount() {
        try {
            let arrayUser = await getUsers();
            this.setState({ users: arrayUser })
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const {navigation} = this.props
        return (
            <View style={styles.container} >
                <Text>
                    ADM002
               </Text>

                <FlatList
                    data={this.state.users}
                    renderItem={({ item }) =>
                        <Item login_name={item.user_id}
                        navigation = {navigation}
                        ></Item>
                    }
                    keyExtractor={item => item.user_id.toString()}
                />

            </View>
        )
    }

}

function Item({ login_name, navigation }: { login_name: string, navigation: NavigationStackProp<{}>}) {
    return (
        <TouchableOpacity onPress={(event) => {
            navigation.navigate("ADM003", 
                {login_name})
        }}>
            <View style={styles.item}>
                <Text style={styles.title}>
                    {login_name}
                </Text>
            </View>
        </TouchableOpacity>
    );
}


type UserItemProps = {
    user_id:string;
    login_name: string;
    index: number;
    navigate: (screenName: string, params: object) =>void
}
const _Item:React.FC<UserItemProps> = (props) =>{

    const {login_name, index, navigate} = props
    return (
        <TouchableOpacity onPress = {(event) =>{
            navigate("ADM003", {login_name, index})
        }}>
            
        </TouchableOpacity>
    );
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