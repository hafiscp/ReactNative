import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "./screens/DashboardScreen";
import SettingScreen from "./screens/SettingScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: "#f5e5f5",
          drawerActiveTintColor: "#000",
        }}
      >
        <Drawer.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: "My Dashboard",
            drawerLabel: "Dashboard",
          }}
        ></Drawer.Screen>
        <Drawer.Screen
          name="Settings"
          component={SettingScreen}
          options={{
            title: "My Settings",
            drawerLabel: "Settings",
          }}
        ></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
