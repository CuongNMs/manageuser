import React, {Component} from 'react'
import {View} from 'react-native'
import {do2Task} from './calculation'
export default class Main extends React.Component{
    componentDidMount(){
        do2Task()
    }

    render(){
        return <View>

        </View>
    }
}