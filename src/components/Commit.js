import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { approxTime } from "../utils/functions";
import { Colors } from "../utils/colors";

export default function Commit(props) {
  const { avatar, date, hash, message, user } = props.commit;
  const timeDiff = approxTime(date);
  return (
    <View style={styles.container} key={"commit-" + hash}>
      <View style={styles.cardHeader}>
        <View style={styles.headerDiv}>
          <Text style={styles.headerText}>{user}</Text>
          <Image
            style={styles.avatar}
            source={{
              uri: avatar
            }}
          />
        </View>
        <View style={styles.headerDiv}>
          <Text style={styles.headerText}>Hash: </Text>
          <Text style={styles.hashText}>{hash.slice(0, 7)}</Text>
        </View>
      </View>
      <View style={styles.cardBody}>
        <Text>
          {timeDiff}: {message}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 30 / 2,
    height: 30,
    marginLeft: 5,
    width: 30
  },
  cardBody: {
    backgroundColor: "#ffffff",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: "#555555",
    borderWidth: 2,
    flexDirection: "row",
    height: "auto",
    justifyContent: "center",
    padding: 10
  },
  cardHeader: {
    alignItems: "center",
    backgroundColor: "#555555",
    borderColor: "#555555",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  container: {
    marginVertical: 5,
    paddingHorizontal: 5,
    width: "100%"
  },
  hashText: {
    color: Colors.specialTextColor,
    fontSize: 14
  },
  headerDiv: {
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    marginHorizontal: 5,
    width: "auto"
  },
  headerText: {
    color: Colors.primaryTextColor,
    fontSize: 14,
    fontWeight: "600"
  }
});
