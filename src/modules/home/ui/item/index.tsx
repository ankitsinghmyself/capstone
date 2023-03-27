import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from '../styles';

type Props = {
  name: string;
  price: number;
  description: string;
  image: string;
};

export default function FoodListItem({name, price, description, image}: Props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemBody}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      <Image
        style={styles.itemImage}
        source={{
          uri: `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${image}?raw=true`,
        }}
      />
    </View>
  );
}
