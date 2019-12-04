/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import ADM001 from './components/ADM001';
import ADM002 from './components/ADM002';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

const StackNavigator = createStackNavigator({
    //screens
    ADM001: {
        screen: ADM001,
        navigationOptions: {
            header: null
        }
    },
    ADM002: {
        screen: ADM002,
        navigationOptions: {
            header: null
        }
    },
    
},{
    initialRouteName: 'ADM001'
})

// AppRegistry.registerComponent(appName, () => ADM001);
AppRegistry.registerComponent(appName, () => createAppContainer(StackNavigator));


