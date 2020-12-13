import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from "react-native";

import Commit from "../components/Commit";
import { Colors } from "../utils/colors";

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
          let user = resp.author.login;
          let hash = resp.sha;
          let message = resp.commit.message;
          let avatar = resp.author.avatar_url;
          let date = resp.commit.author.date;
          let commit = {
            avatar,
            date,
            hash,
            message,
            user
          };
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
          backgroundColor: Colors.separator
        }}
      />
    );
  };

  return (
    <SafeAreaView>
      <Text style={styles.headerTitle}>Geohalbert/github-assignment</Text>
      <View style={styles.container}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondaryBackground,
    borderColor: Colors.primaryBorder,
    borderRadius: 6,
    borderWidth: 2,
    flex: 1,
    width: "90%"
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
  },
  headerTitle: {
    color: Colors.primaryTextColor
  }
});
