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
      <View>
        <Text>{restaurant.name}</Text>
        <Text>Cost delivery $ 1.34</Text>
        <Text>{restaurant.minDeliveryTime}</Text>
      </View>
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
});
