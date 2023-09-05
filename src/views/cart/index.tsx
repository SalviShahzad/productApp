// Cart page

import { View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { setProducts } from 'src/store/actions/Product';
import CartCard from '@components/cartCard';

function CartScreen() {
    const productList = useSelector((state: any) => state?.ProductReducer?.products);
    const dispatch = useDispatch();

    const addItemToCart = (item: any) => {
        let data = productList
        let idx = data.findIndex(ele => ele.id === item.id)
        data[idx].quantity = data[idx].quantity ? data[idx].quantity++ : 1
        dispatch(setProducts(data))
    }

    const removeItemFromCart = (item: any) => {
        let data = productList
        let idx = data.findIndex(ele => ele.id === item.id)
        data[idx].quantity = data[idx].quantity ? data[idx].quantity-- : 0
        dispatch(setProducts(data))
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList renderItem={(ele) => <CartCard element={ele} addToCart={(item: any) => addItemToCart(item)} removeFromCart={(item: any) => removeItemFromCart(
                item)} />
            } data={productList} keyExtractor={ele => ele.id} />
        </View>
    );
}

export default CartScreen