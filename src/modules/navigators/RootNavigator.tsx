import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../welcome/ui';
import HomeScreen from '../home/ui';
import {useDispatch, useSelector} from 'react-redux';
import {isAuthCheckedSelector} from '../profile/store/selectors';
import {useEffect} from 'react';
import {getProfile} from '../profile/store/actions';
import ProfileScreen from '../profile/ui';
const screenOptions = {headerShown: false};

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const dispatch = useDispatch();
  const isAuthChecked = useSelector(isAuthCheckedSelector);

  useEffect(() => {
    // @ts-ignore
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={screenOptions}>
      {!isAuthChecked && (
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      )}
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
