import React, {useCallback, useState} from 'react';
import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Pressable,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import {Checkbox} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {profileSelector} from '../store/selectors';
import {getProfile, setProfile} from '../store/actions';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const defaultProfile = useSelector(profileSelector);
  const [profile, setLocalProfile] = useState(defaultProfile);

  const pickImage = async () => {
    const result = await launchImageLibrary({mediaType: 'photo'});
    setLocalProfile(prevState => ({
      ...prevState,
      image: result.assets[0].uri,
    }));
  };

  const removeImage = () => {
    setLocalProfile(prevState => ({
      ...prevState,
      image: null,
    }));
  };

  const onSavePressed = useCallback(() => {
    dispatch(setProfile(profile));
  }, [dispatch, profile]);

  const onDiscardPressed = useCallback(() => {
    setLocalProfile(defaultProfile);
  }, [defaultProfile]);

  const onLogoutPressed = useCallback(() => {
    dispatch(setProfile(null));
    dispatch(getProfile()).then(() => navigation.navigate('Welcome'));
  }, [dispatch, navigation]);

  if (!!profile) {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require('../../../media/littleLemonLogo.png')}
            accessible={true}
            accessibilityLabel={'Little Lemon Logo'}
          />
        </View>
        <ScrollView style={styles.viewScroll}>
          <Text style={styles.headertext}>Personal information</Text>
          <Text style={styles.text}>Avatar</Text>
          <View style={styles.avatarContainer}>
            {profile.image ? (
              <Image source={{uri: profile.image}} style={styles.avatarImage} />
            ) : (
              <View style={styles.avatarEmpty}>
                <Text style={styles.avatarEmptyText}>
                  {profile.firstName && Array.from(profile.firstName)[0]}
                  {profile.lastName && Array.from(profile.lastName)[0]}
                </Text>
              </View>
            )}
            <View style={styles.avatarButtons}>
              <Pressable
                style={styles.changeBtn}
                title="Pick an image from camera roll"
                onPress={pickImage}>
                <Text style={styles.saveBtnText}>Change</Text>
              </Pressable>
              <Pressable
                style={styles.removeBtn}
                title="Pick an image from camera roll"
                onPress={removeImage}>
                <Text style={styles.discardBtnText}>Remove</Text>
              </Pressable>
            </View>
          </View>
          <Text style={[styles.text]}>First Name</Text>
          <TextInput
            style={styles.inputBox}
            value={profile.firstName}
            onChangeText={newValue =>
              setLocalProfile({
                ...profile,
                firstName: newValue,
              })
            }
            placeholder={'First Name'}
          />
          <Text style={[styles.text]}>Last Name</Text>
          <TextInput
            style={styles.inputBox}
            value={profile.lastName}
            onChangeText={newValue =>
              setLocalProfile({
                ...profile,
                lastName: newValue,
              })
            }
            placeholder={'Last Name'}
          />
          <Text style={[styles.text]}>Email</Text>
          <TextInput
            style={styles.inputBox}
            value={profile.email}
            keyboardType="email-address"
            onChangeText={newValue =>
              setLocalProfile({
                ...profile,
                email: newValue,
              })
            }
            placeholder={'Email'}
          />
          <Text style={styles.headertext}>Email notifications</Text>
          <TouchableOpacity
            style={styles.section}
            onPress={() =>
              setLocalProfile(() => ({
                ...profile,
                orderStatuses: !profile.orderStatuses,
              }))
            }>
            <Checkbox
              style={styles.checkbox}
              value={profile.orderStatuses}
              status={profile.orderStatuses ? 'checked' : 'unchecked'}
              color={'#495e57'}
            />
            <Text style={styles.paragraph}>Order statuses</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.section}
            onPress={() =>
              setLocalProfile(() => ({
                ...profile,
                passwordChanges: !profile.passwordChanges,
              }))
            }>
            <Checkbox
              style={styles.checkbox}
              value={profile.passwordChanges}
              status={profile.passwordChanges ? 'checked' : 'unchecked'}
              color={'#495e57'}
            />
            <Text style={styles.paragraph}>Password changes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.section}
            onPress={() =>
              setLocalProfile(() => ({
                ...profile,
                specialOffers: !profile.specialOffers,
              }))
            }>
            <Checkbox
              style={styles.checkbox}
              value={profile.specialOffers}
              status={profile.specialOffers ? 'checked' : 'unchecked'}
              color={'#495e57'}
            />
            <Text style={styles.paragraph}>Special offers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.section}
            onPress={() =>
              setLocalProfile({...profile, newsletter: !profile.newsletter})
            }>
            <Checkbox
              style={styles.checkbox}
              value={profile.newsletter}
              status={profile.newsletter ? 'checked' : 'unchecked'}
              color={'#495e57'}
            />
            <Text style={styles.paragraph}>Newsletter</Text>
          </TouchableOpacity>
          <Pressable style={styles.btn} onPress={onLogoutPressed}>
            <Text style={styles.btntext}>Log out</Text>
          </Pressable>
          <View style={styles.buttons}>
            <Pressable style={[styles.discardBtn]} onPress={onDiscardPressed}>
              <Text style={styles.discardBtnText}>Discard changes</Text>
            </Pressable>
            <Pressable style={[styles.saveBtn]} onPress={onSavePressed}>
              <Text style={styles.saveBtnText}>Save changes</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  } else {
    return <ActivityIndicator />;
  }
};

export default ProfileScreen;
