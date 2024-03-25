import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import Home from "./screens/Home";
import About from "./screens/About";
import SettingScreen from "./screens/SettingScreen";
import DashboardScreen from "./screens/DashboardScreen";

import { AppStack } from "./AppStack";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: "below-icon",
          tabBarShowLabel: true,
          tabBarActiveTintColor: "purple",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "House",
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="settings" size={20} color={color} />
            ),
            tabBarBadge: 3,
          }}
        />

        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="document" size={20} />,
          }}
        />
        <Tab.Screen
          name="App Stack"
          component={AppStack}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="trophy" size={20} />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="server" size={20} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
