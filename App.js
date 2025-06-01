
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
// import {Ionicons} from "@expo/vector-icons";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react';
import { Button, Text, View, Alert,StatusBar} from 'react-native';


function Page_1()
{
    return (
        <View>
            <Text>Hello World</Text>
        </View>
    )
}




function Page_2() {
    const [count, setCount] = useState(0);

    const n1 = () => {
        setCount(prev => prev + 1);
    };

    const n2 = () => {
        if (count < 1) {
            Alert.alert('Error');
            return;
        }
        setCount(prev => prev - 1);
    };

    return (
        <View style={{ alignItems: 'center', marginTop: 50 }}>
            <Button title="+" onPress={n1} />
            <Text style={{ fontSize: 32, marginVertical: 20 }}>{count}</Text>
            <Button title="-" onPress={n2} />
        </View>
    );
}

const TopTab = createMaterialTopTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="gray"/>
            <TopTab.Navigator
                initialRouteName="Page_1"
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: '#1e90ff',
                    tabBarInactiveTintColor: '#8e8e8e',
                    tabBarIndicatorStyle: { backgroundColor: '#3cff1e' },
                    tabBarStyle: { backgroundColor: '#b8b3b3' },
                    animationEnabled: false,
                    tabBarShowIcon: true,
                    tabBarIcon: ({ color }) => {
                        let iconName;

                        if (route.name === 'Login') {
                            iconName = 'log-in-outline';
                        } else if (route.name === 'Profile') {
                            iconName = 'person-circle-outline';
                        }

                        return <Ionicons name={iconName} size={20} color={color} />;
                    },
                })}
            >
                <TopTab.Screen name="Page_1" component={Page_1}/>
                <TopTab.Screen name="Page_2" component={Page_2}/>

            </TopTab.Navigator>
        </NavigationContainer>
    );
}
