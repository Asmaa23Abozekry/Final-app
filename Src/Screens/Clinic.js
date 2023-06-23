//import liraries
import React, { useState} from 'react';
import { View, Text, StyleSheet, Image ,TouchableOpacity ,FlatList,Modal} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons/faCalendarCheck";

const Clinic_ITEMS = [
  {
    id: '1',
    name: "Animal Medical Center",
    phone:"183-239-8115",
    address:" Zamalek",
    fullAddress: "20 El Gezira Street, Zamalek, Cairo",
    image: {uri:"https://media.istockphoto.com/id/1303833951/photo/vet-doctor-examining-labrador-dog.jpg?s=612x612&w=0&k=20&c=HWMvyA16YdGhkayGOTqlmM6gX7gSklzoOjzDlODD2Is="},
    availableAppointments: [
      " Today : 9:00 AM",
      " , 2:00 PM ",
      " , 4:30 PM "
      ]
  },
  {
    id: '2',
    name: 'Happy Veterinary Clinic',
    phone:"932-252-3281",
    address:"Sheikh Zayed City",
    fullAddress: "123 ST Sheikh Zayed City , Giza ,Egypt",
    image: {uri:"https://media.istockphoto.com/id/878447520/photo/vet-with-dog-and-cat.jpg?s=612x612&w=0&k=20&c=OumgIZ4isr4Gj8RZbriP5D0OWaX04C57kUzOT96K8tU="},
    availableAppointments: [
      " Today : 10:00 AM",
      " , 3:30 PM "
      ]
  },
  {
    id: '3',
    name: "VCA Animal Hospital",
    phone:"395-123-7683",
    address:" Giza",
    fullAddress:  " 7 El Wehda El Arabeya Street, Giza",
    image: {uri:"https://media.istockphoto.com/id/885571364/photo/young-french-bulldog-on-the-visit-to-the-vet.jpg?s=612x612&w=0&k=20&c=VqeEbRjrDxb6mCBaIJfWooSDQAjkPS8aNTBJ8HQyZeA="},
    availableAppointments: [
      " Today : 8:30 AM",
      " , 1:30 PM ",
      " , 5:00 PM "
      ]
  },
  {
    id: '4',
    name: "Pearl Veterinary Partners",
    phone:"414-984-7612",
    address:" Nasr City",
    fullAddress:  "123 Main St, Nasr City",
    image: {uri: "https://media.istockphoto.com/id/1158247958/photo/vet-cuddling-pet-dog.jpg?s=612x612&w=0&k=20&c=obxvtFgO1Um2UDfo8qPZk06VE8vK4s-oklvd0ZdFEQ0="},
    availableAppointments: [
      " Today : 9:30 AM ",
      " , 2:30 PM ",
      " , 4:00 PM "
      ]
  },
  {
    id: '5',
    name: "Bayshore Veterinary Clinic",
    phone: "845-234-1232",
    address:" Heliopolis",
    fullAddress:  "29 Shams El Din El Zahaby, Heliopolis",
    image: {uri:"https://media.istockphoto.com/id/454435997/photo/this-isnt-a-chew-toy.jpg?s=612x612&w=0&k=20&c=U8nUsrWJFMHFlkvxiod17994T631U3pXf-om4xlXKU0="},
    availableAppointments: [
      " Today :8:00 AM",
      " , 1:00 PM",
      " , 3:00 PM"
      ]
  },
  {
    id: '6',
    name: "Oakhurst Veterinary Hospital",
    phone:"395-123-7683",
    address: "Ain Shams",
    fullAddress: "456 Pine St, Ain Shams,Cairo",
    image: {uri:"https://media.istockphoto.com/id/665117622/photo/curious-puppy.jpg?s=612x612&w=0&k=20&c=M6MOANnJoZg77b8sQKzZkCyDlRjNLIjmRIqs1sNR6ZE="},
    availableAppointments: [
      " Today :9:00 AM",
      " , 2:00 PM",
      " , 4:30 PM"
      ]
  },
  {
    id: '7',
    name: "Veterinary Medical Center",
    phone:"987-234-5443",
    address:"Rehab City",
    fullAddress: "28 El Khalifa El Maamoun Street,Elrehab",
    image: {uri:"https://media.istockphoto.com/id/1162639281/photo/very-happy-veterinarian-getting-a-kiss-from-a-dog.jpg?s=612x612&w=0&k=20&c=WkWRTEuL5k8sMAktaeV-_eqdO6B7HWNwJCBq-8botaE="},
    availableAppointments: [
      " Today : 8:30 AM",
      " , 1:30 PM ",
      " , 5:00 PM "
      ]
  },

  {
    id: '8',
    name: "Paws Animal Hospital",
    phone:"809-348-1287",
    address: " Sharm El Sheikh",
    fullAddress:  "Om El Seid Hill, El Hadaba, Sharm El Sheikh",
    image: {uri:"https://media.istockphoto.com/id/1214635081/photo/vet-examining-the-pet.jpg?s=612x612&w=0&k=20&c=Q3GiFg6PhuidDxkoKJOB88Q-C5K9BvKSiAOSYDmBuOM="},
    availableAppointments: [
      " Today : 10:30 AM",
      " , 5:30 PM ",
      " , 7:00 PM "
      ]
  },

  {
    id: '9',
    name:"Midtown Veterinary Hospital",
    phone:"987-234-5443",
    address:"Alexandria",
    fullAddress:"7 El Nasr Street, Saba Pasha, Alexandria",
    image: {uri:"https://media.istockphoto.com/id/1187228710/photo/veterinarians-carry-through-an-ultrasound-examination-of-a-domestic-cat.jpg?s=612x612&w=0&k=20&c=n7ZEagYwhXFZIhdE_EZWA6bQDVzlNGEi7OLIqrVrPOQ="},
    availableAppointments: [
      " Today : 8:30 AM",
      " , 1:30 PM ",
      " , 5:00 PM "
      ]
  },
];

const Clinics = () => {
  const [cartItems, setCartItems] = useState(Clinic_ITEMS);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCardPress = (item) => {
    setSelectedItem(item);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedItem(null);
  };
  
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} >
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}> {item.name}</Text>
        <Text style={styles.itemAddress}> <FontAwesomeIcon icon={faLocationDot}  color="#ff642e" /> {item.address}</Text>
        <TouchableOpacity style={styles.modalCloseButton} onPress={() => handleCardPress(item)}>Details</TouchableOpacity>
        {/* <Text style={styles.itemAppointment}>{item.availableAppointments}</Text> */}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.styleHeader}>Our Clinics</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <Modal visible={isModalVisible} animationType="slide" onRequestClose={handleModalClose}>
        <View style={styles.modalContainer}>
          <Image source={selectedItem?.image} style={styles.modalImage} />
          <Text style={styles.modalTitle}>{selectedItem?.name}</Text>
          <Text style={styles.modalDescription}> <FontAwesomeIcon icon={faPhone}  color="#ff642e" />{selectedItem?.phone}</Text>
          <Text style={styles.modalDescription}><FontAwesomeIcon icon={faLocationDot}  color="#ff642e" />  {selectedItem?.fullAddress}</Text>
          <Text style={styles.modalDescription}><FontAwesomeIcon icon={faCalendarCheck}  color="#ff642e" /> Avilable Appointment: {selectedItem?.availableAppointments}</Text>

          <TouchableOpacity style={styles.modalCloseButton} onPress={handleModalClose}>
            <Text style={styles.modalCloseText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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

  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal:15,
   marginTop:10,
    backgroundColor:"#eee"
  },
  itemImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  itemDetails: {
    marginLeft: 16,
    flex: 1,
  },
  itemName: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  itemAddress: {
    fontSize: 14,
    color: '#ff642e',
    marginTop: 10,
  },
  itemAppointment: {
    fontSize: 14,
    color: '#ff642e',
    marginTop: 4,
  },


  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  modalImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 16,
  },
  modalCloseButton: {
    backgroundColor: '#ff6347',
    padding: 8,
    borderRadius: 8,
    width:60,
    marginTop:15,
    color:'#fff' ,
    alignSelf: 'flex-center',
  },
  modalCloseText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  styleHeader:{
    color: '#ff6347',
    fontSize:25 ,
    fontWeight:'bold',
    margin:'auto',
    marginTop:10
    
  }
};
//make this component available to the app
export default Clinics;
