import { Image, StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";

interface Item {
  id: string;
  img: string;
  content: string;
}

const demoItems: Item[] = [
  {
    id: "0",
    img: "@/assets/images/person-1.png",
    content: "General Physician",
  },
  {
    id: "1",
    img: "@/assets/images/heart.png",
    content: "Heart Specialist",
  },
  {
    id: "2",
    img: "@/assets/images/gynecologist.png",
    content: "Gynecologist",
  },
];

const SpecialCard = () => {
  return (
    <>
      {demoItems.map((item) => (
        <Card style={styles.card} key={item.id}>
          <View style={styles.imgContainer}>
            <Card.Cover
              source={require("@/assets/images/heart.png")}
              style={styles.imgSize}
            />
          </View>
          <Card.Content>
            <Text variant="labelMedium" style={styles.text}>
              {item.content}
            </Text>
          </Card.Content>
        </Card>
      ))}
    </>
  );
};

export default SpecialCard;

const styles = StyleSheet.create({
  card: {
    width: 120,
    height: 110,
    margin: 4,
    marginBottom: 10,
    backgroundColor: "white",
    borderWidth: 0,
    elevation: 0,
    borderColor: "transparent",
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    margin: 5,
  },
  imgSize: {
    width: 70,
    height: 70,
  },
  text: {
    textAlign: "center",
  },
});
