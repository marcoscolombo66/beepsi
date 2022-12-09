import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const TripHistory = () => {
  return (
    <View style={styles.tripHistoryView}>
      <Image
        style={styles.dividerIcon}
        resizeMode="cover"
        source={require("../assets/divider.png")}
      />
      <View style={[styles.tripView, styles.mt26_5, styles.mr1]}>
        <Text style={styles.text}>23.11 - 30.11.2020</Text>
        <Text style={styles.illyCaffFlorence}>Illy Caffè, Florence</Text>
        <Image
          style={styles.imageIcon}
          resizeMode="cover"
          source={require("../assets/image.png")}
        />
        <View style={styles.dateView}>
          <Image
            style={styles.dividerIcon1}
            resizeMode="cover"
            source={require("../assets/divider1.png")}
          />
          <Image
            style={styles.dotActiveIcon}
            resizeMode="cover"
            source={require("../assets/dot-active.png")}
          />
          <Text style={styles.hoursAgoText}>2020</Text>
        </View>
      </View>
      <View style={[styles.tripView1, styles.mt16_5, styles.mr1]}>
        <Text style={styles.text1}>23.11 - 30.11.2020</Text>
        <Text style={styles.starbucksPlazaMayorMalaga}>
          Starbucks, Plaza Mayor, Malaga
        </Text>
        <Image
          style={styles.imageIcon1}
          resizeMode="cover"
          source={require("../assets/image1.png")}
        />
        <View style={styles.dateView1}>
          <Image
            style={styles.dividerIcon2}
            resizeMode="cover"
            source={require("../assets/divider1.png")}
          />
          <Image
            style={styles.dotActiveIcon1}
            resizeMode="cover"
            source={require("../assets/dot-active.png")}
          />
          <Text style={styles.hoursAgoText1}>2021</Text>
        </View>
      </View>
      <View style={[styles.buttonSecondary, styles.mt23_5]}>
        <Image
          style={styles.buttonNext}
          resizeMode="cover"
          source={require("../assets/button--next.png")}
        />
        <Text style={styles.newestText}>Newest</Text>
      </View>
      <View style={[styles.headerView, styles.mt17_5, styles.mr1]}>
        <View style={styles.buttonSearch1}>
          <Image
            style={styles.buttonSearch}
            resizeMode="cover"
            source={require("../assets/button--search.png")}
          />
        </View>
        <Text style={styles.myPlacesText}>My Places</Text>
        <View style={styles.buttonBack}>
          <Image
            style={styles.arrowIcon}
            resizeMode="cover"
            source={require("../assets/arrow-icon.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt26_5: {
    marginTop: 26.5,
  },
  mr1: {
    marginRight: 1,
  },
  mt16_5: {
    marginTop: 16.5,
  },
  mt23_5: {
    marginTop: 23.5,
  },
  mt17_5: {
    marginTop: 17.5,
  },
  dividerIcon: {
    position: "relative",
    width: 375,
    height: 1,
  },
  text: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Poppins",
    color: "#b5b5b5",
    textAlign: "left",
  },
  illyCaffFlorence: {
    position: "absolute",
    bottom: 26,
    left: 0,
    fontSize: 16,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "left",
  },
  imageIcon: {
    position: "absolute",
    top: 38,
    right: 0,
    left: 0,
    borderRadius: 8,
    maxWidth: "100%",
    overflow: "hidden",
    height: 200,
  },
  dividerIcon1: {
    position: "absolute",
    marginTop: 0,
    top: "50%",
    right: 0.5,
    width: 242,
    height: 1,
  },
  dotActiveIcon: {
    position: "absolute",
    marginTop: -7.5,
    top: "50%",
    left: 0,
    width: 14,
    height: 14,
  },
  hoursAgoText: {
    position: "absolute",
    top: 0,
    left: 22,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "left",
  },
  dateView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 23,
  },
  tripView: {
    position: "relative",
    width: 322,
    height: 307,
  },
  text1: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Poppins",
    color: "#b5b5b5",
    textAlign: "left",
  },
  starbucksPlazaMayorMalaga: {
    position: "absolute",
    bottom: 26,
    left: 0,
    fontSize: 16,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "left",
  },
  imageIcon1: {
    position: "absolute",
    top: 38,
    right: 0,
    left: 0,
    borderRadius: 8,
    maxWidth: "100%",
    overflow: "hidden",
    height: 200,
  },
  dividerIcon2: {
    position: "absolute",
    marginTop: 0,
    top: "50%",
    right: 0.5,
    width: 242,
    height: 1,
  },
  dotActiveIcon1: {
    position: "absolute",
    marginTop: -7.5,
    top: "50%",
    left: 0,
    width: 14,
    height: 14,
  },
  hoursAgoText1: {
    position: "absolute",
    top: 0,
    left: 22,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "left",
  },
  dateView1: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 23,
  },
  tripView1: {
    position: "relative",
    width: 322,
    height: 307,
  },
  buttonNext: {
    position: "absolute",
    marginTop: -2.5,
    top: "50%",
    right: 0,
    width: 10,
    height: 6,
  },
  newestText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    letterSpacing: -0.12,
    fontFamily: "Poppins",
    color: "#919191",
    textAlign: "right",
  },
  buttonSecondary: {
    position: "relative",
    width: 65,
    height: 17,
  },
  buttonSearch: {
    position: "absolute",
    marginTop: -8.59,
    marginLeft: -8.59,
    top: "50%",
    left: "50%",
    width: 17.17,
    height: 17.17,
  },
  buttonSearch1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
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
  },
  myPlacesText: {
    position: "absolute",
    marginTop: -13.5,
    marginLeft: -48,
    top: "50%",
    left: "50%",
    fontSize: 20,
    letterSpacing: -0.4,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "center",
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
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#4530b2",
    width: 45,
  },
  headerView: {
    position: "relative",
    width: 322,
    height: 45,
  },
  tripHistoryView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 26,
    alignItems: "center",
  },
});

export default TripHistory;
