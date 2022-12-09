import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const Profile = () => {
  return (
    <View style={styles.profileView}>
      <Image
        style={[styles.image29Icon, styles.mt_54, styles.mr44]}
        resizeMode="cover"
        source={require("../assets/image-29.png")}
      />
      <Image
        style={[styles.imageIcon, styles.mt78]}
        resizeMode="cover"
        source={require("../assets/image14.png")}
      />
      <View style={[styles.overlayView, styles.mt_215]} />
      <View style={[styles.buttonSecondary, styles.mt28]}>
        <Image
          style={styles.buttonNext}
          resizeMode="cover"
          source={require("../assets/button--next.png")}
        />
        <Text style={styles.loadMoreText}>Load more</Text>
      </View>
      <Image
        style={[styles.dividerIcon, styles.mt17]}
        resizeMode="cover"
        source={require("../assets/divider8.png")}
      />
      <Text style={[styles.text, styles.mt_16, styles.mr28]}>6</Text>
      <Text style={[styles.text1, styles.mt_17, styles.mr86]}>42</Text>
      <View style={[styles.ratingView, styles.mt_17, styles.mr237]}>
        <Text style={styles.text2}>4.2</Text>
        <Image
          style={styles.starsIcon}
          resizeMode="cover"
          source={require("../assets/stars.png")}
        />
      </View>
      <Text style={[styles.descriptionText, styles.mt27]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et.
      </Text>
      <View style={[styles.userView, styles.mt33]}>
        <View style={styles.buttonAccept}>
          <Text style={styles.reviewsText}>Reviews</Text>
        </View>
        <Text style={styles.septAt0421}>03 Sept. At 04:21</Text>
        <Text style={styles.duomoMilano2020}>Duomo Milano 2020</Text>
      </View>
      <Image
        style={[styles.dividerIcon1, styles.mt28]}
        resizeMode="cover"
        source={require("../assets/divider.png")}
      />
      <View style={[styles.friendsView, styles.mt28, styles.mr_19]}>
        <View style={styles.buttonViewAll}>
          <Image
            style={styles.chevIcon}
            resizeMode="cover"
            source={require("../assets/chev-icon.png")}
          />
          <Text style={styles.viewAllText}>View all</Text>
        </View>
        <Text style={styles.primaryHeadingText}>Friends</Text>
        <View style={styles.avaView}>
          <Image
            style={styles.imageAvatarIcon}
            resizeMode="cover"
            source={require("../assets/image-avatar.png")}
          />
          <Text style={styles.clayText}>Clay</Text>
        </View>
        <View style={styles.avaView1}>
          <Image
            style={styles.imageAvatarIcon1}
            resizeMode="cover"
            source={require("../assets/image-avatar1.png")}
          />
          <Text style={styles.rominaText}>Romina</Text>
        </View>
        <View style={styles.avaView2}>
          <Image
            style={styles.imageAvatarIcon2}
            resizeMode="cover"
            source={require("../assets/image-avatar2.png")}
          />
          <Text style={styles.glendaText}>Glenda</Text>
        </View>
        <View style={styles.avaView3}>
          <Image
            style={styles.imageAvatarIcon3}
            resizeMode="cover"
            source={require("../assets/image-avatar3.png")}
          />
          <Text style={styles.felixText}>Felix</Text>
        </View>
        <View style={styles.avaView4}>
          <Image
            style={styles.imageAvatarIcon4}
            resizeMode="cover"
            source={require("../assets/image-avatar4.png")}
          />
          <Text style={styles.marieText}>Marie</Text>
        </View>
        <View style={styles.avaView5}>
          <Image
            style={styles.imageAvatarIcon5}
            resizeMode="cover"
            source={require("../assets/image-avatar5.png")}
          />
          <Text style={styles.elianaText}>Eliana</Text>
        </View>
      </View>
      <Image
        style={[styles.dividerIcon2, styles.mt16]}
        resizeMode="cover"
        source={require("../assets/divider.png")}
      />
      <View style={[styles.imagesView, styles.mt16, styles.mr_24]}>
        <Image
          style={styles.imageIcon1}
          resizeMode="cover"
          source={require("../assets/image15.png")}
        />
        <Image
          style={styles.imageIcon2}
          resizeMode="cover"
          source={require("../assets/image16.png")}
        />
        <Image
          style={styles.imageIcon3}
          resizeMode="cover"
          source={require("../assets/image17.png")}
        />
        <Image
          style={styles.imageIcon4}
          resizeMode="cover"
          source={require("../assets/image18.png")}
        />
        <Image
          style={styles.imageIcon5}
          resizeMode="cover"
          source={require("../assets/image19.png")}
        />
      </View>
      <View style={[styles.statisticView, styles.mt36]}>
        <Image
          style={styles.dividerIcon3}
          resizeMode="cover"
          source={require("../assets/divider.png")}
        />
        <Image
          style={styles.dividerIcon4}
          resizeMode="cover"
          source={require("../assets/divider.png")}
        />
        <Image
          style={styles.buttonMore}
          resizeMode="cover"
          source={require("../assets/button--more.png")}
        />
        <View style={styles.followingView}>
          <Text style={styles.text3}>19</Text>
          <Text style={styles.favoriteText}>Favorite</Text>
        </View>
        <View style={styles.postView}>
          <Text style={styles.text4}>226</Text>
          <Text style={styles.followingText}>Following</Text>
        </View>
        <View style={styles.folowersView}>
          <Text style={styles.text5}>74</Text>
          <Text style={styles.followersText}>Followers</Text>
        </View>
      </View>
      <Text style={[styles.descriptionText1, styles.mt36, styles.mr27]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Image
        style={[styles.addProfileIcon, styles.mt_11, styles.mr2]}
        resizeMode="cover"
        source={require("../assets/add-profile.png")}
      />
      <View style={[styles.locationView1, styles.mt_35, styles.mr245]}>
        <Text style={styles.milanoItalyText}>Milano, Italy</Text>
        <View style={styles.locationView}>
          <Image
            style={styles.locationIcon}
            resizeMode="cover"
            source={require("../assets/location-icon1.png")}
          />
        </View>
      </View>
      <Text style={[styles.brianColquhounText, styles.mt22, styles.mr214]}>
        Brian Colquhoun
      </Text>
      <Image
        style={[styles.avatarImageIcon, styles.mt78, styles.mr270]}
        resizeMode="cover"
        source={require("../assets/avatar-image.png")}
      />
      <View style={[styles.headerView, styles.mt_215]}>
        <Image
          style={styles.buttonShare}
          resizeMode="cover"
          source={require("../assets/button--share.png")}
        />
        <Text style={styles.headingText}>Profile</Text>
        <View style={styles.buttonBack}>
          <Image
            style={styles.arrowIcon}
            resizeMode="cover"
            source={require("../assets/arrow-icon4.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.image31Icon, styles.mt_16, styles.mr108]}
        resizeMode="cover"
        source={require("../assets/image-31.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt_54: {
    marginTop: -54,
  },
  mr44: {
    marginRight: 44,
  },
  mt78: {
    marginTop: 78,
  },
  mt_215: {
    marginTop: -215,
  },
  mt28: {
    marginTop: 28,
  },
  mt17: {
    marginTop: 17,
  },
  mt_16: {
    marginTop: -16,
  },
  mr28: {
    marginRight: 28,
  },
  mt_17: {
    marginTop: -17,
  },
  mr86: {
    marginRight: 86,
  },
  mr237: {
    marginRight: 237,
  },
  mt27: {
    marginTop: 27,
  },
  mt33: {
    marginTop: 33,
  },
  mr_19: {
    marginRight: -19,
  },
  mt16: {
    marginTop: 16,
  },
  mr_24: {
    marginRight: -24,
  },
  mt36: {
    marginTop: 36,
  },
  mr27: {
    marginRight: 27,
  },
  mt_11: {
    marginTop: -11,
  },
  mr2: {
    marginRight: 2,
  },
  mt_35: {
    marginTop: -35,
  },
  mr245: {
    marginRight: 245,
  },
  mt22: {
    marginTop: 22,
  },
  mr214: {
    marginRight: 214,
  },
  mr270: {
    marginRight: 270,
  },
  mr108: {
    marginRight: 108,
  },
  image29Icon: {
    position: "relative",
    width: 16,
    height: 16,
  },
  imageIcon: {
    position: "relative",
    width: 375,
    height: 215,
  },
  overlayView: {
    position: "relative",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    width: 375,
    height: 215,
  },
  buttonNext: {
    position: "absolute",
    marginTop: -2.5,
    top: "50%",
    right: 0,
    width: 10,
    height: 6,
  },
  loadMoreText: {
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
    width: 85,
    height: 17,
    alignSelf: "center",
  },
  dividerIcon: {
    position: "relative",
    width: 375,
    height: 1,
    alignSelf: "flex-start",
  },
  text: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#1d1d20",
    textAlign: "left",
  },
  text1: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#1d1d20",
    textAlign: "left",
  },
  text2: {
    position: "absolute",
    top: 0.17,
    right: -1,
    fontSize: 12,
    letterSpacing: -0.12,
    fontFamily: "Poppins",
    color: "#818181",
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
  descriptionText: {
    position: "relative",
    fontSize: 12,
    lineHeight: 24,
    fontFamily: "Poppins",
    color: "#919191",
    textAlign: "left",
    width: 326,
    height: 48,
    alignSelf: "center",
  },
  reviewsText: {
    position: "absolute",
    marginTop: -8.5,
    marginLeft: -24,
    top: "50%",
    left: "50%",
    fontSize: 12,
    letterSpacing: 0.01,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#1cbef5",
    textAlign: "center",
  },
  buttonAccept: {
    position: "absolute",
    top: 5,
    right: 0,
    bottom: 3,
    borderRadius: 21,
    backgroundColor: "rgba(28, 190, 245, 0.2)",
    shadowColor: "rgba(28, 190, 245, 0.4)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 78,
  },
  septAt0421: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#919191",
    textAlign: "left",
  },
  duomoMilano2020: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "left",
  },
  userView: {
    position: "relative",
    width: 325,
    height: 42,
    alignSelf: "center",
  },
  dividerIcon1: {
    position: "relative",
    width: 375,
    height: 1,
    alignSelf: "flex-start",
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
    position: "absolute",
    top: 3.5,
    right: 44,
    width: 55.48,
    height: 17,
  },
  primaryHeadingText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 18,
    letterSpacing: -0.36,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "left",
  },
  imageAvatarIcon: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    height: 49,
  },
  clayText: {
    position: "absolute",
    marginLeft: -14.5,
    bottom: 0,
    left: "50%",
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "center",
  },
  avaView: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 49,
    height: 74,
  },
  imageAvatarIcon1: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    height: 49,
  },
  rominaText: {
    position: "absolute",
    bottom: 0,
    left: 1,
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "center",
  },
  avaView1: {
    position: "absolute",
    marginLeft: 71.5,
    bottom: 0,
    left: "50%",
    width: 49,
    height: 74,
  },
  imageAvatarIcon2: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    height: 49,
  },
  glendaText: {
    position: "absolute",
    bottom: 0,
    left: 2,
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "center",
  },
  avaView2: {
    position: "absolute",
    marginLeft: 7.5,
    bottom: 0,
    left: "50%",
    width: 49,
    height: 74,
  },
  imageAvatarIcon3: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    height: 49,
  },
  felixText: {
    position: "absolute",
    marginLeft: -13.5,
    bottom: 0,
    left: "50%",
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "center",
  },
  avaView3: {
    position: "absolute",
    marginLeft: -56.5,
    bottom: 0,
    left: "50%",
    width: 49,
    height: 74,
  },
  imageAvatarIcon4: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    height: 49,
  },
  marieText: {
    position: "absolute",
    bottom: 0,
    left: 7,
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "center",
  },
  avaView4: {
    position: "absolute",
    marginLeft: -120.5,
    bottom: 0,
    left: "50%",
    width: 49,
    height: 74,
  },
  imageAvatarIcon5: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    height: 49,
  },
  elianaText: {
    position: "absolute",
    bottom: 0,
    left: 6,
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "center",
  },
  avaView5: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 49,
    height: 74,
  },
  friendsView: {
    position: "relative",
    width: 369,
    height: 119,
  },
  dividerIcon2: {
    position: "relative",
    width: 375,
    height: 1,
  },
  imageIcon1: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    borderRadius: 6,
    maxHeight: "100%",
    width: 75,
  },
  imageIcon2: {
    position: "absolute",
    marginLeft: -124.5,
    top: 0,
    bottom: 0,
    left: "50%",
    borderRadius: 6,
    maxHeight: "100%",
    width: 75,
  },
  imageIcon3: {
    position: "absolute",
    marginLeft: 49.5,
    top: 0,
    bottom: 0,
    left: "50%",
    borderRadius: 6,
    maxHeight: "100%",
    width: 75,
  },
  imageIcon4: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    borderRadius: 6,
    maxHeight: "100%",
    width: 75,
  },
  imageIcon5: {
    position: "absolute",
    marginLeft: -37.5,
    top: 0,
    bottom: 0,
    left: "50%",
    borderRadius: 6,
    maxHeight: "100%",
    width: 75,
  },
  imagesView: {
    position: "relative",
    width: 423,
    height: 75,
  },
  dividerIcon3: {
    position: "absolute",
    right: 0.5,
    bottom: -0.5,
    left: -0.5,
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
  },
  dividerIcon4: {
    position: "absolute",
    top: -0.5,
    right: 0.5,
    left: -0.5,
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
  },
  buttonMore: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    right: 27,
    width: 4,
    height: 16,
  },
  text3: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 25,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "left",
  },
  favoriteText: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#919191",
    textAlign: "center",
  },
  followingView: {
    position: "absolute",
    marginTop: -26,
    marginLeft: 68.5,
    top: "50%",
    left: "50%",
    width: 48,
    height: 52,
  },
  text4: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 25,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "left",
  },
  followingText: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#919191",
    textAlign: "left",
  },
  postView: {
    position: "absolute",
    marginTop: -26,
    marginLeft: -47.5,
    top: "50%",
    left: "50%",
    width: 56,
    height: 52,
  },
  text5: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 25,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#1a1b23",
    textAlign: "left",
  },
  followersText: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#919191",
    textAlign: "left",
  },
  folowersView: {
    position: "absolute",
    marginTop: -26,
    top: "50%",
    left: 25,
    width: 55,
    height: 52,
  },
  statisticView: {
    position: "relative",
    width: 375,
    height: 100,
  },
  descriptionText1: {
    position: "relative",
    fontSize: 12,
    lineHeight: 24,
    fontFamily: "Poppins",
    color: "#919191",
    textAlign: "left",
    width: 323,
    height: 67,
  },
  addProfileIcon: {
    position: "relative",
    width: 54,
    height: 54,
  },
  milanoItalyText: {
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
    right: 5.5,
    bottom: 4.65,
    left: 5.5,
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
    shadowColor: "rgba(69, 48, 178, 0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    width: 24,
  },
  locationView1: {
    position: "relative",
    width: 104,
    height: 24,
  },
  brianColquhounText: {
    position: "relative",
    fontSize: 16,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#1d1d20",
    textAlign: "left",
  },
  avatarImageIcon: {
    position: "relative",
    width: 79,
    height: 79,
  },
  buttonShare: {
    position: "absolute",
    marginTop: -11,
    top: "50%",
    right: 28.7,
    width: 22.3,
    height: 20.32,
  },
  headingText: {
    position: "absolute",
    marginTop: -13,
    marginLeft: -29.5,
    top: "50%",
    left: "50%",
    fontSize: 20,
    letterSpacing: -0.4,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#fff",
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
    marginTop: -22,
    top: "50%",
    left: 26,
    borderRadius: 8,
    backgroundColor: "#fff",
    width: 45,
    height: 45,
  },
  headerView: {
    position: "relative",
    backgroundColor: "rgba(0, 0, 0, 0)",
    width: 375,
    height: 96,
  },
  image31Icon: {
    position: "relative",
    width: 17.32,
    height: 16,
  },
  profileView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-end",
  },
});

export default Profile;
