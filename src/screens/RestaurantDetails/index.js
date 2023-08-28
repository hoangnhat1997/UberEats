import { View, Text, StyleSheet, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import restaurants from "../../assets/data/restaurants.json";

const RestaurantDetails = () => {
  const restaurant = restaurants[0];
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />
      <Ionicons
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text
        style={styles.price}
      >{`$ ${restaurant.deliveryFee} Time: ${restaurant.minDeliveryTime} - ${restaurant.maxDeliveryTime} min`}</Text>
    </View>
  );
};
export default RestaurantDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 10,
  },
  rating: {
    height: 30,
    width: 30,
    marginLeft: "auto",
    marginVertical: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 3,
    backgroundColor: "lightgray",
  },
  name: {
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 2,
    marginLeft: 10,
  },
  price: {
    marginLeft: 10,
  },
});
