import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../utils/colors";

export default function CommitsContainer() {
  return (
    <View style={styles.header}>
      <View style={styles.title}>
        <Image
          style={styles.github}
          source={require("../assets/github-icon.png")}
        />
        <Text style={styles.titleText}>Geohalbert/github-assignment</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  github: {
    borderRadius: 30 / 2,
    height: 30,
    marginRight: 5,
    width: 30
  },
  header: {
    flexDirection: "column",
    margin: 5
  },
  title: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  titleText: {
    color: Colors.primaryTextColor,
    fontSize: 18,
    fontWeight: "600"
  }
});
