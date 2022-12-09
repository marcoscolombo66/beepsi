import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Location1 = () => {
  return (
    <View style={styles.locationView}>
      <Image
        style={styles.mapsIcon}
        resizeMode="cover"
        source={require("../assets/maps.png")}
      />
      <LinearGradient
        style={[styles.overlayLinearGradient, styles.mt_46]}
        locations={[0, 1]}
        colors={["rgba(255, 255, 255, 0)", "#fff"]}
        useAngle={true}
        angle={180}
      />
      <View style={[styles.placeView, styles.mt25, styles.mr_198]}>
        <View style={styles.ratingView}>
          <Text style={styles.text}>4.2</Text>
          <Image
            style={styles.starsIcon}
            resizeMode="cover"
            source={require("../assets/stars.png")}
          />
        </View>
        <Text style={styles.minuteFromLocation}>16 minute from location</Text>
        <Text style={styles.duomoDiMilano}>Duomo di Milano</Text>
        <Image
          style={styles.imageIcon}
          resizeMode="cover"
          source={require("../assets/image2.png")}
        />
      </View>
      <View style={[styles.placeView1, styles.mt_294, styles.mr84]}>
        <View style={styles.ratingView1}>
          <Text style={styles.text1}>4.2</Text>
          <Image
            style={styles.starsIcon1}
            resizeMode="cover"
            source={require("../assets/stars.png")}
          />
        </View>
        <Text style={styles.minuteFromLocation1}>12 minute from location</Text>
        <Text style={styles.galleriaVittorioEmmanuelle}>
          Galleria Vittorio Emmanuelle
        </Text>
        <Image
          style={styles.imageIcon1}
          resizeMode="cover"
          source={require("../assets/image3.png")}
        />
      </View>
      <View style={[styles.buttonViewAll, styles.mt_19, styles.mr25]}>
        <Image
          style={styles.chevIcon}
          resizeMode="cover"
          source={require("../assets/chev-icon.png")}
        />
        <Text style={styles.viewAllText}>View all</Text>
      </View>
      <Text style={[styles.primaryHeadingText, styles.mt_12, styles.mr179]}>
        26 Nearby destination
      </Text>
      <Image
        style={[styles.locationTargetIcon, styles.mt_444, styles.mr_17]}
        resizeMode="cover"
        source={require("../assets/location-target.png")}
      />
      <Image
        style={[styles.locationPointerIcon, styles.mt93]}
        resizeMode="cover"
        source={require("../assets/location-pointer.png")}
      />
      <View style={[styles.searchView, styles.mt_792, styles.mr27]}>
        <Image
          style={styles.buttonMore}
          resizeMode="cover"
          source={require("../assets/button--more.png")}
        />
        <Text style={styles.placeholderText}>Milano</Text>
        <Image
          style={styles.locationIcon}
          resizeMode="cover"
          source={require("../assets/location.png")}
        />
      </View>
      <View style={[styles.buttonSidenav, styles.mt_51, styles.mr304]}>
        <Image
          style={styles.sidenavIcon}
          resizeMode="cover"
          source={require("../assets/sidenav-icon.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_46: {
    marginTop: -46,
  },
  mt25: {
    marginTop: 25,
  },
  mr_198: {
    marginRight: -198,
  },
  mt_294: {
    marginTop: -294,
  },
  mr84: {
    marginRight: 84,
  },
  mt_19: {
    marginTop: -19,
  },
  mr25: {
    marginRight: 25,
  },
  mt_12: {
    marginTop: -12,
  },
  mr179: {
    marginRight: 179,
  },
  mt_444: {
    marginTop: -444,
  },
  mr_17: {
    marginRight: -17,
  },
  mt93: {
    marginTop: 93,
  },
  mt_792: {
    marginTop: -792,
  },
  mr27: {
    marginRight: 27,
  },
  mt_51: {
    marginTop: -51,
  },
  mr304: {
    marginRight: 304,
  },
  mapsIcon: {
    position: "relative",
    width: 375,
    height: 812,
  },
  overlayLinearGradient: {
    position: "relative",
    width: 375,
    height: 488,
    backgroundColor: "transparent",
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
    position: "absolute",
    bottom: 19.83,
    left: 19,
    width: 113.5,
    height: 17.17,
  },
  minuteFromLocation: {
    position: "absolute",
    marginTop: 79,
    top: "50%",
    left: 19,
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#919191",
    textAlign: "left",
  },
  duomoDiMilano: {
    position: "absolute",
    marginTop: 53,
    top: "50%",
    left: 19,
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "left",
  },
  imageIcon: {
    position: "absolute",
    top: 22,
    right: 19,
    left: 19,
    borderRadius: 6,
    maxWidth: "100%",
    overflow: "hidden",
    height: 160,
  },
  placeView: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "rgba(24, 81, 159, 0.06)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    width: 266,
    height: 294,
  },
  text1: {
    position: "absolute",
    top: 0.17,
    right: -1,
    fontSize: 12,
    letterSpacing: -0.12,
    fontFamily: "Poppins",
    color: "#898989",
    textAlign: "right",
  },
  starsIcon1: {
    position: "absolute",
    top: 0,
    bottom: 1.17,
    left: 0,
    maxHeight: "100%",
    width: 90,
  },
  ratingView1: {
    position: "absolute",
    bottom: 19.83,
    left: 19,
    width: 113.5,
    height: 17.17,
  },
  minuteFromLocation1: {
    position: "absolute",
    marginTop: 79,
    top: "50%",
    left: 19,
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#919191",
    textAlign: "left",
  },
  galleriaVittorioEmmanuelle: {
    position: "absolute",
    marginTop: 53,
    top: "50%",
    left: 19,
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "left",
  },
  imageIcon1: {
    position: "absolute",
    top: 22,
    right: 19,
    left: 19,
    borderRadius: 6,
    maxWidth: "100%",
    overflow: "hidden",
    height: 160,
  },
  placeView1: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "rgba(24, 81, 159, 0.06)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    width: 266,
    height: 294,
  },
  chevIcon: {
    position: "absolute",
    marginTop: -2.5,
    top: "50%",
    right: 0,
    width: 3.48,
    height: 5.8,
  },
  viewAllText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#919191",
    textAlign: "center",
  },
  buttonViewAll: {
    position: "relative",
    width: 55.48,
    height: 17,
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
  locationTargetIcon: {
    position: "relative",
    width: 87,
    height: 87,
  },
  locationPointerIcon: {
    position: "relative",
    width: 205,
    height: 205,
    alignSelf: "center",
  },
  buttonMore: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    right: 16,
    width: 4,
    height: 16,
  },
  placeholderText: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -92.5,
    top: "50%",
    left: "50%",
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "left",
  },
  locationIcon: {
    position: "absolute",
    marginTop: -7,
    top: "50%",
    left: 15.93,
    width: 12.07,
    height: 13.9,
  },
  searchView: {
    position: "relative",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(24, 81, 159, 0.04)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#eee",
    borderWidth: 0.6,
    width: 269,
    height: 58,
  },
  sidenavIcon: {
    position: "absolute",
    marginTop: -8.5,
    marginLeft: -9.5,
    top: "50%",
    left: "50%",
    width: 18,
    height: 18,
  },
  buttonSidenav: {
    position: "relative",
    borderRadius: 8,
    backgroundColor: "#4530b2",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 45,
    height: 45,
  },
  locationView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-end",
  },
});

export default Location1;
