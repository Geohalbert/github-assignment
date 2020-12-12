import React, { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";

import Commit from "../components/Commit";

export default function CommitsContainer() {
  const [commits, setCommits] = useState();
  const [isFetching, setIsFetching] = useState(false);

  const fetchCommits = async () => {
    fetch("https://api.github.com/repos/geohalbert/github-assignment/commits")
      .then(response => {
        setIsFetching(true);
        return response.json(); //Converting the response to a JSON object
      })
      .then(data => {
        setIsFetching(false);
        const commitArray = [];
        data.forEach(resp => {
          let user = resp.commit.author.name;
          let hash = resp.comments_url.slice(66, 106);
          let message = resp.commit.message;
          let commit = { user, hash, message };
          commitArray.push(commit);
        });
        setCommits(commitArray.reverse());
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
    <View>
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
        <Text>Fetching....</Text>
      )}
    </View>
  );
}
