import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    Image,
    Alert
} from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack';
import { getUsers } from './GetUser';

type ProductListProps = {
    navigation: NavigationStackProp<{}>;
};

export class ADM002 extends React.Component<ProductListProps>{
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
                    renderItem={({ item, index }) =>
                        <UserItem  full_name = {item.full_name}
                        index ={index}
                        {...item} {...navigation}
                        ></UserItem>
                    }
                    keyExtractor={(user) =>  user.user_id.toString()
                    }
                />

            </View>
        )
    }

}

type UserItemProps = {
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
    index:number
    navigate: (screenName: string, params: object)=>void
}

const UserItem:React.FC<UserItemProps> = (props) => {
    const {user_id, login_name,full_name,full_name_kana,birthday,email,tel,name_level,start_date,end_date, index, navigate} = props
    return (        
        <TouchableOpacity onPress={(event) => {

            navigate("ADM003", 
                {user_id, login_name, full_name, full_name_kana, birthday, email,tel,name_level,start_date,end_date})
        }}>
            <View style={[styles.productItem,
            index % 2 == 0 ? styles.productItemGray : styles.productItemYellow]}>
                <View style={styles.rightView}>
                    <Text style={styles.boldText}>{full_name}</Text>
                </View>
            </View>
        </TouchableOpacity>)
}


// const UserItem:React.FC<UserItemProps> = (props) => {
//     const {user_id, login_name,full_name,full_name_kana,birthday,email,tel,name_level,start_date,end_date, index, navigate} = props
//     return (        
//         <TouchableOpacity onPress={(event) => {

//             navigate("ADM003", 
//                 {user_id, login_name, full_name, full_name_kana, birthday, email,tel,name_level,start_date,end_date})
//         }}>
//             <View style={[styles.productItem,
//             index % 2 == 0 ? styles.productItemGray : styles.productItemYellow]}>
//                 <View style={styles.rightView}>
//                     <Text style={styles.boldText}>{full_name}</Text>
//                 </View>
//             </View>
//         </TouchableOpacity>)
// }



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    productItem: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    productImage: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    rightView: {
        paddingHorizontal: 10,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    productItemYellow: {
        backgroundColor: 'yellow'
    }, 
    boldText: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 10
    },
    lightText: {
        fontSize: 14,
    },
    productItemGray: {
        backgroundColor: 'grey'
    }
})