import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import home from '../screens/home';
import login from '../screens/login';
import register from '../screens/register';
import homepage from '../screens/homepage';
import catogory from '../screens/catogory';
import offers from '../screens/offers';
import women from '../screens/women';
import mens from '../screens/mens';
import kids from '../screens/kids';
import schools from '../screens/schools';
import selectandrequest  from '../screens/selectandrequest';
import thank from '../screens/thank';




const MainNavigator = createStackNavigator(
    {
        home: {
            screen:home,
        },
        login: {
            screen:login,
        },
        register: {
            screen:register,
        },
        homepage: {
            screen:homepage,
        },
        catogory: {
            screen:catogory,
        },
        offers: {
            screen:offers,
        },
        women: {
            screen:women,
        },
        mens: {
            screen:mens,
        },
        kids: {
            screen:kids,
        },
        schools:{
            screen:schools,
        },
        selectandrequest:{
            screen:selectandrequest,
        },
        thank:{
            screen:thank,
        }
    },
    {
        initialRouteName: 'home',
    },

);

const App = createAppContainer(MainNavigator);

export default App;