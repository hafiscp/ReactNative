import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";

import pokemonList from "./data.json";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.card}>
          {/* {pokemonList.map((pokemon) => {
              return (
                <View key={pokemon.id} style={styles.list}>
                  <Text style={styles.listText}>{pokemon.type}</Text>
                  <Text style={styles.listText}>{pokemon.name}</Text>
                </View>
              );
            })} */}
          <FlatList
            // data={}
            renderItem={({ item }) => {
              return (
                <View key={item.id} style={styles.list}>
                  <Text style={styles.listText}>{item.type}</Text>
                  <Text style={styles.listText}>{item.name}</Text>
                </View>
              );
            }}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={<View style={{ height: 16 }}></View>}
            ListEmptyComponent={<Text>No Items Found</Text>}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginTop: StatusBar.currentHeight,
    justifyContent: "center",
    margin: 20,
  },
  list: {
    flexDirection: "column",
    justifyContent: "space-around",
    borderWidth: 2,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "lightblue",
  },
  listText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  mainContainer: {
    backgroundColor: "#f5f5f5",
  },
});
