import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";
import { Avatar } from "react-native-elements";
import demoImg from "../../images/sk.jpg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Feeds = () => {
  return (
    // <ScrollView
    //   showsVerticalScrollIndicator={false}
    //   showsHorizontalScrollIndicator={false}
    //   style={styles.scrollView}
    // >
    <View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            padding: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <View>
              <Avatar
                // key={id}
                //   style={{ marginLeft: 10 }}
                size="small"
                rounded
                source={{
                  uri: "https://randomuser.me/api/portraits/",
                }}
                title="S"
              />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "bold" }}>khanshanawaz10</Text>
              <Text style={{ fontSize: 10 }}>POWAI (W)</Text>
            </View>
          </View>
          <View>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={24}
              color="black"
            />
          </View>
        </View>

        <View>
          <Image
            style={{ width: "100%", height: 370 }}
            resizeMode={"cover"}
            source={demoImg}
          />
        </View>
        <View style={{ marginLeft: 12 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <View
              style={{
                width: 110,
                marginTop: 10,
                //   padding: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <FontAwesome5 name="heart" size={24} color="black" />
              <FontAwesome5 name="comment" size={24} color="black" />
              <Ionicons name="send" size={24} color="black" />
            </View>
            <View
              style={{
                padding: 10,
                marginRight: 10,
              }}
            >
              <FontAwesome5 name="bookmark" size={24} color="black" />
            </View>
          </View>
          <View>
            <Text>
              Liked by{" "}
              <Text style={{ fontWeight: "bold" }}>sumiran_domezan_lama</Text>{" "}
              and <Text style={{ fontWeight: "bold" }}>others</Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>khanshanawaz10</Text>
            <Text style={{ marginLeft: 7, fontSize: 12 }}>❤😍</Text>
          </View>
          <View>
            <Text style={{ fontSize: 11 }}>1 day ago.</Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 30 }}></View>
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
export default Feeds;
