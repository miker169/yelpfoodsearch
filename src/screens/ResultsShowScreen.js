import React, {useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from "../api/yelp";

const ResultsShowScreen = ({navigation: {getParam}}) => {
  const [result, setResult] = useState(null);
  let id = getParam('id');

  console.log(result);

  const getBusiness = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getBusiness(id)
  },[]);


  if(!result){
    return null;
  }


  return(
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo }
        renderItem ={ ({item}) => <Image style={styles.image} source={{uri: item}} />  }
      />
    </View>
  )
};

const styles = StyleSheet.create({
      image: {
        height: 200,
        width: 200
    }
});

export default ResultsShowScreen;
