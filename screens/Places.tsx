import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Places = () => {
  return (
    <View style={styles.placesView4}>
      <View style={[styles.placesView, styles.mt_26]}>
        <Image
          style={styles.imageIcon}
          resizeMode="cover"
          source={require("../assets/image10.png")}
        />
        <LinearGradient
          style={styles.overlayLinearGradient}
          locations={[0, 1]}
          colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.78)"]}
          useAngle={true}
          angle={180}
        />
        <View style={styles.ratingView}>
          <Text style={styles.text}>4.2</Text>
          <Image
            style={styles.starsIcon}
            resizeMode="cover"
            source={require("../assets/stars.png")}
          />
        </View>
        <Text style={styles.italyText}>Italy</Text>
        <Text style={styles.romeText}>Rome</Text>
      </View>
      <View style={[styles.placesView1, styles.mt2]}>
        <Image
          style={styles.imageIcon1}
          resizeMode="cover"
          source={require("../assets/image11.png")}
        />
        <LinearGradient
          style={styles.overlayLinearGradient1}
          locations={[0, 1]}
          colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.78)"]}
          useAngle={true}
          angle={180}
        />
        <View style={styles.ratingView1}>
          <Text style={styles.text1}>4.2</Text>
          <Image
            style={styles.starsIcon1}
            resizeMode="cover"
            source={require("../assets/stars.png")}
          />
        </View>
        <Text style={styles.spainText}>Spain</Text>
        <Text style={styles.rondaText}>Ronda</Text>
      </View>
      <View style={[styles.placesView2, styles.mt2]}>
        <Image
          style={styles.imageIcon2}
          resizeMode="cover"
          source={require("../assets/image12.png")}
        />
        <LinearGradient
          style={styles.overlayLinearGradient2}
          locations={[0, 1]}
          colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.78)"]}
          useAngle={true}
          angle={180}
        />
        <View style={styles.ratingView2}>
          <Text style={styles.text2}>4.2</Text>
          <Image
            style={styles.starsIcon2}
            resizeMode="cover"
            source={require("../assets/stars.png")}
          />
        </View>
        <Text style={styles.spainText1}>Spain</Text>
        <Text style={styles.malagaText}>Malaga</Text>
      </View>
      <View style={[styles.placesView3, styles.mt28]}>
        <Image
          style={styles.imageIcon3}
          resizeMode="cover"
          source={require("../assets/image13.png")}
        />
        <LinearGradient
          style={styles.overlayLinearGradient3}
          locations={[0, 1]}
          colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.78)"]}
          useAngle={true}
          angle={180}
        />
        <View style={styles.ratingView3}>
          <Text style={styles.text3}>4.2</Text>
          <Image
            style={styles.starsIcon3}
            resizeMode="cover"
            source={require("../assets/stars.png")}
          />
        </View>
        <Text style={styles.italyText1}>Italy</Text>
        <Text style={styles.florenceText}>Florence</Text>
      </View>
      <View style={[styles.headerView, styles.mt28, styles.mr1]}>
        <View style={styles.buttonSearch1}>
          <Image
            style={styles.buttonSearch}
            resizeMode="cover"
            source={require("../assets/button--search.png")}
          />
        </View>
        <Text style={styles.placesText}>Places</Text>
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
  mt_26: {
    marginTop: -26,
  },
  mt2: {
    marginTop: 2,
  },
  mt28: {
    marginTop: 28,
  },
  mr1: {
    marginRight: 1,
  },
  imageIcon: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  overlayLinearGradient: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "transparent",
  },
  text: {
    position: "absolute",
    top: 0.17,
    right: -1,
    fontSize: 12,
    letterSpacing: -0.12,
    fontFamily: "Poppins",
    color: "rgba(255, 255, 255, 0.6)",
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
    bottom: 22,
    left: 25,
    width: 113.5,
    height: 17.17,
  },
  italyText: {
    position: "absolute",
    marginTop: 33,
    top: "50%",
    left: 25,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "rgba(255, 255, 255, 0.6)",
    textAlign: "left",
  },
  romeText: {
    position: "absolute",
    marginTop: 8,
    top: "50%",
    left: 25,
    fontSize: 16,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
  },
  placesView: {
    position: "relative",
    width: 375,
    height: 200,
  },
  imageIcon1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  overlayLinearGradient1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "transparent",
  },
  text1: {
    position: "absolute",
    top: 0.17,
    right: -1,
    fontSize: 12,
    letterSpacing: -0.12,
    fontFamily: "Poppins",
    color: "rgba(255, 255, 255, 0.6)",
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
    bottom: 22,
    left: 25,
    width: 113.5,
    height: 17.17,
  },
  spainText: {
    position: "absolute",
    marginTop: 33,
    top: "50%",
    left: 25,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "rgba(255, 255, 255, 0.6)",
    textAlign: "left",
  },
  rondaText: {
    position: "absolute",
    marginTop: 8,
    top: "50%",
    left: 25,
    fontSize: 16,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
  },
  placesView1: {
    position: "relative",
    width: 375,
    height: 200,
  },
  imageIcon2: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  overlayLinearGradient2: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "transparent",
  },
  text2: {
    position: "absolute",
    top: 0.17,
    right: -1,
    fontSize: 12,
    letterSpacing: -0.12,
    fontFamily: "Poppins",
    color: "rgba(255, 255, 255, 0.6)",
    textAlign: "right",
  },
  starsIcon2: {
    position: "absolute",
    top: 0,
    bottom: 1.17,
    left: 0,
    maxHeight: "100%",
    width: 90,
  },
  ratingView2: {
    position: "absolute",
    bottom: 22,
    left: 25,
    width: 113.5,
    height: 17.17,
  },
  spainText1: {
    position: "absolute",
    marginTop: 33,
    top: "50%",
    left: 25,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "rgba(255, 255, 255, 0.6)",
    textAlign: "left",
  },
  malagaText: {
    position: "absolute",
    marginTop: 8,
    top: "50%",
    left: 25,
    fontSize: 16,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
  },
  placesView2: {
    position: "relative",
    width: 375,
    height: 200,
  },
  imageIcon3: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  overlayLinearGradient3: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "transparent",
  },
  text3: {
    position: "absolute",
    top: 0.17,
    right: -1,
    fontSize: 12,
    letterSpacing: -0.12,
    fontFamily: "Poppins",
    color: "rgba(255, 255, 255, 0.6)",
    textAlign: "right",
  },
  starsIcon3: {
    position: "absolute",
    top: 0,
    bottom: 1.17,
    left: 0,
    maxHeight: "100%",
    width: 90,
  },
  ratingView3: {
    position: "absolute",
    bottom: 22,
    left: 25,
    width: 113.5,
    height: 17.17,
  },
  italyText1: {
    position: "absolute",
    marginTop: 33,
    top: "50%",
    left: 25,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "rgba(255, 255, 255, 0.6)",
    textAlign: "left",
  },
  florenceText: {
    position: "absolute",
    marginTop: 8,
    top: "50%",
    left: 25,
    fontSize: 16,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
  },
  placesView3: {
    position: "relative",
    width: 375,
    height: 200,
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
    top: 2,
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
  placesText: {
    position: "absolute",
    marginTop: -14.5,
    marginLeft: -31,
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
    bottom: 2,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#4530b2",
    width: 45,
  },
  headerView: {
    position: "relative",
    width: 322,
    height: 47,
  },
  placesView4: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 26,
    alignItems: "center",
  },
});

export default Places;
