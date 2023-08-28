import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import RestaurantDetails from "./src/screens/RestaurantDetails";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <RestaurantDetails />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    // padding: 10,
    // paddingVertical: 45,
  },
});
