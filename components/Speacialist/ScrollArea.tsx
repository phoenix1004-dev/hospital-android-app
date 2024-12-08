import { ScrollView } from "react-native";
import SpecialCard from "./SpecialCard";

const ScrollArea = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <SpecialCard />
    </ScrollView>
  );
};

export default ScrollArea;
