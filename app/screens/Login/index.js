import React, { useEffect } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  ActivityIndicator,
} from 'react-native';
import { T } from '_atoms';
import { useSelector, useDispatch } from 'react-redux';
import loginSelectors from './selectors';
import { LoginTypes, LoginActions } from './reducer';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { loginIsLoading, errorMessage } = useSelector(loginSelectors);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(LoginActions.requestLogin(email, password));
    // dispatch({ type: 'RESET_APP' });
  };

  return (
    <View style={styles.screen}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {errorMessage && <T title={errorMessage} style={{ color: 'red' }} />}
      <Button title="Sign in" onPress={handleLogin} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
});
