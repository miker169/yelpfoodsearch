import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/resultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => results.filter(x => x.price === price);

  return (
    <>
      <SearchBar
        onTermSubmit={() => searchApi(term)}
        term={term}
        onTermChange={setTerm}
      />
      {errorMessage.length ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList title="Cost Effective"
                     results={filterResultsByPrice('£')}/>
        <ResultsList title="Bit Pricier"
                     results={filterResultsByPrice('££')}/>
        <ResultsList title="Big Spender"
                     results={filterResultsByPrice('£££')}/>
      </ScrollView>
    </>
  )
};

const styles = StyleSheet.create({});

export default SearchScreen;
