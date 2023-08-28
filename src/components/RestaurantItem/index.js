import { View, StyleSheet, Image, Text } from "react-native";

const RestaurantItem = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />
      <View style={styles.titleView}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <View style={styles.rating}>
          <Text>{restaurant.rating}</Text>
        </View>
      </View>
      <Text>{`$ ${restaurant.deliveryFee} Time: ${restaurant.minDeliveryTime} - ${restaurant.maxDeliveryTime} min`}</Text>
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  image: {
    height: 150,
    width: "100%",
    borderRadius: 20,
  },
  titleView: {
    flex: 1,
    flexDirection: "row",
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
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 2,
  },
});
