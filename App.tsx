import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ViewProfile from './screens/ViewProfile/ViewProfile';
import {StatusBar} from 'react-native';
import EditDetail from './screens/Edit/EditDetail/EditDetail';
import EditName from './screens/Edit/EditName/EditName';
import {Details} from './utils/utils';
import EditImage from './screens/Edit/EditImage/EditImage';

export type RootStackParamList = {
  Home: undefined;
  ViewProfile: any;
  EditDetail: {
    type: Details;
    detail?: string;
  };
  EditName: {
    type: Details;
    names?: {firstName: string; lastName: string};
  };
  EditImage: {
    uri: string;
  };
  Button: {
    data: string | {firstName: string; lastName: string};
    type: Details;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      <Stack.Navigator initialRouteName="ViewProfile">
        <Stack.Screen
          name="ViewProfile"
          component={ViewProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditDetail"
          component={EditDetail}
          options={{
            title: '',
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="EditName"
          component={EditName}
          options={{
            title: '',
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="EditImage"
          component={EditImage}
          options={{
            title: '',
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
