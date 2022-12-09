import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Onboarding = () => {
  return (
    <View style={styles.onboardingView}>
      <Image
        style={styles.imageBGIcon}
        resizeMode="cover"
        source={require("../assets/image-bg1.png")}
      />
      <LinearGradient
        style={[styles.imageBGLinearGradient, styles.mt53]}
        locations={[0, 1]}
        colors={["rgba(69, 48, 178, 0)", "#4530b2"]}
        useAngle={true}
        angle={180}
      />
      <View style={[styles.buttonPrimary, styles.mt32, styles.ml26]}>
        <Text style={styles.getStartedText}>Get started</Text>
        <Image
          style={styles.arrowIcon}
          resizeMode="cover"
          source={require("../assets/arrow-icon6.png")}
        />
      </View>
      <View style={[styles.sliderView, styles.mt_746, styles.ml26]}>
        <View style={styles.view} />
      </View>
      <Text style={[styles.descriptionText, styles.mt12, styles.ml26]}>
        <Text style={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consec
        </Text>
        <Text style={styles.adipiscingElitSed}>
          adipiscing elit, sed do eiusmod
        </Text>
      </Text>
      <Text style={[styles.primaryHeadingText, styles.mt36, styles.ml26]}>
        <Text style={styles.letsFindYour}>{`Let’s find your `}</Text>
        <Text style={styles.placeToEnjoy}>place to enjoy</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt53: {
    marginTop: 53,
  },
  mt32: {
    marginTop: 32,
  },
  ml26: {
    marginLeft: 26,
  },
  mt_746: {
    marginTop: -746,
  },
  mt12: {
    marginTop: 12,
  },
  mt36: {
    marginTop: 36,
  },
  imageBGIcon: {
    position: "relative",
    width: 375,
    height: 812,
  },
  imageBGLinearGradient: {
    position: "relative",
    width: 375,
    height: 406,
    backgroundColor: "transparent",
  },
  getStartedText: {
    position: "absolute",
    marginTop: -8.5,
    marginLeft: -41.29,
    top: "50%",
    left: "50%",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "center",
  },
  arrowIcon: {
    position: "absolute",
    marginTop: -3.55,
    marginLeft: 33.4,
    top: "50%",
    left: "50%",
    width: 7.89,
    height: 8.03,
  },
  buttonPrimary: {
    position: "relative",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(66, 73, 108, 0.02)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    width: 126,
    height: 48,
  },
  view: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    borderRadius: 150,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    width: 21,
  },
  sliderView: {
    position: "relative",
    borderRadius: 150,
    backgroundColor: "#fff",
    width: 70,
    height: 5,
  },
  loremIpsumDolor: {
    margin: 0,
  },
  adipiscingElitSed: {
    margin: 0,
  },
  descriptionText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Poppins",
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "left",
    width: 283,
    height: 50,
  },
  letsFindYour: {
    margin: 0,
  },
  placeToEnjoy: {
    margin: 0,
  },
  primaryHeadingText: {
    position: "relative",
    fontSize: 40,
    lineHeight: 48,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
  },
  onboardingView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default Onboarding;
