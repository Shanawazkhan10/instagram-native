import { View, Text, Button, SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Avatar } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Stories from "../../Component/Story/Stories";
import Feeds from "../../Component/Feeds/Feeds";
import Footer from "../../Component/Footer/Footer";

const HomePage = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Instagram",
      //   headerLeft: () => (
      //     <View style={{ marginRight: 10 }}>
      //       <TouchableOpacity activeOpacity={0.5}>
      //         <Avatar
      //           size="medium"
      //           rounded
      //           source={{ uri: "https://randomuser.me/api/portraits/" }}
      //           title="S"
      //         />
      //       </TouchableOpacity>
      //     </View>
      //   ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: 80,
            // marginRight: 0,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <Ionicons
              name="add-outline"
              //   style={{ border: "1px solid black" }}
              size={24}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            {/* <Foundation
              //   onPress={() => navigation.navigate("CreateChats")}
              name="pencil"
              size={24}
              style={{ marginLeft: 15 }}
              color="black"
            /> */}
            <AntDesign
              name="message1"
              size={24}
              style={{ marginLeft: 15 }}
              color="black"
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
        >
          <Stories />
          <Feeds />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    padding: 10,
  },
  scrollView: {
    // backgroundColor: "pink",
    // marginHorizontal: 100,
  },
  text: {
    fontSize: 42,
  },
});
export default HomePage;
