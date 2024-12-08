import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { StyleSheet } from "react-native";

const Top = () => {
  return (
    <View style={styles.root}>
      <Text variant="titleMedium">Browse Specialist</Text>
      <Button mode="text" onPress={() => console.log("Pressed")}>
        Sell all
      </Button>
    </View>
  );
};

export default Top;

const styles = StyleSheet.create({
  root: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    color: "#5456d2",
  },
});
