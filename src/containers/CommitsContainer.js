import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function CommitsContainer() {
  const [commits, setCommits] = useState();

  const fetchCommits = async () => {
    fetch("https://api.github.com/repos/geohalbert/github-assignment/commits")
      .then(response => response.json()) //Converting the response to a JSON object
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
        console.log(`commits: ${JSON.stringify(commits)}`);
      })
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
