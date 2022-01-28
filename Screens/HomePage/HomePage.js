import { View, Text, Button } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Avatar } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const data = [
  { id: 1, name: "shanawaz" },
  { id: 2, name: "salman" },
  { id: 3, name: "sajida" },
  { id: 4, name: "umar" },
  { id: 5, name: "dolly" },
  { id: 6, name: "danish" },
  { id: 7, name: "ahad" },
  { id: 8, name: "bamtai" },
  { id: 9, name: "leo" },
];
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
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row" }}>
        <ScrollView
          //   style={{ padding: 20 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {data.map(({ id, name }) => (
            <View style={{ padding: 5 }} key={id}>
              <Avatar
                // key={id}
                //   style={{ marginLeft: 10 }}
                size="medium"
                rounded
                source={{
                  uri: "https://randomuser.me/api/portraits/",
                }}
                title="S"
              />
            </View>
          ))}

          <View />
        </ScrollView>
      </View>
    </View>
  );
};

export default HomePage;
