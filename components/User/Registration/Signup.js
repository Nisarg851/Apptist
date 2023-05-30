import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "../../CommonComponentStyling/CommonStlyes";

import { Link, useNavigate } from "react-router-dom";
import { Ionicons } from "@expo/vector-icons";

import { Auth } from 'aws-amplify';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const registerUser = async () => {
    try {
      console.log(name, email, password)
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          'email': email,
          'name': name
        }
      });
      console.log(user);
      navigateTo("/signup/verification", {state: {username: email}})
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}> 
        <View style={styles.horizontalContainer}>
        <Link to={"/login"} style={{textDecoration: "none"}}>
          <Text style={[styles.titleFont, styles.fontFocusStyle1]}>
            <Ionicons name={"caret-back"} style={[styles.titleFont, {color: "#007bff"}]}/>
            Login
          </Text>
        </Link>
          <Text style={[styles.titleFont]}>Signup</Text>
        </View>
        <View style={styles.horizonalDivider} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
        </View>
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
        <TouchableOpacity style={styles.primaryButton} onPress={registerUser}>
          <Text style={styles.primaryButtonText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
