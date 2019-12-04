
import React from 'react';
import {View, Image, StyleSheet, TextInput, Text, TouchableHighlight} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack'
export default class ADM001 extends React.Component<{navigation: NavigationStackProp<{}>}> {
    constructor(props: any){
        super(props);
    }

    render(){
        const {navigate} = this.props.navigation
        return <View style = {styles.container}>
                   <Text>Hello</Text>

                   <TouchableHighlight onPress={() => {
                            navigate("ADM001", {
                                name: "Cuong"
                            })
                        }}>
                            <Text>ログイン</Text>
                    </TouchableHighlight>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    }
});