import React from "react";
import { Text, View } from "react-native";

export default function Commit(props) {
  const { user, hash, message } = props.commit;

  return (
    <View key={"commit-" + hash}>
      <Text>Commit {props.index + 1}</Text>
      <Text>Author: {user}</Text>
      <Text>Hash: {hash.slice(0, 7)}</Text>
      <Text>Message: {message}</Text>
    </View>
  );
}
