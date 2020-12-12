import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View
} from "react-native";

import Commit from "../components/Commit";

export default function CommitsContainer() {
  const [commits, setCommits] = useState();
  const [isFetching, setIsFetching] = useState(false);

  const fetchCommits = async () => {
    setIsFetching(true);
    fetch("https://api.github.com/repos/geohalbert/github-assignment/commits")
      .then(response => {
        return response.json(); //Converting the response to a JSON object
      })
      .then(data => {
        const commitArray = [];
        data.forEach(resp => {
          let user = resp.commit.author.name;
          let hash = resp.comments_url.slice(66, 106);
          let message = resp.commit.message;
          let commit = { user, hash, message };
          commitArray.push(commit);
        });
        setCommits(commitArray);
        setIsFetching(false);
      })
      .catch(error => {
        setIsFetching(false);
        return console.error(error);
      });
  };

  useEffect(() => {
    fetchCommits();
  }, []);

  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#000"
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text>Commit Container</Text>
      {!isFetching ? (
        <FlatList
          data={commits}
          renderItem={({ item, index }) => (
            <Commit commit={item} index={index} />
          )}
          ItemSeparatorComponent={FlatListItemSeparator}
          keyExtractor={item => item.hash}
          ListEmptyComponent={() => (
            <View>
              <Text>No Commits</Text>
            </View>
          )}
        />
      ) : (
        <ActivityIndicator style={styles.fetching} size="large" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%"
  },
  fetching: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1
  }
});
