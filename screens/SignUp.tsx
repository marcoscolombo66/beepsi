import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const SignUp = () => {
  return (
    <View style={styles.signUpView}>
      <View style={[styles.bGView, styles.mt_34]} />
      <Text
        style={[styles.alreadyHaveAnAccountSign, styles.mt_47, styles.ml92]}
      >
        <Text style={styles.alreadyHaveAnAccount}>
          <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Text style={styles.signInText}>Sign in</Text>
      </Text>
      <Image
        style={[styles.dividerIcon, styles.mt42]}
        resizeMode="cover"
        source={require("../assets/divider.png")}
      />
      <Image
        style={[styles.countIcon, styles.mt49, styles.ml167]}
        resizeMode="cover"
        source={require("../assets/count3.png")}
      />
      <View style={[styles.buttonPrimary, styles.mt44, styles.ml26]}>
        <Text style={styles.nextStepText}>Next step</Text>
      </View>
      <View style={[styles.checkBoxView, styles.mt20, styles.ml25]}>
        <Text style={styles.agreeToAllTerms}>
          <Text style={styles.agreeToAll}>Agree to all</Text>
          <Text style={styles.text1}>{` `}</Text>
          <Text style={styles.termsText}>terms</Text>
        </Text>
        <View style={styles.checkActiveView} />
        <Image
          style={styles.chevIcon}
          resizeMode="cover"
          source={require("../assets/chev-icon2.png")}
        />
      </View>
      <View style={[styles.formSignUp, styles.mt40, styles.ml26]}>
        <View style={styles.formReEnterPassword}>
          <Text style={styles.placeholderText}>Re-enter Password</Text>
        </View>
        <View style={styles.formPassword}>
          <Text style={styles.placeholderText1}>Password</Text>
        </View>
        <View style={styles.formEmailAddress}>
          <Text style={styles.placeholderText2}>Email Address</Text>
        </View>
        <View style={styles.formFullName}>
          <Text style={styles.brianColquhounText}>Brian Colquhoun</Text>
          <Text style={styles.fullNameText}>Full Name</Text>
        </View>
      </View>
      <Text style={[styles.descriptionText, styles.mt4, styles.ml26]}>
        Become a member
      </Text>
      <Text style={[styles.primaryHeadingText, styles.mt34, styles.ml26]}>
        Create Account
      </Text>
      <View style={[styles.buttonBack, styles.mt34, styles.ml25]}>
        <Image
          style={styles.arrowIcon}
          resizeMode="cover"
          source={require("../assets/arrow-icon.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_34: {
    marginTop: -34,
  },
  mt_47: {
    marginTop: -47,
  },
  ml92: {
    marginLeft: 92,
  },
  mt42: {
    marginTop: 42,
  },
  mt49: {
    marginTop: 49,
  },
  ml167: {
    marginLeft: 167,
  },
  mt44: {
    marginTop: 44,
  },
  ml26: {
    marginLeft: 26,
  },
  mt20: {
    marginTop: 20,
  },
  ml25: {
    marginLeft: 25,
  },
  mt40: {
    marginTop: 40,
  },
  mt4: {
    marginTop: 4,
  },
  mt34: {
    marginTop: 34,
  },
  bGView: {
    position: "relative",
    backgroundColor: "rgba(17, 63, 250, 0.02)",
    width: 375,
    height: 77,
  },
  alreadyHaveAn: {
    color: "#898989",
  },
  text: {
    color: "#656565",
  },
  alreadyHaveAnAccount: {
    fontFamily: "Poppins",
  },
  signInText: {
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#4530b2",
  },
  alreadyHaveAnAccountSign: {
    position: "relative",
    fontSize: 12,
    letterSpacing: -0.29,
    textAlign: "center",
  },
  dividerIcon: {
    position: "relative",
    width: 375,
    height: 1,
  },
  countIcon: {
    position: "relative",
    width: 42,
    height: 6,
  },
  nextStepText: {
    position: "absolute",
    marginTop: -10,
    marginLeft: -33,
    top: "50%",
    left: "50%",
    fontSize: 14,
    letterSpacing: 0.01,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "center",
  },
  buttonPrimary: {
    position: "relative",
    borderRadius: 8,
    backgroundColor: "#4530b2",
    width: 322,
    height: 58,
  },
  agreeToAll: {
    color: "#231d25",
  },
  text1: {
    color: "#fff",
  },
  termsText: {
    textDecoration: "underline",
    color: "#4530b2",
  },
  agreeToAllTerms: {
    position: "absolute",
    top: 1,
    right: -1,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Poppins",
    textAlign: "left",
  },
  checkActiveView: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4,
    backgroundColor: "#4530b2",
    borderStyle: "solid",
    borderColor: "#4530b2",
    borderWidth: 1,
    width: 18,
  },
  chevIcon: {
    position: "absolute",
    marginTop: -3.21,
    top: "50%",
    left: 4.5,
    width: 9,
    height: 6.43,
  },
  checkBoxView: {
    position: "relative",
    width: 133,
    height: 18,
  },
  placeholderText: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    left: 18,
    fontSize: 14,
    fontFamily: "Poppins",
    color: "#c4c4c4",
    textAlign: "left",
  },
  formReEnterPassword: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0)",
    borderStyle: "solid",
    borderColor: "#eee",
    borderWidth: 1,
    height: 62,
  },
  placeholderText1: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    left: 18,
    fontSize: 14,
    fontFamily: "Poppins",
    color: "#c4c4c4",
    textAlign: "left",
  },
  formPassword: {
    position: "absolute",
    marginTop: 5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0)",
    borderStyle: "solid",
    borderColor: "#eee",
    borderWidth: 1,
    height: 62,
  },
  placeholderText2: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    left: 18,
    fontSize: 14,
    fontFamily: "Poppins",
    color: "#c4c4c4",
    textAlign: "left",
  },
  formEmailAddress: {
    position: "absolute",
    marginTop: -67,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0)",
    borderStyle: "solid",
    borderColor: "#eee",
    borderWidth: 1,
    height: 62,
  },
  brianColquhounText: {
    position: "absolute",
    marginTop: 0,
    top: "50%",
    left: 18,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "left",
  },
  fullNameText: {
    position: "absolute",
    marginTop: -19,
    top: "50%",
    left: 18,
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#4530b2",
    textAlign: "left",
  },
  formFullName: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "#4530b2",
    borderWidth: 1.5,
    height: 62,
  },
  formSignUp: {
    position: "relative",
    width: 322,
    height: 278,
  },
  descriptionText: {
    position: "relative",
    fontSize: 14,
    letterSpacing: -0.14,
    lineHeight: 22,
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "left",
    opacity: 0.5,
  },
  primaryHeadingText: {
    position: "relative",
    fontSize: 35,
    letterSpacing: -0.35,
    lineHeight: 50,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "left",
  },
  arrowIcon: {
    position: "absolute",
    marginTop: -5.5,
    marginLeft: -9.5,
    top: "50%",
    left: "50%",
    width: 20.41,
    height: 10.83,
  },
  buttonBack: {
    position: "relative",
    borderRadius: 8,
    backgroundColor: "#4530b2",
    width: 45,
    height: 45,
  },
  signUpView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 28,
    alignItems: "flex-start",
  },
});

export default SignUp;
