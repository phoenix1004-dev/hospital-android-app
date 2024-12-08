import { View } from "react-native";
import { Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import CardList from "./CardList";

const List = () => {
  return (
    <View style={styles.root}>
      <Text variant="bodyLarge" style={styles.title}>
        Recommendations
      </Text>
      <CardList />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    padding: 20,
  },
  title: {
    fontWeight: "bold",
  },
});
