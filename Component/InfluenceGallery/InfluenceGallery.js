import React, { useEffect, useState } from "react";
import { Text, Image, View, ScrollView, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function App() {
  const [Res, setRes] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=1")
      .then((result) => result.json())
      .then((res) => setRes(res))
      .catch((err) => console.log(err));
  }, []);
  const ingredientnsViews = (data) => {
    return (
      <View style={styles.gridIngredients}>
        <Image
          style={styles.ingredientImage}
          resizeMode="contain"
          source={data.image}
        />
        <Text style={styles.ingredientsText}>{data.name}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {INGREDIENTS.map((value, index) => {
            return ingredientnsViews(value);
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  ingredientsText: {
    display: "none",
    //fontFamily: AppFonts.Primary.Sans.Regular,
    fontStyle: "normal",
    fontWeight: "400",
    alignSelf: "center",
    fontSize: 12,
    color: "black",
  },

  gridIngredients: {
    marginTop: 12,
    width: "50%",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "yellow",
    paddingStart: 16,
    paddingEnd: 16,
    paddingTop: 8,
    marginRight: 10,
    paddingBottom: 8,
    borderRadius: 8,
  },

  ingredientImage: {
    width: 15,
    alignSelf: "center",
    height: 15,
  },
});
