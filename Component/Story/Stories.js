import { View, Text, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Avatar } from "react-native-elements";
import React from "react";
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
const Stories = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 0.7,
      }}
    >
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map(({ id, name }) => (
          <View style={{ padding: 6, marginTop: 2 }} key={id}>
            <Avatar
              // key={id}
              //   style={{ marginLeft: 10 }}
              size={60}
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
  );
};
// const styles = StyleSheet.create({
//   story: {
//     borderBottomWidth: 1,
//   },
// });
export default Stories;
