import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import { GoogleSigninButton } from '@react-native-community/google-signin';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
import { T, Input, Button } from '_atoms';
import { onGoogleButtonPress } from '_utils/authUtils';
import { LanguageModal } from '_molecules';
import { Colors } from '_styles';
import loginSelectors from './selectors';
import { LoginActions } from './reducer';

// async function onGoogleButtonPress() {
//   try {
//     // Get the users ID token
//     const { idToken } = await GoogleSignin.signIn();

//     // Create a Google credential with the token
//     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//     // Sign-in the user with the credential
//     return auth().signInWithCredential(googleCredential);
//   } catch (error) {
//     console.log('message', error);
//   }
// }

const Login = () => {
  // navigation object
  const navigation = useNavigation();
  const [langModal, setLangModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginIsLoading, errorMessage } = useSelector(loginSelectors);
  const dispatch = useDispatch();

  const handleModal = () => setLangModal((prevValue) => !prevValue);

  const handleLogin = () => {
    dispatch(LoginActions.requestLogin(email, password));
    // dispatch({ type: 'RESET_APP' });
  };

  const handleGoogleSignin = async () => {
    const result = await onGoogleButtonPress();
    dispatch(LoginActions.googleLogin(result));
  };

  const handleSkip = () => {
    dispatch(LoginActions.skip());
    navigation.navigate('AppStack');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: (props) => (
        <Pressable style={{ marginLeft: 16 }} {...props} onPress={handleModal}>
          <T id="language" />
        </Pressable>
      ),
      headerRight: (props) => (
        <Pressable style={{ marginRight: 16 }} {...props} onPress={handleSkip}>
          <T id="skip" />
        </Pressable>
      ),
    });
  });

  return (
    <View style={styles.screen}>
      <LanguageModal visible={langModal} visibleFun={handleModal} />
      <View>
        <T id="signin" textStyle={styles.createText} />
      </View>
      <Input placeholderId="Email" value={email} onChangeText={setEmail} />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Sign in"
        buttonStyle={styles.signInStyle}
        onPress={handleLogin}
        loading={loginIsLoading}
      />

      <View style={styles.subInfo}>
        <View style={styles.signInButton}>
          <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={handleGoogleSignin}
          />
          {/* <Button title="Continue with facebook" onPress={handleLogin} /> */}
          <LoginButton />
        </View>
        <Pressable
          onPress={() => navigation.navigate('Signup')}
          style={styles.createAccount}>
          <T id="create_account" textStyle={styles.createText} />
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    padding: 20,
  },
  signInStyle: {
    backgroundColor: Colors.midNightBlue,
  },
  subInfo: { marginVertical: 15 },
  signInButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  createAccount: {
    marginVertical: 15,
    backgroundColor: 'red',
  },

  createText: {
    color: 'black',
  },
});
