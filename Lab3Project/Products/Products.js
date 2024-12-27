import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Dimensions,
  Text,
  StyleSheet,
  Image,
  Button,
} from 'react-native';


const windowWidth = Dimensions.get('window').width;
const ProductList = () => {
  const [data, setData] = useState([]);
  const filePath = 'https://dummyjson.com/products/';

  useEffect(() => {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(d => {
        setData(d.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
  const renderItem = ({item}) => (
    <View style={styles.container}>
      <View style={styles.item}>
        <View style={styles.textside}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{`Price: ${item.price}`}</Text>
          <Text style={styles.stock}>{`Stock: ${item.stock}`}</Text>
        </View>
        <View style={styles.imageside}>
          <Image style={styles.images} source={{uri: item.thumbnail}}></Image>
        </View>
      </View>
      <View style={styles.buttonContain}>
        <Button title="Detail"></Button>
        <Button title="Delete"></Button>
        <Button title="Add"></Button>
      </View>
    </View>
  );
 
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,

    borderColor: '#ccc',
    paddingRight: 100,
  },
  item: {
    padding: 10,

    borderColor: '#ccc',
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#7',
  },
  images: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textside: {
    width: windowWidth * 0.5,
  },
  imageside: {
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    width: windowWidth * 0.45,
  },
  buttonContain: {
    padding: 40,
    flexDirection: 'row',
  },
});

export default ProductList;
