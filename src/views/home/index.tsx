// Home page

import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { getProducts } from 'src/store/actions/Product';

function HomeScreen() {
    const productList = useSelector((state: any) => state?.ProductReducer?.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

export default HomeScreen