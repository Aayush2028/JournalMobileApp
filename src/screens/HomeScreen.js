import { useEffect, useState } from "react";
import { View, Text, TouchableHighlight, TextInput } from "react-native";
import styles from "./Style";
import useLoginService from "../services/LoginService";

const HomeScreen = (props) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errorStatus, setErrorStatus] = useState(false);

    const handleLogin = async () => {
        try {
          const jwt = await useLoginService({ name, password });
          if (jwt) {
            props.navigation.navigate('JournalEntriesScreen', { name: name, jwt: jwt });
          } 
        } catch (error) {
          console.error('Login Error:', error);
        }
    };
  
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'black'}}>
        <TextInput 
          value={name}
          style={styles.loginPageInput}
          onChangeText={(text)=>setName(text)}
          placeholder='Enter Name'
        />
        <TextInput 
          value={password}
          style={styles.loginPageInput}
          onChangeText={(text)=>setPassword(text)}
          secureTextEntry={true}
          placeholder='Enter Password'
        />
        <TouchableHighlight onPress={handleLogin}>
          <Text style={styles.loginPageSubmitButton}>Login</Text>
        </TouchableHighlight>
      </View>
    );
};

export default HomeScreen;