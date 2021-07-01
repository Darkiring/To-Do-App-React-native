import React from 'react';
import {Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Home from '../../view/Home';
import AddToDo from '../../view/AddToDo';

// Styled Components
import {ContentText, TextHeader} from '../../components/HeaderText';
import {
  ContainerIcons,
  ContentTaskHeader,
} from '../../components/ContainerIcons';
import {HeaderIcons} from '../../components/HeaderIcons';

// Navigation function
import * as RootNavigation from '../../navigation/RootNavigator';

const MainNavigator = () => {
  const Stack = createStackNavigator();
  const onPressSearch = () => {
    alert('Search', 'This is a button on Search!');
  };
  const onPressNotification = () => {
    alert('Notification', 'This is a button on Notification!');
  };
  const onPressMenu = () => {
    alert('Menu', 'This is a button on Menu!');
  };
  const onPressBack = () => {
    RootNavigation.goBack();
  };
  const alert = (title, message) => {
    Alert.alert('Alert Title', 'This is a button on Search!', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          headerLeft: () => (
            <ContentText>
              <TextHeader>Board</TextHeader>
            </ContentText>
          ),
          headerRight: () => (
            <ContainerIcons>
              <HeaderIcons iconName="magnifier" onPress={onPressSearch} />
              <HeaderIcons iconName="bell" onPress={onPressNotification} />
              <HeaderIcons iconName="menu" onPress={onPressMenu} />
            </ContainerIcons>
          ),
        }}
      />
      <Stack.Screen
        name="AddToDo"
        component={AddToDo}
        options={{
          title: '',
          headerLeft: () => (
            <ContentTaskHeader>
              <HeaderIcons iconName="arrow-left" onPress={onPressBack} />
              <TextHeader>Add Task</TextHeader>
            </ContentTaskHeader>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
