import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  SectionList,
  FlatList,
} from "react-native";

import pokemonList from "./data.json";
import groupedpokemon from "./groupedpokemon.json";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <SectionList
            sections={groupedpokemon}
            renderItem={({ item }) => {
              return (
                <View style={styles.card}>
                  <Text style={styles.listText}>{item}</Text>
                </View>
              );
            }}
            renderSectionHeader={({ section }) => (
              <Text
                style={[
                  styles.listText,
                  {
                    textAlign: "center",
                    padding: 20,
                    backgroundColor: "lightblue",
                  },
                ]}
              >
                {section.type}
              </Text>
            )}
            SectionSeparatorComponent={() => <View style={{ height: 10 }} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  card: {
    marginTop: StatusBar.currentHeight,
    justifyContent: "center",
    margin: 20,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "black",
    height: 60,
    padding: 12,
    backgroundColor: "white",
  },
  list: {
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 20,
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
