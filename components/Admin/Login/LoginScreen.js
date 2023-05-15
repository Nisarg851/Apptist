const React = require('react');
const { View, Text, TextInput, Button, Alert } = require('react-native');
import SignUpScreen from "../Registration/signup"

function App() {
  const handleSignUp = () => {
    // ... your sign-up logic here
  };

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Sign Up</Text>
      <SignUpScreen />
    </View>
  );
}

export default App;
