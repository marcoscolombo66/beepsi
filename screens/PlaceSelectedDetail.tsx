import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const PlaceSelectedDetail = () => {
  return (
    <View style={styles.placeSelectedDetailView}>
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require("../assets/image4.png")}
      />
      <LinearGradient
        style={[styles.overlayLinearGradient, styles.mt_326]}
        locations={[0, 0, 1]}
        colors={["#fff", "rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.6)"]}
        useAngle={true}
        angle={180}
      />
      <View style={[styles.secondBGView, styles.mt26]} />
      <Image
        style={[styles.countIcon, styles.mt121, styles.ml167]}
        resizeMode="cover"
        source={require("../assets/count.png")}
      />
      <Image
        style={[styles.dividerIcon, styles.mt33]}
        resizeMode="cover"
        source={require("../assets/divider.png")}
      />
      <View style={[styles.buttonPrimary, styles.mt22, styles.ml192]}>
        <Text style={styles.bookNowText}>Book now</Text>
      </View>
      <Text style={[styles.personText, styles.mt4, styles.ml26]}>
        $15 / Person
      </Text>
      <Text style={[styles.fromText, styles.mt_51, styles.ml26]}>From</Text>
      <View style={[styles.imagesView, styles.mt14, styles.ml26]}>
        <Image
          style={styles.imageIcon1}
          resizeMode="cover"
          source={require("../assets/image5.png")}
        />
        <Image
          style={styles.imageIcon2}
          resizeMode="cover"
          source={require("../assets/image6.png")}
        />
        <Image
          style={styles.imageIcon3}
          resizeMode="cover"
          source={require("../assets/image7.png")}
        />
      </View>
      <Text style={[styles.primaryHeadingText, styles.mt24, styles.ml26]}>
        Photos
      </Text>
      <Text style={[styles.descriptionText, styles.mt14, styles.ml26]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Text style={[styles.primaryHeadingText1, styles.mt24, styles.ml26]}>
        Description
      </Text>
      <Image
        style={[styles.dividerIcon1, styles.mt24]}
        resizeMode="cover"
        source={require("../assets/divider.png")}
      />
      <View style={[styles.locationView1, styles.mt16, styles.ml26]}>
        <Text style={styles.milanoText}>Milano</Text>
        <View style={styles.locationView}>
          <Image
            style={styles.locationIcon}
            resizeMode="cover"
            source={require("../assets/location-icon.png")}
          />
        </View>
      </View>
      <Text style={[styles.illyCaffText, styles.mt11, styles.ml25]}>
        Illy Caffè
      </Text>
      <View style={[styles.ratingView, styles.mt_554, styles.ml25]}>
        <Text style={styles.text}>4.2</Text>
        <Image
          style={styles.starsIcon}
          resizeMode="cover"
          source={require("../assets/stars.png")}
        />
      </View>
      <View style={[styles.buttonLove, styles.mt10, styles.ml312]}>
        <Image
          style={styles.heartIcon}
          resizeMode="cover"
          source={require("../assets/heart-icon.png")}
        />
      </View>
      <View style={[styles.buubleRateView, styles.mt_40, styles.ml312]}>
        <Image
          style={styles.bGIcon}
          resizeMode="cover"
          source={require("../assets/bg.png")}
        />
        <Text style={styles.text1}>7,8</Text>
      </View>
      <View style={[styles.buttonBack, styles.mt_300, styles.ml26]}>
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
  mt_326: {
    marginTop: -326,
  },
  mt26: {
    marginTop: 26,
  },
  mt121: {
    marginTop: 121,
  },
  ml167: {
    marginLeft: 167,
  },
  mt33: {
    marginTop: 33,
  },
  mt22: {
    marginTop: 22,
  },
  ml192: {
    marginLeft: 192,
  },
  mt4: {
    marginTop: 4,
  },
  ml26: {
    marginLeft: 26,
  },
  mt_51: {
    marginTop: -51,
  },
  mt14: {
    marginTop: 14,
  },
  mt24: {
    marginTop: 24,
  },
  mt16: {
    marginTop: 16,
  },
  mt11: {
    marginTop: 11,
  },
  ml25: {
    marginLeft: 25,
  },
  mt_554: {
    marginTop: -554,
  },
  mt10: {
    marginTop: 10,
  },
  ml312: {
    marginLeft: 312,
  },
  mt_40: {
    marginTop: -40,
  },
  mt_300: {
    marginTop: -300,
  },
  imageIcon: {
    position: "relative",
    width: 375,
    height: 326,
  },
  overlayLinearGradient: {
    position: "relative",
    width: 375,
    height: 326,
    backgroundColor: "transparent",
  },
  secondBGView: {
    position: "relative",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    width: 375,
    height: 578,
  },
  countIcon: {
    position: "relative",
    width: 42,
    height: 6,
  },
  dividerIcon: {
    position: "relative",
    width: 375,
    height: 1,
  },
  bookNowText: {
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
    width: 156,
    height: 58,
  },
  personText: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "left",
  },
  fromText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#919191",
    textAlign: "left",
  },
  imageIcon1: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    borderRadius: 6,
    maxHeight: "100%",
    width: 110,
  },
  imageIcon2: {
    position: "absolute",
    marginLeft: -55,
    top: 0,
    bottom: 0,
    left: "50%",
    borderRadius: 6,
    maxHeight: "100%",
    width: 110,
  },
  imageIcon3: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    borderRadius: 6,
    maxHeight: "100%",
    width: 110,
  },
  imagesView: {
    position: "relative",
    width: 366,
    height: 110,
  },
  primaryHeadingText: {
    position: "relative",
    fontSize: 16,
    letterSpacing: -0.32,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "left",
  },
  descriptionText: {
    position: "relative",
    fontSize: 12,
    lineHeight: 24,
    fontFamily: "Poppins",
    color: "#919191",
    textAlign: "left",
    width: 326,
    height: 67,
  },
  primaryHeadingText1: {
    position: "relative",
    fontSize: 16,
    letterSpacing: -0.32,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "left",
  },
  dividerIcon1: {
    position: "relative",
    width: 375,
    height: 1,
  },
  milanoText: {
    position: "absolute",
    right: -1,
    bottom: 3,
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#919191",
    textAlign: "left",
  },
  locationIcon: {
    position: "absolute",
    top: 5.45,
    right: 5.97,
    bottom: 4.65,
    left: 5.97,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  locationView: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#4530b2",
    width: 24,
  },
  locationView1: {
    position: "relative",
    width: 74,
    height: 24,
  },
  illyCaffText: {
    position: "relative",
    fontSize: 20,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "left",
  },
  text: {
    position: "absolute",
    top: 0.17,
    right: -1,
    fontSize: 12,
    letterSpacing: -0.12,
    fontFamily: "Poppins",
    color: "#898989",
    textAlign: "right",
  },
  starsIcon: {
    position: "absolute",
    top: 0,
    bottom: 1.17,
    left: 0,
    maxHeight: "100%",
    width: 90,
  },
  ratingView: {
    position: "relative",
    width: 113.5,
    height: 17.17,
  },
  heartIcon: {
    position: "absolute",
    marginTop: -6.36,
    marginLeft: -7.45,
    top: "50%",
    left: "50%",
    width: 14.89,
    height: 12.71,
  },
  buttonLove: {
    position: "relative",
    borderRadius: 25,
    backgroundColor: "#fff",
    width: 36,
    height: 36,
  },
  bGIcon: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text1: {
    position: "absolute",
    marginTop: -10,
    marginLeft: -10,
    top: "50%",
    left: "50%",
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "center",
  },
  buubleRateView: {
    position: "relative",
    width: 36,
    height: 36,
  },
  arrowIcon: {
    position: "absolute",
    marginTop: -4.5,
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
  placeSelectedDetailView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default PlaceSelectedDetail;
