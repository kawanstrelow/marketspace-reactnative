import { Platform } from "react-native";
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { View, Text, useTheme, Icon, Pressable } from "native-base";

import { House, Tag, SignOut } from 'phosphor-react-native';

import Home from "@screens/Home";
import MyProducts from "@screens/MyProducts";
import Product from "@screens/Product";
import CreateAd from "@screens/CreateAd";
import { ProductDTO } from "@dtos/ProductDTO";
import CreateAdPreview from "@screens/CreateAdPreview";
import { SignIn } from "@screens/SignIn";
import { useAuth } from "@hooks/useAuth";

type AppRoutes = {
    Home: undefined;
    MyProducts: undefined;
    Product: { data: ProductDTO };
    SignOut: undefined;
    CreateAd: undefined;
    CreateAdPreview: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() { 

    const LogoutComponent = () => {
        return null
    }
    
    const { sizes, colors } = useTheme()
    const iconSize = sizes[6]
    const { signOut } = useAuth()

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
                name='Product'
                component={Product}
                options = {{
                    tabBarButton: () => null,
                    tabBarStyle: { display: 'none'}
                }}
            />
                
            <Screen 
                name='MyProducts'
                component={MyProducts}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Tag color={color} weight="regular" size={24}/>
                    )
                }}
            />

            <Screen 
                name='SignOut'
                component={LogoutComponent}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Pressable onPress={signOut}>
                            <SignOut color={color} weight="regular" size={24}/>
                        </Pressable>
                        
                    ),
                    
                }}
            />

            <Screen 
                name='CreateAd'
                component={CreateAd}
                options = {{
                    tabBarButton: () => null,
                    tabBarStyle: { display: 'none'}
                }}
            />

            <Screen 
                name='CreateAdPreview'
                component={CreateAdPreview}
                options = {{
                    tabBarButton: () => null,
                    tabBarStyle: { display: 'none'}
                }}
            />

            
        </Navigator>
        
    )

}