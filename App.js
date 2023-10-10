import { StyleSheet } from "react-native";
import Navigation from "./src/Components/navigation";
import { Amplify } from "aws-amplify";
import config from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";

Amplify.configure(config);

const App = () => {
  // Auth.signOut();
  return <Navigation />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});


export default App;
