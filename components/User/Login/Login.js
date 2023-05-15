import { useState } from 'react';
import styles from '../../CommonComponentStyling/CommonStlyes';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-dom';
import { Ionicons } from '@expo/vector-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.horizontalContainer}>
          <Text style={[styles.titleFont]}>Login</Text>
            <Link to={"/signup"} style={{textDecoration: "none"}}>
              <Text style={[styles.titleFont, styles.fontFocusStyle1]}>
                Signup
                <Ionicons name={"caret-forward"} style={[styles.titleFont, {color: "#007bff"}]}/>
              </Text>
            </Link>
        </View>
        <View style={styles.horizonalDivider} /> 
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity style={styles.primaryButton} >
          <Text style={styles.primaryButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={[styles.horizontalContainer, {alignItems: 'center', marginVertical: 10}]}>
          <View style={{flex: 1, height: 1, backgroundColor: '#000'}} />
          <Text style={{marginHorizontal: 10, fontSize: 16, fontWeight: 'bold', color: '#000'}}> or </Text>
          <View style={{flex: 1, height: 1, backgroundColor: '#000'}} />
        </View>
        <View style={[styles.horizontalContainer, {justifyContent: 'space-evenly'}]}>
          <Ionicons name={"logo-facebook"} style={{fontSize: 40, color: "#007bff"}}/>
          <Ionicons name={"logo-google"} style={{fontSize: 40, color: "red"}}/>
          <Ionicons name={"logo-apple"} style={{fontSize: 40, color: "black"}}/>
        </View>
      </View>
    </View>
  );
}

export default Login;
