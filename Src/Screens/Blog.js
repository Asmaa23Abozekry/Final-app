import React from "react";
import { View, Text, Image, StyleSheet, ScrollView , Dimensions} from "react-native";
// import blogImg from "../../assets/Images/bloggg.jpg";


const Blog = () => {
  const screenWidth = Dimensions.get("window").width;
  const imageWidth = screenWidth;
  const blogData = [
    {
      id: 1,
      title: "Blog Title 1",
      abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://media.istockphoto.com/id/646427322/photo/im-not-under-stress-when-this-cutie-is-here.webp?b=1&s=170667a&w=0&k=20&c=SmkJZc5Z_6xBYA3WF47xr7g4tlPeF6lmXfKO20qEbuo=",
      rating: 5,
      time: "June 1, 2023",
    },
    {
      id: 2,
      title: "Blog Title 2",
      abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://images.unsplash.com/photo-1489440543286-a69330151c0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGV0cyUyMGJsb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      rating: 5,
      time: "May 15, 2023",
    },
    {
      id: 3,
      title: "Blog Title 3",
      abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://media.istockphoto.com/id/1391430520/photo/dog-uses-laptop.webp?b=1&s=170667a&w=0&k=20&c=dSt2zt6nIbhjXsadI_cpIlnSOyaa8h2HmlMwk8wrw64=",
      rating: 5,
      time: "May 15, 2023",
    },
    {
      id: 4,
      title: "Blog Title 4",
      abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://media.istockphoto.com/id/1464863075/photo/dogs-team-tourists-photographers-t-shirts-sit-stone-square-looking-camera-tripod.webp?b=1&s=170667a&w=0&k=20&c=UjFMUdUPanHJcMlD6pcmmrJ2R14Gg_ScyNu0xyQ9exo=",
      rating: 5,
      time: "May 15, 2023",
    },
    {
      id: 5,
      title: "Blog Title 5",
      abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://media.istockphoto.com/id/1293320432/photo/beautiful-happy-caucasian-woman-working-from-home-using-a-laptop.webp?b=1&s=170667a&w=0&k=20&c=C36p_NMYqlc82XE-537v0Tvz-o0C1SEA6Z7RGupC2l8=",
      rating: 5,
      time: "May 15, 2023",
    },
    {
      id: 6,
      title: "Blog Title 6",
      abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://media.istockphoto.com/id/1488066888/photo/man-sitting-and-working-on-the-table-at-home-to-comply-with-company-policy-work-from-home-can.webp?b=1&s=170667a&w=0&k=20&c=yx-nIEEfGMPRKHmmuP6r2CtA-C5ZD57JPP-qNHvVL5k=",
      rating: 5,
      time: "May 15, 2023",
    },

  ];

  return (
    
    
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
       {/* <Image
            source={blogImg}
            style={{ width: imageWidth, height: 150 }}
          /> */}69
          </View>
      {blogData.map((item) => (
        <View key={item.id} style={styles.blogContainer}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.blogImage} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.abstract}>{item.abstract}</Text>
            <View style={styles.rating}>
              {/* Rating Component */}
              {Array(item.rating)
                .fill(null)
                .map((_, index) => (
                  <Text key={index} style={styles.star}>
                    ★
                  </Text>
                ))}
            </View>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </View>
      ))}
    
    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  blogContainer: {
    flexDirection: "row",
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    width: 150,
    height: 130,
    marginRight: 10,
    marginTop: 5,
    borderRadius: 5,
    overflow: "hidden",
  },
  blogImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  abstract: {
    fontWeight: "500",
    textAlign: "justify",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  star: {
    color: "gold",
    marginRight: 2,
  },
  time: {

    fontWeight: "500",
    fontSize: 12,
    marginTop: 5,
  },
});

export default Blog;