import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import { Avatar } from "react-native-elements";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "khanshanawaz10 commented: @salmanKhan10 halo shanawaz",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "khanshanawaz10 commented: @salmanKhan10 halo shanawaz",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e2e9d72",
    title: "khanshanawaz10 commented: @salmanKhan10 halo shanawaz",
  },
  {
    id: "58694a0f-3daw1-471f-bd96-145571e29d72",
    title: "khanshanawaz10 commented: @salmanKhan10 halo shanawaz",
  },
  {
    id: "58694aw0f-3da1-471f-bd96-145571e29d72",
    title: "khanshanawaz10 commented: @salmanKhan10 halo shanawaz",
  },
  {
    id: "58694a0f-3dwa1-471f-bd96-145571e29d72",
    title: "khanshanawaz10 commented: @salmanKhan10 halo shanawaz",
  },
  {
    id: "58694a0f-3da1-471f-bd96-14557s1e29d72",
    title: "khanshanawaz10 commented: @salmanKhan10 halo shanawaz",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e2w9d72",
    title: "khanshanawaz10 commented: @salmanKhan10 halo shanawaz",
  },
  {
    id: "58694a0f-3da1-47w1f-bd96-145571e29d72",
    title: "khanshanawaz10 commented: @salmanKhan10 halo shanawaz",
  },
  {
    id: "58694a0f-3da1-471fw-bd96-145571e29d72",
    title: "khanshanawaz10 commented: @salmanKhan10 halo shanawaz",
  },
  {
    id: "58694a0f-3da1-471f-bd96-1w45571e29d72",
    title: "khanshanawaz10 commented: @salmanKhan10 halo shanawaz",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571we29d72",
    title: "khanshanawaz10 commented: @salmanKhan10 halo shanawaz",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29dw72w",
    title: "khanshanawaz10 commented: @salmanKhan10 halo shanawaz",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72w",
    title: "khanshanawaz10 commented: @salmanKhan10 halo shanawaz",
  },
];

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

const App = () => {
  const renderItem = ({ item }) => (
    <View
      key={item.id}
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 8,
        alignItems: "center",
        // marginTop: 18,
        // height: "50%",
        marginLeft: 10,
        // marginRight: 16,
        // height: 100,
      }}
    >
      <Avatar
        // style={{ width: "10%" }}
        size={60}
        rounded
        source={{ uri: "https://randomuser.me/api/portraits/" }}
        title="R"
      />
      <Text style={{ width: 200, padding: 5 }}>{item.title}</Text>
      {/* <Text>{item.title}</Text> */}
      <Avatar
        // style={{ width: "10%" }}
        size={60}
        rounded
        source={{ uri: "https://randomuser.me/api/portraits/" }}
        title="S"
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ fontWeight: "bold", marginLeft: 25 }}>This Week</Text>
        <FlatList
          style={{ marginBottom: 20 }}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <View style={{ marginTop: 200 }}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginTop: 20,
    // width: "100%",
    // marginTop: StatusBar.currentHeight || 0,
  },
  // item: {
  //   backgroundColor: "#f9c2ff",
  //   padding: 20,
  //   marginVertical: 8,
  //   marginHorizontal: 16,
  // },
  title: {
    fontSize: 32,
  },
});

export default App;
