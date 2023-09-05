// Product component

import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const CartCard = ({
    element,
    addToCart,
    removeFromCart
}) => {
    const { item } = element

    return (
        item.quantity ? 
        <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>{`£${item.price}`}</Text>
            <View style ={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => addToCart(item)}><Text>+</Text></TouchableOpacity>
            <Text>{item.quantity}</Text>
            <TouchableOpacity onPress={() => removeFromCart(item)}><Text>-</Text></TouchableOpacity>
            </View>
        </View> : null
    );
}

export default CartCard