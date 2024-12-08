import { Appbar } from "react-native-paper";
import { useRouter } from "expo-router";

const Head = () => {
  const router = useRouter();

  const _handleSearch = () => router.push("/search");

  return (
    <Appbar.Header mode="small">
      <Appbar.Action icon="map-marker" />
      <Appbar.Content title="Bolpur" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
    </Appbar.Header>
  );
};

export default Head;
