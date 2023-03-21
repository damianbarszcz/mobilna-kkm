import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const BottomNavbar = () => {
    return (
        <NavigationContainer style={{ flex: 1, backgroundColor: '#ff0000' }}>
            <Stack.Navigator>
                <Stack.Screen name="Start" />
                <Stack.Screen name="Tickets" />
                <Stack.Screen name="Status" />
                <Stack.Screen name="More" />
            </Stack.Navigator>
        </NavigationContainer>
    );
  };
  
  export default BottomNavbar;