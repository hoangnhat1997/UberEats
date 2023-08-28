import { FlatList, SafeAreaView } from "react-native";
import RestaurantItem from "../../components/RestaurantItem";
import restaurants from "../../assets/data/restaurants.json";

const Home = () => {
  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantItem restaurant={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Home;
