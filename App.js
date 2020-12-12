import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import CommitsContainer from "./src/containers/CommitsContainer";

export default function App() {
  return (
    <View style={styles.container}>
      <CommitsContainer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingBottom: 40,
    paddingTop: 40
  }
});
