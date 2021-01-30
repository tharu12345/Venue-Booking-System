import{createAppcontainer}from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import app1 from '../screens/home';
import Register from '../screens/new';

const MainNavigator = createStackNavigator(
    {
        Home: {
            screen:Home,  
        },
        login:{
            screen:new,
        },   
    },
    {
        initialRouteName: 'home'
    },
);

const App = createAppcontainer(MainNavigator);
export default App;