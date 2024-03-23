import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TextInput,
  Button,
} from "react-native";

import { useState, useEffect } from "react";

export default function App() {
  const [postList, setPostList] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [refreshing, setIsRefreshing] = useState(false);

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [postId, setPostId] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async (limit = 5) => {
    try {
      const response = await fetch(
        `https://jsonplaceholdeer.typicode.com/posts?_limit=${limit}`
      );
      let data = await response.json();
      setPostList(data);
      setIsLoading(false);
      setError("");
    } catch (error) {
      console.error("Fetching Data to List error:", error);
      setIsLoading(false);
      setError("Failed to Fetch Data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.loading}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Loading</Text>
      </SafeAreaView>
    );
  }

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchData(15);
    setIsRefreshing(false);
  };

  const addPost = async () => {
    setIsPosting(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/`,
        {
          headers: {
            "Content-type": "application/json",
          },
          method: "post",
          body: JSON.stringify({
            id: postId,
            title: postTitle,
            body: postBody,
            userId: 1,
          }),
        }
      );
      const newPost = await response.json();
      newPost.id = Date.now();
      setPostList([newPost, ...postList]);
      setPostId("");
      setPostTitle("");
      setPostBody("");
      setIsPosting(false);
      setError("");
      console.log(newPost.id, newPost.title, newPost.body);
    } catch (error) {
      console.error("Error while posting new post :", error);
      setError("Error while adding new post");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Error while Fetching : {error}</Text>
        </View>
      ) : (
        <>
          <View style={styles.formContainer}>
            {/* <Text style={styles.formText}>Post ID</Text>
          <TextInput
            placeholder="Id"
            style={styles.formInput}
            value={postId}
            onChangeText={setPostId}
          /> */}
            <Text style={styles.formText}>{postId}</Text>
            <Text style={styles.formText}>Post Title</Text>
            <TextInput
              placeholder="Title"
              style={styles.formInput}
              // value={postTitle}
              value={postTitle}
              onChangeText={setPostTitle}
            />
            <Text style={styles.formText}>Post Body</Text>
            <TextInput
              placeholder="Body"
              style={styles.formInput}
              value={postBody}
              onChangeText={setPostBody}
            />
            <Button title="Submit" onPress={addPost} />
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={postList}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => {
                return (
                  <View style={styles.itemListContainer}>
                    {/* <Text style={styles.bodyText}>{item.id}</Text> */}
                    <Text style={styles.titleText}>{item.title}</Text>
                    <Text style={styles.bodyText}>{item.body}</Text>
                  </View>
                );
              }}
              ItemSeparatorComponent={<View style={{ height: 16 }} />}
              ListEmptyComponent={
                <Text style={styles.listHeader}>No Post, List Empty</Text>
              }
              ListHeaderComponent={
                <Text style={styles.listHeader}>Posts List</Text>
              }
              ListFooterComponent={
                <Text style={styles.listHeader}>End of List</Text>
              }
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bodyText: {
    fontSize: 12,
  },
  container: {
    flex: 1,
    backgroundColor: "wheat",
    paddingTop: StatusBar.currentHeight,
  },
  errorContainer: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    margin: 24,
    borderRadius: 24,
  },
  errorText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  formContainer: {
    backgroundColor: "white",
    margin: 10,
    padding: 16,
    borderRadius: 10,
    // alignItems: "center",
    justifyContent: "center",
  },
  formInput: {
    borderWidth: 1,
    height: 25,
    marginBottom: 20,
    paddingLeft: 10,
  },
  formText: {
    marginBottom: 6,
  },
  listContainer: {
    flex: 1,
    margin: 16,
  },
  itemListContainer: {
    padding: 16,
    backgroundColor: "white",
    marginBottom: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  listHeader: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  loading: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
    justifyContent: "center",
  },
});
