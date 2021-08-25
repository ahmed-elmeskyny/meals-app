import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";

import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import {
  useFonts as useNunito,
  Nunito_200ExtraLight,
} from "@expo-google-fonts/nunito";

import { Searchbar } from "react-native-paper";
import { RestaurantCard } from "./components/restaurantCard";

export default function App() {
  const [bebasLoaded] = useFonts({
    BebasNeue_400Regular,
  });
  const [nunitolaoded] = useNunito({
    Nunito_200ExtraLight,
  });

  if (!bebasLoaded || !nunitolaoded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./assets/restaurant.png")} style={styles.svg} />
        <Text style={styles.welcome}>Welcome to Meals</Text>
        <Image source={require("./assets/restaurant.png")} style={styles.svg} />
      </View>
      <View style={styles.search}>
        <Searchbar
          placeholder="search location"
          icon="map-marker"
          style={styles.searchbar}
        />
      </View>
      <View style={styles.main}>
        <RestaurantCard img="../assets/img1.jpg" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 10,
    marginTop: 5,
    flexDirection: "row",
  },
  main: {
    padding: 10,
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    // overflow: "hidden",
  },
  welcome: {
    fontSize: 23,
    fontWeight: "bold",
  },
  searchbar: {
    backgroundColor: "#F4F4F4",
    borderRadius: 10,
    width: "100%",
    elevation: 0,
  },
  svg: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginLeft: 10,
  },
});
