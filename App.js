import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import CommitsContainer from "./src/containers/CommitsContainer";
import { Colors } from "./src/utils/colors";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CommitsContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.primaryBackground,
    flex: 1
  }
});
