// Product component

import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const ProductCard = ({
    element,
    addToCart
}) => {
    const { item } = element

    return (
        <View style={styles.item}>
            <Image source={{ uri: item.img }} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>{`£${item.price}`}</Text>
            <TouchableOpacity onPress={() => addToCart(item)}><Text>Add to cart</Text></TouchableOpacity>
        </View>
    );
}

export default ProductCard