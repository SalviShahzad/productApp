import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9f9ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        justifyContent: 'center',
    },
    title: {
        fontSize: 26,
    },
    img: {
        resizeMode: 'contain',
        flex: 1,
    height: 150,
    width: 150,
    },
    price: {
        fontSize: 20,
    },
});

export default styles;