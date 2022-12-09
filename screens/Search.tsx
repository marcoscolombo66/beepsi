import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const Search = () => {
  return (
    <View style={styles.searchView1}>
      <Text style={[styles.personText, styles.mt_4, styles.ml63]}>
        €12 / 1 Person
      </Text>
      <Text style={[styles.fromText, styles.mt_17, styles.ml26]}>From</Text>
      <View style={[styles.ratingView, styles.mt8, styles.ml26]}>
        <Text style={styles.text}>4.2</Text>
        <Image
          style={styles.starsIcon}
          resizeMode="cover"
          source={require("../assets/stars.png")}
        />
      </View>
      <Text
        style={[styles.iceCoffee, styles.mt36, styles.ml26]}
      >{`Ice & Coffee`}</Text>
      <Image
        style={[styles.imageIcon, styles.mt24, styles.ml26]}
        resizeMode="cover"
        source={require("../assets/image8.png")}
      />
      <Image
        style={[styles.countIcon, styles.mt126, styles.ml166]}
        resizeMode="cover"
        source={require("../assets/count1.png")}
      />
      <View style={[styles.buubleRateView, styles.mt_184, styles.ml300]}>
        <Image
          style={styles.bGIcon}
          resizeMode="cover"
          source={require("../assets/bg.png")}
        />
        <Text style={styles.text1}>8,4</Text>
      </View>
      <Image
        style={[styles.dividerIcon, styles.mt24]}
        resizeMode="cover"
        source={require("../assets/divider.png")}
      />
      <View style={[styles.placeView, styles.mt24, styles.ml26]}>
        <Text style={styles.personText1}>€15 / 1 Person</Text>
        <Text style={styles.fromText1}>From</Text>
        <View style={styles.ratingView1}>
          <Text style={styles.text2}>4.2</Text>
          <Image
            style={styles.starsIcon1}
            resizeMode="cover"
            source={require("../assets/stars.png")}
          />
        </View>
        <Text style={styles.illyCaffText}>Illy Caffè</Text>
        <Image
          style={styles.imageIcon1}
          resizeMode="cover"
          source={require("../assets/image9.png")}
        />
        <Image
          style={styles.countIcon1}
          resizeMode="cover"
          source={require("../assets/count1.png")}
        />
        <View style={styles.buubleRateView1}>
          <Image
            style={styles.bGIcon1}
            resizeMode="cover"
            source={require("../assets/bg.png")}
          />
          <Text style={styles.text3}>7,8</Text>
        </View>
      </View>
      <Image
        style={[styles.dividerIcon1, styles.mt16]}
        resizeMode="cover"
        source={require("../assets/divider.png")}
      />
      <View style={[styles.tag02View, styles.mt19, styles.ml26]}>
        <Text style={styles.dateText}>Date</Text>
      </View>
      <View style={[styles.tag02View1, styles.mt_41, styles.ml109]}>
        <Text style={styles.guestText}>Guest</Text>
      </View>
      <View style={[styles.tag02View2, styles.mt_41, styles.ml197]}>
        <Text style={styles.ratingText}>Rating</Text>
      </View>
      <View style={[styles.searchView, styles.mt19, styles.ml79]}>
        <View style={styles.customizeView} />
        <Text style={styles.placeholderText}>Milano</Text>
        <Image
          style={styles.settingsWhiteIcon}
          resizeMode="cover"
          source={require("../assets/settingswhite.png")}
        />
        <Image
          style={styles.buttonSearch}
          resizeMode="cover"
          source={require("../assets/button--search1.png")}
        />
      </View>
      <View style={[styles.buttonBack, styles.mt_52, styles.ml26]}>
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
  mt_4: {
    marginTop: -4,
  },
  ml63: {
    marginLeft: 63,
  },
  mt_17: {
    marginTop: -17,
  },
  ml26: {
    marginLeft: 26,
  },
  mt8: {
    marginTop: 8,
  },
  mt36: {
    marginTop: 36,
  },
  mt24: {
    marginTop: 24,
  },
  mt126: {
    marginTop: 126,
  },
  ml166: {
    marginLeft: 166,
  },
  mt_184: {
    marginTop: -184,
  },
  ml300: {
    marginLeft: 300,
  },
  mt16: {
    marginTop: 16,
  },
  mt19: {
    marginTop: 19,
  },
  mt_41: {
    marginTop: -41,
  },
  ml109: {
    marginLeft: 109,
  },
  ml197: {
    marginLeft: 197,
  },
  ml79: {
    marginLeft: 79,
  },
  mt_52: {
    marginTop: -52,
  },
  personText: {
    position: "relative",
    fontSize: 12,
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
  iceCoffee: {
    position: "relative",
    fontSize: 16,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "left",
  },
  imageIcon: {
    position: "relative",
    borderRadius: 8,
    width: 322,
    height: 200,
  },
  countIcon: {
    position: "relative",
    width: 42,
    height: 6,
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
    marginLeft: -11,
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
  dividerIcon: {
    position: "relative",
    width: 375,
    height: 1,
  },
  personText1: {
    position: "absolute",
    bottom: 0,
    left: 37,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "left",
  },
  fromText1: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#919191",
    textAlign: "left",
  },
  text2: {
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
    bottom: 31.83,
    left: 0,
    width: 113.5,
    height: 17.17,
  },
  illyCaffText: {
    position: "absolute",
    marginTop: 70,
    top: "50%",
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
    top: 0,
    right: 0,
    left: 0,
    borderRadius: 8,
    maxWidth: "100%",
    overflow: "hidden",
    height: 200,
  },
  countIcon1: {
    position: "absolute",
    marginTop: 28,
    marginLeft: -21,
    top: "50%",
    left: "50%",
    width: 42,
    height: 6,
  },
  bGIcon1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text3: {
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
  buubleRateView1: {
    position: "absolute",
    top: 16,
    right: 12,
    width: 36,
    height: 36,
  },
  placeView: {
    position: "relative",
    width: 322,
    height: 300,
  },
  dividerIcon1: {
    position: "relative",
    width: 375,
    height: 1,
  },
  dateText: {
    position: "absolute",
    marginTop: -8.5,
    marginLeft: -14.5,
    top: "50%",
    left: "50%",
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#231d25",
    textAlign: "center",
  },
  tag02View: {
    position: "relative",
    borderRadius: 4,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#eee",
    borderWidth: 1,
    width: 75,
    height: 41,
  },
  guestText: {
    position: "absolute",
    marginTop: -8.5,
    marginLeft: -17,
    top: "50%",
    left: "50%",
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#231d25",
    textAlign: "left",
  },
  tag02View1: {
    position: "relative",
    borderRadius: 4,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#eee",
    borderWidth: 1,
    width: 76,
    height: 41,
  },
  ratingText: {
    position: "absolute",
    marginTop: -8.5,
    marginLeft: -19.5,
    top: "50%",
    left: "50%",
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#231d25",
    textAlign: "left",
  },
  tag02View2: {
    position: "relative",
    borderRadius: 4,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#eee",
    borderWidth: 1,
    width: 73,
    height: 41,
  },
  customizeView: {
    position: "absolute",
    top: 8,
    right: 8,
    bottom: 8,
    borderRadius: 8,
    backgroundColor: "#4530b2",
    shadowColor: "rgba(69, 48, 178, 0.25)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    width: 42,
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
  settingsWhiteIcon: {
    position: "absolute",
    marginTop: -7,
    top: "50%",
    right: 21,
    width: 14,
    height: 14,
  },
  buttonSearch: {
    position: "absolute",
    marginTop: -8.59,
    top: "50%",
    left: 17.91,
    width: 17.17,
    height: 17.17,
  },
  searchView: {
    position: "relative",
    borderRadius: 8,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#eee",
    borderWidth: 0.6,
    width: 269,
    height: 58,
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
  searchView1: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 20,
    alignItems: "flex-start",
  },
});

export default Search;
