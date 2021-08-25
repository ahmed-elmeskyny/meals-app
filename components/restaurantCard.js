import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const RestaurantCard = ({ restaurant = {} }) => {
  const {
    name = "Restaurant",
    icon,
    photos,
    address = "100 random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <View style={styles.cardContainer}>
      <Image source={require("../assets/img2.jpg")} style={styles.image} />
      <View style={styles.info}>
        <View style={styles.nameContainer}>
          {/* <Image source={require("../assets/food.png")} style={styles.img} /> */}
          <View>
            <Text style={styles.name}>Bolt Food</Text>
            <Text style={styles.adress}>100 random street</Text>
          </View>
        </View>
        <View
          style={styles.ratingContainer}
          style={{ marginTop: 5, marginLeft: 20 }}
        >
          <View style={styles.rating}>
            {ratingArray.map(() => (
              <Image
                source={require("../assets/star.png")}
                style={styles.star}
              ></Image>
            ))}
          </View>
          <View style={styles.status}>
            {isOpenNow ? (
              <Image
                source={require("../assets/open.png")}
                style={styles.icon}
              ></Image>
            ) : (
              <Image
                source={require("../assets/close.png")}
                style={styles.icon}
              ></Image>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#D7D7D7",
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: 130,
  },
  info: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 30,
    fontFamily: "BebasNeue_400Regular",
    marginBottom: 5,
  },
  adress: {
    fontFamily: "Nunito_200ExtraLight",
  },
  img: {
    width: 55,
    height: 55,
    marginRight: 5,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  rating: {
    flexDirection: "row",
  },
  star: {
    width: 20,
    height: 20,
  },
  icon: {
    width: 30,
    height: 30,
    alignSelf: "flex-end",
  },
  status: {
    marginTop: 5,
  },
});
