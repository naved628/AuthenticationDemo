import { StyleSheet, View } from 'react-native';
import SignInScreen from './src/Screens/SignInScreen/SignInScreen';
import SignUpScreen from './src/Screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from './src/Screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/Screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from './src/Screens/NewPasswordSceeen/NewPasswordScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <NewPasswordScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F9FBFC'
  },
});
