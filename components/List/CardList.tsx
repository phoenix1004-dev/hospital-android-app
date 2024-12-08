import Entypo from "@expo/vector-icons/build/Entypo";
import FontAwesome6 from "@expo/vector-icons/build/FontAwesome6";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

interface Item {
  id: string;
  name: string;
  job: string;
  position: string;
  location: string;
  time: string;
}

interface RenderItemProps {
  item: Item;
}

const demoItems = [
  {
    id: "1",
    name: "Dr. Mamun Islam",
    job: "General Physician (M.B.B.S)",
    position: "Janata Pharmacy",
    location: "Mission Compound, Canada",
    time: "Every Month Monday 11 AM",
  },
  {
    id: "2",
    name: "Dr. Mamun Islam",
    job: "General Physician (M.B.B.S)",
    position: "Janata Pharmacy",
    location: "Mission Compound, Canada",
    time: "Every Month Monday 11 AM",
  },
  {
    id: "3",
    name: "Dr. Mamun Islam",
    job: "General Physician (M.B.B.S)",
    position: "Janata Pharmacy",
    location: "Mission Compound, Canada",
    time: "Every Month Monday 11 AM",
  },
  {
    id: "4",
    name: "Dr. Mamun Islam",
    job: "General Physician (M.B.B.S)",
    position: "Janata Pharmacy",
    location: "Mission Compound, Canada",
    time: "Every Month Monday 11 AM",
  },
  {
    id: "5",
    name: "Dr. Mamun Islam",
    job: "General Physician (M.B.B.S)",
    position: "Janata Pharmacy",
    location: "Mission Compound, Canada",
    time: "Every Month Monday 11 AM",
  },
];

const CardList = () => {
  return (
    <>
      {demoItems.map((item) => (
        <View style={styles.container} key={item.id}>
          <View style={styles.persional}>
            <Image
              source={require("@/assets/images/person-1.png")}
              style={styles.avatar}
            />
            <View>
              <Text style={[styles.persionalText, styles.textBold]}>
                {item.name}
              </Text>
              <Text style={styles.persionalText}>{item.job}</Text>
              <Text style={[styles.persionalText, styles.textBold]}>
                {item.position}
              </Text>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.footerItem}>
              <Entypo name="location-pin" size={24} color="black" />
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ width: 130, marginLeft: 5 }}
              >
                {item.location}
              </Text>
            </View>
            <View style={styles.footerItem}>
              <FontAwesome6 name="clock" size={16} color="black" />
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ width: 130, marginLeft: 5 }}
              >
                {item.time}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </>
  );
};

export default CardList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 7,
    padding: 15,
    marginTop: 10,
  },
  persional: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    flexDirection: "row",
    width: 100,
    height: 100,
    marginRight: 10,
  },
  persionalText: {
    fontSize: 16,
    marginLeft: 5,
  },
  textBold: {
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
