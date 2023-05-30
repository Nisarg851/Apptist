import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "../../CommonComponentStyling/CommonStlyes";

import { useLocation, useNavigate } from "react-router-dom";

import { Auth } from "aws-amplify";

const SignUpVerification = (props) => {
  const [verificationCode, setVerificationCode] = useState("");

  const navigateTo = useNavigate();
  const {state} = useLocation();

  const confirmSignUp = async () => {
    try {
      await Auth.confirmSignUp(state.username, verificationCode);
      console.log("verified!");
      navigateTo("/");
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  };

  const resendVerificationCode = async () => {
    try {
      await Auth.resendSignUp(verificationCode);
      console.log("code resent successfully");
    } catch (err) {
      console.log("error resending code: ", err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Verification Code"
            value={verificationCode}
            onChangeText={setVerificationCode}
          />
        </View>
        <TouchableOpacity style={styles.primaryButton} onPress={confirmSignUp}>
          <Text style={styles.primaryButtonText}>Verify</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.primaryButton, { marginTop: "5px" }]} onPress={resendVerificationCode}>
          <Text style={styles.primaryButtonText} onPress={resendVerificationCode}>Resend Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpVerification;
