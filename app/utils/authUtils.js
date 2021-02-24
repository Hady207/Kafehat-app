import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId:
    '749897689433-lesidll4rvhb0hd1b3cp9db654iggrpo.apps.googleusercontent.com',
});

export const onGoogleButtonPress = async () => {
  try {
    // Get the users ID token
    const userInfo = await GoogleSignin.signIn();
    return userInfo;
  } catch (error) {}
};

export const onGoogleLogout = async () => {
  try {
    await GoogleSignin.signOut();
  } catch (error) {}
};

export const onFacebookPress = async () => {
  try {
  } catch (error) {
    console.log(error);
  }
};
