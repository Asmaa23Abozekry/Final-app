import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView, useWindowDimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons/faCartShopping';
import Cart from '../Components/Cart';

const products = [
  {
    id: '1',
    name: 'Groovy pet Carrier',
    image: { uri: "https://m.media-amazon.com/images/I/91UXjVeQpLL._AC_UF1000,1000_QL80_.jpg" },
    price: "EGP 450.00",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '2',
    name: 'Ariika pet Bed',
    image: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ulicRfy8fS_OFHZkVyme3KSo12yRoDn4aw&usqp=CAU" },
    price: "EGP 1500.00",
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '3',
    name: 'Catmania Cat litter',
    image: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTheCuiYkkz2odsknp-pVa-kaSTnrq8WlZEeA&usqp=CAU" },
    price: "EGP 700.00",
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: '4',
    name: 'Groovy pet Carrier',
    image: { uri: "https://m.media-amazon.com/images/I/91UXjVeQpLL._AC_UF1000,1000_QL80_.jpg" },
    price: "EGP 450.00",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '5',
    name: 'Ariika pet Bed',
    image: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ulicRfy8fS_OFHZkVyme3KSo12yRoDn4aw&usqp=CAU" },
    price: "EGP 1500.00",
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '6',
    name: 'Catmania Cat litter',
    image: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTheCuiYkkz2odsknp-pVa-kaSTnrq8WlZEeA&usqp=CAU" },
    price: "EGP 700.00",
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const Shop = () => {
  const [cartItems, setCartItems] = useState(products);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleAddToCart = (product) => {
    // Add the product to the cart
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} >
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
      <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.modalCloseButton} onPress={() => onAddToCart(item)}> <FontAwesomeIcon icon={faCartShopping} color='#fff' /></TouchableOpacity>
        {/* <Text style={styles.itemAppointment}>{item.availableAppointments}</Text> */}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.styleHeader}>Products</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};
// define your styles
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems:'center'

  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal:15,
    marginTop:10,
    borderWidth: 1,
    borderRadius: 10,
    width:400,
  //  borderTopRightRadius: 10,
   backgroundColor:"#eee"
    
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    
  },
  itemName: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#ff642e',
    marginTop: 10,
    
   
  },
  itemDetails: {
    marginTop:5,
    marginLeft: 16,
    flex:1
   
  },
  styleHeader:{
    color: '#ff6347',
    fontSize:25 ,
    fontWeight:'bold',
    margin:'auto',
    marginTop:10
    
  },
  modalCloseButton: {
    backgroundColor: '#ff6347',
    padding: 8,
    borderRadius: 8,
    width:40,
    fontSize:18,
    margin:15,
    color:'#fff' ,
    alignSelf: 'flex-center',
    alignItems:'center'
  },
};
export default Shop;