import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Commit(props) {
  const { avatar, hash, message, user } = props.commit;

  return (
    <View style={styles.container} key={"commit-" + hash}>
      <View style={styles.cardHeader}>
        <View style={styles.user}>
          <Text>{user}</Text>
          <Image
            style={styles.avatar}
            source={{
              uri: avatar
            }}
          />
        </View>
        <Text>Hash: {hash.slice(0, 7)}</Text>
      </View>
      <View style={styles.cardBody}>
        <Text>{message}</Text>
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
    color: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  container: {
    marginVertical: 20,
    paddingHorizontal: 20,
    width: "100%"
  },
  user: {
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    width: "auto"
  }
});
