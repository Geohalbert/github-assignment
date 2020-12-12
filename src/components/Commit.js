import React from "react";
import { Text, View } from "react-native";

export default function Commit(props) {
  const { user, hash, message } = props.commit;

  return (
    <View>
      <Text>Commit {props.index + 1}</Text>
      <Text>Author: {user}</Text>
      <Text>Author: {hash}</Text>
      <Text>Author: {message}</Text>
    </View>
  );
}
