import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import User from '../app/Profile';

const Tab = createBottomTabNavigator ();

export default function TabRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
            
            name='User'
            component={User}
            />

        </Tab.Navigator>

    )
}
