import {Button, StyleSheet, Text, View, StatusBar} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
// import {Ionicons} from "@expo/vector-icons";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';


function Page_1(){
    return(
        <View>
            <Text>Hello World</Text>
        </View>
    )
}

function Page_2(){

      return (
          <View>
              <Button title={'+'} onPress={() => {}}/>
              <Text></Text>
              <Button title={'-'} onPress={() => {
              }}/>
          </View>
      )





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
