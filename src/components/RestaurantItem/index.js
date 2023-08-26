import { View, StyleSheet, Image, Text } from "react-native";

const RestaurantItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://thecurrent.media/media-library/uber-eats.png?id=33206140&width=1245&height=700&quality=85&coordinates=112%2C0%2C113%2C0",
        }}
        style={styles.image}
      />
      <View>
        <Text>Victoria Bressenden</Text>
        <Text>Cost delivery $ 1.34</Text>
        <Text>20-35 min</Text>
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
