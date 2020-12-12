import React, { useEffect } from "react";
import { View, Text } from "react-native";

export default function CommitsContainer() {
  const fetchCommits = async () => {
    fetch("https://api.github.com/repos/geohalbert/github-assignment/commits")
      .then(response => response.json()) //Converting the response to a JSON object
      .then(data =>
        data.forEach(commit => {
          let hash = commit.comments_url.slice(66, 106);
          console.log(
            `commit \n author: ${commit.commit.author.name} \n comment url: ${hash} \n message: ${commit.commit.message}`
          );
        })
      )
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchCommits();
  }, []);

  return (
    <View>
      <Text>Commit Container</Text>
    </View>
  );
}
