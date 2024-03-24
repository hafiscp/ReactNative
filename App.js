import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import About from "./screens/About";
import MoreAbout from "./screens/MoreAbout";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}
