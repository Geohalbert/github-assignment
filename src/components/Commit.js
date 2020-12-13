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
          <Text style={styles.user}>{user}</Text>
          <Image
            style={styles.avatar}
            source={{
              uri: avatar
            }}
          />
        </View>
        <View style={styles.details}>
          <View style={styles.headerDiv}>
            <Text style={styles.headerText}>Hash: </Text>
            <Text style={styles.hashText}>{hash.slice(0, 7)}</Text>
          </View>
          <View style={styles.headerDiv}>
            <Text style={styles.headerText}>{timeDiff}</Text>
          </View>
        </View>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.message}>{message}</Text>
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
    backgroundColor: Colors.cardBody,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: Colors.cardBackground,
    borderWidth: 2,
    flexDirection: "row",
    height: "auto",
    padding: 10
  },
  cardHeader: {
    alignItems: "center",
    backgroundColor: Colors.cardBackground,
    borderColor: Colors.cardBackground,
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
  details: {
    alignItems: "flex-end",
    flexDirection: "column"
  },
  hashText: {
    color: Colors.specialTextColor,
    fontSize: 14
  },
  headerDiv: {
    alignItems: "center",
    flexDirection: "row",
    height: "auto",
    marginHorizontal: 5,
    width: "auto"
  },
  headerText: {
    color: Colors.primaryTextColor,
    fontSize: 14,
    fontWeight: "600"
  },
  message: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left"
  },
  user: {
    color: Colors.primaryTextColor,
    fontSize: 18,
    fontWeight: "600"
  }
});
