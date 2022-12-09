import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const Navigation1 = () => {
  return (
    <View style={styles.navigationView}>
      <Image
        style={styles.imageScreenIcon}
        resizeMode="cover"
        source={require("../assets/image-screen.png")}
      />
      <View style={[styles.overlayView, styles.mt_812]} />
      <Image
        style={[styles.bGIcon, styles.mt138, styles.mr_120]}
        resizeMode="cover"
        source={require("../assets/bg3.png")}
      />
      <Text style={[styles.settingsText, styles.mt2, styles.mr31]}>
        Settings
      </Text>
      <Text style={[styles.bookingText, styles.mt_20, styles.mr157]}>
        Booking
      </Text>
      <Text style={[styles.messageText, styles.mt_20, styles.mr281]}>
        Message
      </Text>
      <Text style={[styles.savedText, styles.mt4, styles.mr37]}>Saved</Text>
      <Text style={[styles.exploreText, styles.mt_20, styles.mr160]}>
        Explore
      </Text>
      <Text style={[styles.homeText, styles.mt_20, styles.mr291]}>Home</Text>
      <Image
        style={[styles.dividerIcon, styles.mt13, styles.mr1]}
        resizeMode="cover"
        source={require("../assets/divider.png")}
      />
      <Image
        style={[styles.buttonClose, styles.mt_358, styles.mr41]}
        resizeMode="cover"
        source={require("../assets/button--close.png")}
      />
      <Image
        style={[styles.locationPointerIcon, styles.mt_5]}
        resizeMode="cover"
        source={require("../assets/location-pointer.png")}
      />
      <Image
        style={[styles.image20Icon, styles.mt30, styles.mr47]}
        resizeMode="cover"
        source={require("../assets/image-20.png")}
      />
      <Image
        style={[styles.image24Icon, styles.mt_22, styles.mr300]}
        resizeMode="cover"
        source={require("../assets/image-24.png")}
      />
      <Image
        style={[styles.image25Icon, styles.mt_24, styles.mr300]}
        resizeMode="cover"
        source={require("../assets/image-25.png")}
      />
      <Image
        style={[styles.image26Icon, styles.mt_24, styles.mr172]}
        resizeMode="cover"
        source={require("../assets/image-26.png")}
      />
      <Image
        style={[styles.image27Icon, styles.mt27, styles.mr167]}
        resizeMode="cover"
        source={require("../assets/image-27.png")}
      />
      <Image
        style={[styles.image28Icon, styles.mt_29, styles.mr47]}
        resizeMode="cover"
        source={require("../assets/image-28.png")}
      />
      <Image
        style={[styles.locationIcon, styles.mt134, styles.mr255]}
        resizeMode="cover"
        source={require("../assets/location1.png")}
      />
      <Image
        style={[styles.locationIcon1, styles.mt21, styles.mr121]}
        resizeMode="cover"
        source={require("../assets/location1.png")}
      />
      <Image
        style={[styles.locationIcon2, styles.mt38, styles.mr47]}
        resizeMode="cover"
        source={require("../assets/location3.png")}
      />
      <Image
        style={[styles.locationIcon3, styles.mt_720, styles.mr218]}
        resizeMode="cover"
        source={require("../assets/location1.png")}
      />
      <Image
        style={[styles.locationIcon4, styles.mt_163, styles.mr134]}
        resizeMode="cover"
        source={require("../assets/location3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt_812: {
    marginTop: -812,
  },
  mt138: {
    marginTop: 138,
  },
  mr_120: {
    marginRight: -120,
  },
  mt2: {
    marginTop: 2,
  },
  mr31: {
    marginRight: 31,
  },
  mt_20: {
    marginTop: -20,
  },
  mr157: {
    marginRight: 157,
  },
  mr281: {
    marginRight: 281,
  },
  mt4: {
    marginTop: 4,
  },
  mr37: {
    marginRight: 37,
  },
  mr160: {
    marginRight: 160,
  },
  mr291: {
    marginRight: 291,
  },
  mt13: {
    marginTop: 13,
  },
  mr1: {
    marginRight: 1,
  },
  mt_358: {
    marginTop: -358,
  },
  mr41: {
    marginRight: 41,
  },
  mt_5: {
    marginTop: -5,
  },
  mt30: {
    marginTop: 30,
  },
  mr47: {
    marginRight: 47,
  },
  mt_22: {
    marginTop: -22,
  },
  mr300: {
    marginRight: 300,
  },
  mt_24: {
    marginTop: -24,
  },
  mr172: {
    marginRight: 172,
  },
  mt27: {
    marginTop: 27,
  },
  mr167: {
    marginRight: 167,
  },
  mt_29: {
    marginTop: -29,
  },
  mt134: {
    marginTop: 134,
  },
  mr255: {
    marginRight: 255,
  },
  mt21: {
    marginTop: 21,
  },
  mr121: {
    marginRight: 121,
  },
  mt38: {
    marginTop: 38,
  },
  mt_720: {
    marginTop: -720,
  },
  mr218: {
    marginRight: 218,
  },
  mt_163: {
    marginTop: -163,
  },
  mr134: {
    marginRight: 134,
  },
  imageScreenIcon: {
    position: "relative",
    width: 375,
    height: 812,
  },
  overlayView: {
    position: "relative",
    backgroundColor: "#6d6e71",
    width: 375,
    height: 812,
    opacity: 0.1,
  },
  bGIcon: {
    position: "relative",
    width: 495,
    height: 372,
  },
  settingsText: {
    position: "relative",
    fontSize: 14,
    letterSpacing: -0.14,
    lineHeight: 22,
    fontFamily: "Poppins",
    color: "#898989",
    textAlign: "center",
  },
  bookingText: {
    position: "relative",
    fontSize: 14,
    letterSpacing: -0.14,
    lineHeight: 22,
    fontFamily: "Poppins",
    color: "#898989",
    textAlign: "center",
  },
  messageText: {
    position: "relative",
    fontSize: 14,
    letterSpacing: -0.14,
    lineHeight: 22,
    fontFamily: "Poppins",
    color: "#898989",
    textAlign: "center",
  },
  savedText: {
    position: "relative",
    fontSize: 14,
    letterSpacing: -0.14,
    lineHeight: 22,
    fontFamily: "Poppins",
    color: "#898989",
    textAlign: "center",
  },
  exploreText: {
    position: "relative",
    fontSize: 14,
    letterSpacing: -0.14,
    lineHeight: 22,
    fontFamily: "Poppins",
    color: "#898989",
    textAlign: "center",
  },
  homeText: {
    position: "relative",
    fontSize: 14,
    letterSpacing: -0.14,
    lineHeight: 22,
    fontFamily: "Poppins",
    color: "#4530b2",
    textAlign: "center",
  },
  dividerIcon: {
    position: "relative",
    width: 375,
    height: 1,
  },
  buttonClose: {
    position: "relative",
    width: 35,
    height: 35,
  },
  locationPointerIcon: {
    position: "relative",
    width: 205,
    height: 205,
    alignSelf: "center",
  },
  image20Icon: {
    position: "relative",
    width: 24,
    height: 24,
  },
  image24Icon: {
    position: "relative",
    width: 24,
    height: 24,
  },
  image25Icon: {
    position: "relative",
    width: 24,
    height: 24,
  },
  image26Icon: {
    position: "relative",
    width: 24,
    height: 24,
  },
  image27Icon: {
    position: "relative",
    width: 32.78,
    height: 32.78,
  },
  image28Icon: {
    position: "relative",
    width: 24,
    height: 24,
  },
  locationIcon: {
    position: "relative",
    width: 17.36,
    height: 20,
  },
  locationIcon1: {
    position: "relative",
    width: 17.36,
    height: 20,
  },
  locationIcon2: {
    position: "relative",
    width: 17.36,
    height: 20,
  },
  locationIcon3: {
    position: "relative",
    width: 17.36,
    height: 20,
  },
  locationIcon4: {
    position: "relative",
    width: 17.36,
    height: 20,
  },
  navigationView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-end",
  },
});

export default Navigation1;
