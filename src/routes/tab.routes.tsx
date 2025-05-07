import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import User from '../../app/User';

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
