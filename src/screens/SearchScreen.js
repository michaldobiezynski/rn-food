import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      pramas: {
        limit: 50,
        term: term,
        location: "San Jose",
      },
    });
    setResults(response.data.businesses);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => {
          setTerm(newTerm);
        }}
        onTermSubmit={searchApi}
      />
      <Text>We have found {results.length}</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
