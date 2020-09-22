import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Foundation';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';

import Loading from '../pages/Loading';
import Greeting from '../pages/Greeting';
import Home from '../pages/Home';
import Scores from '../pages/Scores';
import More from '../pages/More';
import Quiz from '../pages/Quiz';
import GameOver from '../pages/GameOver';

import {iState} from '../@types/myTypes';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabNav = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="black"
        style={{backgroundColor: 'gray'}}
        barStyle={{backgroundColor: 'white'}}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}: {color: string}) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Scores"
          component={Scores}
          options={{
            tabBarLabel: 'Resultados',
            tabBarIcon: ({color}: {color: string}) => (
              <Icon name="trophy" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="More"
          component={More}
          options={{
            tabBarLabel: 'Mais',
            tabBarIcon: ({color}: {color: string}) => (
              <Icon name="list" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const Routes = () => {
  const {initialDataState, firstTimeState} = useSelector(
    (state: iState) => state,
  );
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {initialDataState.isLoading && (
          <Stack.Screen name="Loading" component={Loading} />
        )}
        {firstTimeState.isFirstTime && (
          <Stack.Screen name="Greeting" component={Greeting} />
        )}

        <Stack.Screen name="TabNav" component={TabNav} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="GameOver" component={GameOver} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
