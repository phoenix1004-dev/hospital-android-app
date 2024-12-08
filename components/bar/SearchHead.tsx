import { useState } from "react";
import { Appbar, Searchbar } from "react-native-paper";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Appbar.Header style={{ justifyContent: "space-between" }}>
      <Appbar.BackAction onPress={() => {}} />
      <Searchbar
        placeholder="Search..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={{ width: 250 }}
        autoCapitalize="none"
      />
      <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar.Header>
  );
};

export default Head;
