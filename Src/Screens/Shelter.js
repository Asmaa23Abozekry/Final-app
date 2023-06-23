//import liraries
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
// import LogIn from "./Src/Screens/LogIn";
const signUp = ({ navigation }) => {
  const [fullName, setfullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleSignup = () => {
    navigation.navigate('LogIn');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
      <Text style={styles.title}>Signup</Text>
      <View style={styles.inputContainer}>
      <Icon name='user' style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setfullName}
      />
      </View>
      
      <View style={styles.inputContainer}>
      <Icon name='envelope' style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
    </View>
    <View style={styles.inputContainer}>
      <Icon name='lock' style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
</View>
<View style={styles.inputContainer}>
      <Icon name='lock' style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      </View>
      <TouchableOpacity style={styles.button}  onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup<Icon name="arrow-right" style={styles.iconarrow} /></Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('LogIn')}
      >
        <Text style={styles.loginButtonText}>Already have an account? Login</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  formContainer:{
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 30,
    shadowColor: '#171717',
    shadowOffset: {width: -5, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
    // elevation for android shadow
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    alignSelf:'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    color:'#777',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 20,
    width: '100%',
    fontSize: 18,
    flex:1
  },
  button: {
    backgroundColor: '#ff642e',
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 20,
    alignItems:'center',
    alignSelf:'center',
    width:130
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginButton: {
    marginTop: 20,
  },
  loginButtonText: {
    color:'#ff642e',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  iconUser:{
    fontSize: 25,
    margin:3
    
  },
  iconarrow:{
fontSize:16,
margin:3
  }
  ,inputContainer: {
    flexDirection: 'row',
    alignItems:'flex-start'
  },
  icon: {
    position:'absolute',
    left:-2,
    margin:7,
    top:8,
    fontSize: 20,
    color: '#777',
    // marginRight: 10,
  },
});

//make this component available to the app
export default signUp;
