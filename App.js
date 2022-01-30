import * as React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomePage from "./Screens/HomePage/HomePage";
import Gallery from "./Screens/Gallery/Gallery";
import Reels from "./Screens/Reels/Reels";
import Likes from "./Screens/Likes/Likes";
import Profile from "./Screens/Profile/Profile";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      style={{ height: 40 }}
      initialRouteName="Activity"
      screenOptions={{
        tabBarActiveTintColor: "#606467",
        // height: 120,
        tabBarStyle: { height: 70 },
      }}
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 50,
          width: 300,
          flexDirection: "column",
          alignSelf: "center",
          elevation: 2,
          height: 60,
          borderTopStartRadius: 5,
          borderTopEndRadius: 5,
        },
        // activeTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Gallery"
        component={Gallery}
        options={{
          tabBarLabel: "Gallery",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarLabel: "Reels",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="video-collection" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Likes}
        options={{
          tabBarLabel: "Activity",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
