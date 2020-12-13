import React, { useEffect, useState } from "react";
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Header from "../components/Header";
import Commit from "../components/Commit";
import { Colors } from "../utils/colors";

export default function CommitsContainer() {
  const [commits, setCommits] = useState();
  const [isReversed, setOrder] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  const fetchCommits = async () => {
    setIsFetching(true);
    fetch(
      "https://api.github.com/repos/geohalbert/github-assignment/commits?per_page=100"
    )
      .then(response => {
        return response.json(); //Converting the response to a JSON object
      })
      .then(data => {
        const commitArray = [];
        data.forEach(item => {
          let user = item.author.login;
          let hash = item.sha;
          let message = item.commit.message;
          let avatar = item.author.avatar_url;
          let date = item.commit.author.date;
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
        console.error(error);
      });
  };

  useEffect(() => {
    fetchCommits();
  }, []);

  const FlatListItemSeparator = () => {
    return <View style={styles.separator} />;
  };

  const emptyComponent = () => {
    return (
      <View>
        <Text>No Commits</Text>
      </View>
    );
  };

  const listHeader = () => (
    <View style={styles.listDetails}>
      {commits && (
        <Text style={styles.detail}>Total Commits: {commits.length}</Text>
      )}
      <TouchableOpacity
        onPress={() => {
          setOrder(!isReversed);
          setCommits(commits.reverse());
        }}
      >
        <Text style={styles.detail}>
          Sort by: {isReversed ? "newest" : "oldest"}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView>
      <Header />
      <View style={styles.container}>
        <FlatList
          data={commits}
          renderItem={({ item, index }) => (
            <Commit commit={item} index={index} />
          )}
          ItemSeparatorComponent={FlatListItemSeparator}
          keyExtractor={item => item.hash}
          ListEmptyComponent={emptyComponent}
          ListHeaderComponent={listHeader}
          refreshControl={
            <RefreshControl refreshing={isFetching} onRefresh={fetchCommits} />
          }
        />
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
  detail: {
    color: Colors.primaryTextColor,
    fontSize: 14
  },
  listDetails: {
    margin: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  separator: {
    backgroundColor: Colors.separator,
    height: 1,
    width: "100%"
  }
});
