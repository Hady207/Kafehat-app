import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { T, Button, Input } from '_atoms';
import { LanguageModal } from '_molecules';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from '_styles';

import loginSelectors from './selectors';
import { LoginTypes, LoginActions } from './reducer';

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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: (props) => (
        <Pressable style={{ marginLeft: 16 }} {...props} onPress={handleModal}>
          <T title="language" />
        </Pressable>
      ),
      headerRight: (props) => (
        <Pressable
          style={{ marginRight: 16 }}
          {...props}
          onPress={() => navigation.navigate('AppStack')}>
          <T title="Skip" />
        </Pressable>
      ),
    });
  });

  return (
    <View style={styles.screen}>
      <LanguageModal visible={langModal} visibleFun={handleModal} />
      <View>
        <T id="signin" value="ahmad" textStyle={styles.createText} />
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
      {/* <Divider style={{ backgroundColor: 'blue' }} /> */}
      <View style={styles.subInfo}>
        <View style={styles.signInButton}>
          <Button title="Continue with google" onPress={handleLogin} />
          <Button title="Continue with facebook" onPress={handleLogin} />
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
    flex: 1,
  },

  createText: {
    color: 'black',
  },
});
