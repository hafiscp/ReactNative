import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { useState, useEffect } from "react";

export default function App() {
  const [postList, setPostList] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [refreshing, setIsRefreshing] = useState(false);

  const fetchData = async (limit = 5) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    let data = await response.json();
    setPostList(data);
    setIsLoading(false);
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={postList}
          renderItem={({ item }) => {
            return (
              <View style={styles.itemListContainer}>
                <Text style={styles.bodyText}>{item.id}</Text>
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
