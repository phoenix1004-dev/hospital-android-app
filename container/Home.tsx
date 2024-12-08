import Head from "@/components/bar/HomeHead";
import List from "@/components/List";
import Specialist from "@/components/Speacialist";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";

const Home = () => {
  return (
    <>
      <Head />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Specialist />
        <List />
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollView: { height: "100%" },
});
