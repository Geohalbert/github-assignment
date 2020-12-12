import React, { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";

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

  const renderCommit = (commit, index) => {
    return (
      <View>
        <Text>Commit {index + 1}</Text>
        <Text>Author: {commit.user}</Text>
        <Text>Author: {commit.hash}</Text>
        <Text>Author: {commit.message}</Text>
      </View>
    );
  };

  useEffect(() => {
    fetchCommits();
  }, []);

  return (
    <View>
      <Text>Commit Container</Text>
      <FlatList
        data={commits}
        renderItem={({ item, index }) => renderCommit(item, index)}
        keyExtractor={item => item.id}
        ListEmptyComponent={() => {
          <View>
            <Text>Empty</Text>
          </View>;
        }}
      />
    </View>
  );
}
