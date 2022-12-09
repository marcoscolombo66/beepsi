import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const SignIn = () => {
  return (
    <View style={styles.signInView}>
      <Image
        style={styles.imageBGIcon}
        resizeMode="cover"
        source={require("../assets/image-bg.png")}
      />
      <LinearGradient
        style={[styles.imageBGLinearGradient, styles.mt_29]}
        locations={[0, 1]}
        colors={["rgba(69, 48, 178, 0)", "#4530b2"]}
        useAngle={true}
        angle={180}
      />
      <LinearGradient
        style={[styles.imageBGLinearGradient1, styles.mt_754]}
        locations={[0, 1]}
        colors={["rgba(255, 255, 255, 0)", "#fff"]}
        useAngle={true}
        angle={180}
      />
      <View style={[styles.buttonSecondary, styles.mt_274, styles.ml26]}>
        <View style={styles.googleView}>
          <Text style={styles.signInWithGoogle}>Sign in with Google</Text>
        </View>
      </View>
      <View style={[styles.buttonPrimary, styles.mt42, styles.ml26]}>
        <Text style={styles.signInText}>Sign in</Text>
      </View>
      <View style={[styles.formView, styles.mt44, styles.ml26]}>
        <Text style={styles.forgotYourPassword}>Forgot your password?</Text>
        <View style={styles.formPassword}>
          <Text style={styles.enterYourPassword}>Enter your password</Text>
        </View>
        <View style={styles.formEmailAddress}>
          <Text style={styles.brianteamgmailcomText}>brianteam@gmail.com</Text>
          <Text style={styles.emailAddressText}>Email address</Text>
        </View>
      </View>
      <Text style={[styles.descriptionText, styles.mt4, styles.ml26]}>
        Sign in to your account
      </Text>
      <Text style={[styles.primaryHeadingText, styles.mt_357, styles.ml26]}>
        Hello Again!
      </Text>
      <Image
        style={[styles.googleGLogosvgIcon, styles.mt_39, styles.ml101]}
        resizeMode="cover"
        source={require("../assets/google--g--logosvg.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt_29: {
    marginTop: -29,
  },
  mt_754: {
    marginTop: -754,
  },
  mt_274: {
    marginTop: -274,
  },
  ml26: {
    marginLeft: 26,
  },
  mt42: {
    marginTop: 42,
  },
  mt44: {
    marginTop: 44,
  },
  mt4: {
    marginTop: 4,
  },
  mt_357: {
    marginTop: -357,
  },
  mt_39: {
    marginTop: -39,
  },
  ml101: {
    marginLeft: 101,
  },
  imageBGIcon: {
    position: "relative",
    width: 375,
    height: 812,
  },
  imageBGLinearGradient: {
    position: "relative",
    width: 375,
    height: 319,
    backgroundColor: "transparent",
  },
  imageBGLinearGradient1: {
    position: "relative",
    width: 375,
    height: 406,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    backgroundColor: "transparent",
  },
  signInWithGoogle: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    letterSpacing: 0.01,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "left",
  },
  googleView: {
    position: "absolute",
    marginTop: -10,
    marginLeft: -55,
    top: "50%",
    left: "50%",
    width: 135,
    height: 20,
  },
  buttonSecondary: {
    position: "relative",
    borderRadius: 8,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#eee",
    borderWidth: 1,
    width: 322,
    height: 58,
  },
  signInText: {
    position: "absolute",
    marginTop: -9.5,
    marginLeft: -24,
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
  forgotYourPassword: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 12,
    textDecoration: "underline",
    letterSpacing: -0.19,
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "center",
  },
  enterYourPassword: {
    position: "absolute",
    marginTop: -9.5,
    top: "50%",
    left: 18.24,
    fontSize: 14,
    fontFamily: "Poppins",
    color: "#c4c3c3",
    textAlign: "left",
  },
  formPassword: {
    position: "absolute",
    marginTop: -8.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#eee",
    borderWidth: 1,
    height: 69,
  },
  brianteamgmailcomText: {
    position: "absolute",
    marginTop: 0.5,
    top: "50%",
    left: 18,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "left",
  },
  emailAddressText: {
    position: "absolute",
    marginTop: -20.5,
    top: "50%",
    left: 18,
    fontSize: 12,
    letterSpacing: -0.07,
    fontFamily: "Poppins",
    color: "#4530b2",
    textAlign: "left",
  },
  formEmailAddress: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4530b2",
    borderWidth: 1.5,
    height: 69,
  },
  formView: {
    position: "relative",
    width: 322,
    height: 191,
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
    fontSize: 40,
    lineHeight: 40,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "left",
  },
  googleGLogosvgIcon: {
    position: "relative",
    width: 20,
    height: 20,
  },
  signInView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default SignIn;
