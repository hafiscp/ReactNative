import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import About from "./screens/About";
import MoreAbout from "./screens/MoreAbout";
import { Pressable, Text } from "react-native";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "purple",
        },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        contentStyle: {
          backgroundColor: "#e8e4f4",
        },
        headerRight: () => (
          <Pressable onPress={() => alert("Pressed")}>
            <Text style={{ color: "white" }}>Hello</Text>
          </Pressable>
        ),
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Welcome Home",
        }}
      />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="MoreAbout" component={MoreAbout} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
