// Home page

import { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { getProducts, setProducts } from 'src/store/actions/Product';
import ProductCard from '@components/productCard';

function HomeScreen({ navigation }) {
    const productList = useSelector((state: any) => state?.ProductReducer?.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const addItemToCart = (item: any) => {
        let data = productList
        let idx = data.findIndex(ele => ele.id === item.id)
        data[idx].quantity = data[idx].quantity ? data[idx].quantity++ : 1
        dispatch(setProducts(data))
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList renderItem={(ele) => <ProductCard element={ele} addToCart={(item: any) => addItemToCart(item)} />} data={productList} keyExtractor={ele =>
                ele.id} ListFooterComponent={<TouchableOpacity onPress={() => navigation.navigate("Cart")}><Text>Go to cart</Text></TouchableOpacity>} />
        </View>
    );
}

export default HomeScreen