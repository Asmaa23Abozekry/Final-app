import React, { useState } from "react";
import {
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import headerImage from "../../assets/Images/adopt1.jpg";
import headerImageClicked from "../../assets/Images/adopt2.jpg";

export default function Shelter() {
  const screenWidth = Dimensions.get("window").width;
  const imageWidth = screenWidth;

  const [isClicked, setIsClicked] = useState(false);
  const [shelterCard] = useState([
    {
      id: 1,
      name: "Happy Tails Animal Shelter",
      phone: "111-111-1111",
      address: "123 Main St, Nasr City",
      type: "cat",
      pet: {
        name: "Buddy",
        image:
          "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTk3MjI5OTczMDA0NjI0OTc5/cute-pet-names.webp",
        description:
          "Buddy is a charming and affectionate cat. He loves to curl up in your lap and enjoys being petted.",
      },
    },
    {
      id: 2,
      name: "Paw Prints Rescue Center",
      phone: "222-222-2222",
      address: "456 Elm St, Giza",
      type: "dog",
      pet: {
        name: "Fluffy",
        image:
          "https://media.istockphoto.com/id/1248529734/photo/golden-retriever-in-the-field-with-yellow-flowers.jpg?s=612x612&w=0&k=20&c=DQhfvzclkW-CJRE4vlJAG35PnDIewKgRO5zlBRif1Gg=",
        description:
          "Fluffy is a friendly and playful dog. She loves to go on long walks and enjoys playing fetch.",
      },
    },
    {
      id: 3,
      name: "Loving Paws Agency",
      phone: "333-333-3333",
      address: "789 Oak St, Elsalam",
      type: "cat",
      pet: {
        name: "Lucy",
        image:
          "https://media.istockphoto.com/id/465257035/photo/small-orange-kitten-lie-on-the-bed.webp?b=1&s=170667a&w=0&k=20&c=bIYTs3vCGzOukVMQtqoSm8UAJk0hR792vdVYe6F8L-k=",
        description:
          "Lucy is a graceful and independent cat. She enjoys lounging in sunny spots.",
      },
    },

    {
      id: 5,
      name: " Wags Animal Rescue",
      phone: "555-555-5555",
      address: "321 Maple Ave, Sheraton",
      type: "dog",
      pet: {
        name: "Oscar",
        image:
          "https://media.istockphoto.com/id/1413640918/photo/dog-jumping-in-autumn-leaves.webp?b=1&s=170667a&w=0&k=20&c=2b1dPjUZnS-U_lmBYYIjbw9t3vOo7ILYr1K8eO73fDw=",
        description:
          "Oscar is a playful and curious dog. He loves playing around and enjoys eating dry food",
      },
    },
    {
      id: 6,
      name: "Pawsitive Vibes Shelter",
      phone: "666-666-6666",
      address: "789 Oak St, Hillioplis",
      type: "cat",
      pet: {
        name: " Luna",
        image:
          "https://media.istockphoto.com/id/1185437742/photo/close-up-view-of-gray-tabby-cute-kitten-pets-and-lifestyle-concept-lovely-fluffy-cat-on-grey.webp?b=1&s=170667a&w=0&k=20&c=pev30nO249Z-P_efXOM0iYqLoITGXghf_qnKqjJ-lNg=",
        description:
          "Luna is an elegant and affectionate cat. She loves to be petted and enjoys lounging in cozy spots.",
      },
    },
    {
      id: 7,
      name: "Fur-ever Homes Adoption ",
      phone: "777-777-7777",
      address: "987 Elm St, Townville",
      type: "cat",
      pet: {
        name: "Rocky",
        image:
          "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        description:
          "Rocky is a loyal and active cat. He enjoys going for runs and playing fetch with a tennis ball.",
      },
    },
    {
      id: 9,
      name: "Paws and Claws Center",
      phone: "999-999-9999",
      address: "456 Pine St, Ain Shams",
      type: "cat",
      pet: {
        name: "Loka",
        image:
          "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        description:
          "Loka is an elegant and affectionate cat. She loves to be petted and enjoys lounging in cozy spots.",
      },
    },
  ]);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const imageSource = isClicked ? headerImageClicked : headerImage;

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleClick} style={styles.touchable}>
          <Image
            source={imageSource}
            style={{ width: imageWidth, height: 150 }}
          />
        </TouchableOpacity>

        {shelterCard.map((card) => (
          <TouchableOpacity key={card.id} style={styles.shelterCard}>
            <Image source={{ uri: card.pet.image }} style={styles.cardImage} />
            <View style={styles.cardOverlay}>
              <View style={styles.cardHeader}>
                <View style={styles.cardHeaderText}>
                  <Text style={styles.cardStatus}>{card.pet.name}</Text>

                  <Text style={styles.cardTitle}>{card.name}</Text>
                </View>
              </View>
              <Text style={styles.cardDescription}>{card.pet.description}</Text>
              <Text style={styles.cardMoreInfo1}>{card.address}</Text>
              <View
                style={styles.cardMoreInfo2}
                >
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ marginRight: 10,color:"#ff642e" }}
                  size={18}
                />
                <Text style={styles.phoneNumber}>{card.phone}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
  },
  touchable: {
    marginBottom: 12,
  },
  shelterCard: {
    margin: 20,

    height: "auto",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardImage: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  cardOverlay: {
    padding: 16,
  },
  cardHeader: {
    flexDirection: "row",
  },
  cardThumb: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  cardHeaderText: {
    marginLeft: 70,
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 16,
    marginVertical: 2,
    color: "#ff642e",
    textAlign: "center",

    fontWeight: "bold",
  },
  cardStatus: {
    fontSize: 18,
    color: "#220a03",
    textAlign: "center",
  },
  cardDescription: {
    padding: 0,
    paddingHorizontal: 16,
    marginTop: 20,

    color: "#6a515e",
    textAlign: "center",
  },
  cardMoreInfo1: {
    textAlign: "center",
    color: "#ff642e",
  },
  cardMoreInfo2: {
    textAlign: "center",

    color: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  phoneNumber: {
    marginLeft: 5,
  },
});
