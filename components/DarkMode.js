import { View, StyleSheet, Text } from "react-native";

export default function DarkMode() {
  return (
    <View style={styles.darkMode}>
      <Text style={styles.darkModeText}>
        Dark Mode ,
        <Text style={styles.darkModeBold}>
          in bold, and
          <Text style={styles.darkModeBoldItalic}> in Bold Italic</Text>
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  darkMode: {
    backgroundColor: "black",
  },
  darkModeText: {
    color: "white",
  },
  darkModeBold: {
    fontWeight: "bold",
  },
  darkModeBoldItalic: {
    fontStyle: "italic",
  },
});
