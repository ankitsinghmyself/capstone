import React, {useCallback, useMemo, useState} from 'react';
import {View, Image, Text, TextInput, Pressable} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setProfile} from '../../profile/store/actions';
const logo = require('../../../media/littleLemonLogo.png');
const foodImg = require('../../../media/restauranfood.png');

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [firstName, onChangeFirstName] = useState('');
  const [lastName, onChangeLastName] = useState('');
  const [email, onChangeEmail] = useState('');

  const isDisabled = useMemo(
    () => firstName === '' || lastName === '' || email === '',
    [email, firstName, lastName],
  );

  const btnStyles = useMemo(() => {
    if (isDisabled) {
      return styles.btnDisabledContainer;
    }
    return styles.btnEnabledContainer;
  }, [isDisabled]);

  const onButtonPressed = useCallback(() => {
    if (!isDisabled) {
      // @ts-ignore
      dispatch(
        setProfile({
          firstName,
          lastName,
          email,
          image: null,
          newsletter: false,
          orderStatuses: false,
          passwordChanges: false,
          specialOffers: false,
        }),
      );
      // @ts-ignore
      navigation.navigate('Home');
    }
  }, [dispatch, email, firstName, isDisabled, lastName, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={logo}
          accessibilityLabel={'Little Lemon Logo'}
        />
      </View>

      <View style={styles.heroSection}>
        <Text style={styles.heroHeader}>Little Lemon</Text>
        <View style={styles.heroBody}>
          <View style={styles.heroContent}>
            <Text style={styles.heroHeader2}>Chicago</Text>
            <Text style={styles.heroText}>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </Text>
          </View>
          <Image source={foodImg} style={styles.heroImage} />
        </View>
      </View>

      <View style={{flex: 1}}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>First Name</Text>
          <TextInput
            style={styles.inputBox}
            value={firstName}
            onChangeText={onChangeFirstName}
            placeholder={'First Name'}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Last Name</Text>
          <TextInput
            style={styles.inputBox}
            value={lastName}
            onChangeText={onChangeLastName}
            placeholder={'Last Name'}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={onChangeEmail}
            placeholder={'Email'}
            keyboardType="email-address"
          />
        </View>
        <Pressable
          style={btnStyles}
          disabled={isDisabled}
          onPress={onButtonPressed}>
          <Text style={styles.btntext}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WelcomeScreen;
