import 'react-native-gesture-handler';
import React from 'react';
import {ImageBackground, LogBox, StyleSheet, Text, View} from 'react-native';
import {Login_page} from './components/login page/login.js';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';
import {Main_page} from './components/main page/main_page.js';
import {Signup} from './components/signup.js/signup.js';
import {Settings} from './components/drawer pages/setting.js';
import {Mycart} from './components/drawer pages/mycart/mycart.js';
import {Notification} from './components/drawer pages/notifications.js';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Upload} from './components/upload_item/upload_page.js';
import { OrderDetails_Page } from './components/order page/order_details.js';
//import { FilterPage } from './components/searchbar & filter/filterpage.js';

const Drawer = createDrawerNavigator();

enableScreens();
const Stack = createNativeStackNavigator();




export function Root({route}:any) {
  const {email} =route.params;
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0000cd',
        },
        headerTitleStyle: {
          fontSize: 25,
        },
        headerTitleAlign: 'center', // Align header title to center
      }}>
      <Drawer.Screen
        name="Main"
        component={Main_page}
        initialParams={{email}} //paasing the email as prop to the main_page
        options={{
          headerStyle: {
            backgroundColor: '#0000cd',
          },
          headerTitleStyle: {
            color: 'white', // Set the desired text color
          },
        }}
      />

      <Drawer.Screen
        name="Mycart"
        component={Mycart}
        initialParams={{email}}
        options={{
          headerStyle: {
            backgroundColor: '#0000cd', 
          },
          headerTitleStyle: {
            color: 'white', // Set the desired text color
          },
        }}
      />
      {/* <Drawer.Screen
        name="Notification"
        component={Notification}
        options={{
          headerStyle: {
            backgroundColor: '#0000cd',
          },
          headerTitleStyle: {
            color: 'white', // Set the desired text color
          },
        }}
      /> */}
      <Drawer.Screen
        name="Settings"
        component={Settings}
        initialParams={{email}}
        options={{
          headerStyle: {
            backgroundColor: '#0000cd',
          },
          headerTitleStyle: {
            color: 'white', // Set the desired text color
          },
        }}
      />
    </Drawer.Navigator>
    
  );
}

function App(): React.JSX.Element {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f5f5f5',
            },
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitleAlign: 'center', // Align header title to center
          }}>
          <Stack.Screen
            name="Login"
            component={Login_page}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Root"
            component={Root}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: '#0000cd',
              },
              headerTitleStyle: {
                color: 'white', // Set the desired text color
              },
            }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerStyle: {
                backgroundColor: '#0000cd',
              },
              headerTitleStyle: {
                color: 'white', // Set the desired text color
              },
            }}
          />
          <Stack.Screen
            name="Order"
            component={OrderDetails_Page}
            options={{
              headerStyle: {
                backgroundColor: '#0000cd',
              },
              headerTitleStyle: {
                color: 'white', // Set the desired text color
              },
            }}
          />
          <Stack.Screen
            name="Upload"
            component={Upload}
            options={{
              headerStyle: {
                backgroundColor: '#0000cd',
              },
              headerTitleStyle: {
                color: 'white', // Set the desired text color
              },
            }}
          />
          {/* <Stack.Screen
            name="Filters"
            component={FilterPage}
            options={{
              headerStyle: {
                backgroundColor: '#0000cd',
              },
              headerTitleStyle: {
                color: 'white', // Set the desired text color
              },
            }}
          /> */}
          
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
