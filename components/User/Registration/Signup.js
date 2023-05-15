import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

// import styles from "../Registration/SignupStyle";
import styles from "../../CommonComponentStyling/CommonStlyes";

import { Link } from "react-router-dom";
import { Ionicons } from "@expo/vector-icons";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* <Text style={[styles.titleFont, styles.fontFocusStyle1]}>Signup</Text> */}
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
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
