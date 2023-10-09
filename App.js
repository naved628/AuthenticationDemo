import { StyleSheet, View } from 'react-native';
import SignInScreen from './src/Screens/SignInScreen/SignInScreen';
import SignUpScreen from './src/Screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from './src/Screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/Screens/ForgotPasswordScreen/ForgotPasswordScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ForgotPasswordScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F9FBFC'
  },
});
