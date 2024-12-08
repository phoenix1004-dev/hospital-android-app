import { View } from "react-native";
import Top from "./Top";
import { StyleSheet } from "react-native";
import ScrollArea from "./ScrollArea";
import { Divider } from "react-native-paper";

const Specialist = () => {
  return (
    <View style={styles.root}>
      <Top />
      <ScrollArea />
      <View style={styles.container}>
        <Divider style={styles.customDivider} />
      </View>
    </View>
  );
};

export default Specialist;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  customDivider: {
    width: "95%",
    height: 7,
    backgroundColor: "gray",
    opacity: 0.3,
  },
});
