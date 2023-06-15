import { Platform } from "react-native";
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { View, Text, useTheme, Icon } from "native-base";

import { House, Tag, SignOut } from 'phosphor-react-native';

import Home from "@screens/Home";
import MyAds from "@screens/MyAds";

type AppRoutes = {
    Home: undefined;
    MyAds: undefined;
    SignOut: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() { 
    
    const { sizes, colors } = useTheme()
    const iconSize = sizes[6]

    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.gray[200],
            tabBarInactiveTintColor: colors.gray[400],
            tabBarStyle: {
                backgroundColor: colors.gray[700],
                borderTopWidth: 0,
                height: Platform.OS === 'android' ? 'auto' : 96,
                paddingBottom: sizes[10],
                paddingTop: sizes[6],
            }
        }}>
            <Screen 
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <House color={color} weight="bold" size={24}/>
                    )
                }}
            />

            <Screen 
                name='MyAds'
                component={MyAds}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Tag color={color} weight="regular" size={24}/>
                    )
                }}
            />

            <Screen 
                name='SignOut'
                component={MyAds}
                options={{
                    tabBarIcon: ({ color }) => (
                        <SignOut color={color} weight="regular" size={24}/>
                    )
                }}
            />
            
        </Navigator>
        
    )

}