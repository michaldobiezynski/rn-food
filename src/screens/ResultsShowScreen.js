import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({});
