import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, Image, KeyboardAvoidingView } from 'react-native'
import React, { useState} from "react";
import { useNavigation } from "@react-navigation/native";

import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";

const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "white", alignItems:"center"}}>
      <View>
        <Image
          style={{ width: 160, height: 100, marginTop:120 }}
          source={{
            uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
          }}
        />
      </View>
      <KeyboardAvoidingView>
      <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 0,
              color: "#041E42",
            }}
          >
            Create Your Account
          </Text>
        </View>
        <View style={{ marginTop: 0 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <Ionicons
              name="ios-person"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 16,
                
              }}
              placeholder="Enter your Username"
            />
          </View>
        </View>
        <View style={{ marginTop: 0 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="gray"
            />

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 16,
                
              }}
              placeholder="Enter your Email"
            />
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 20,
            }}
          >
            {/* <AntDesign
              name="lock1"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            /> */}

            <Entypo 
                name="lock" 
                size={24} 
                color="gray"  
                style={{ marginLeft: 10 }}
            />

            <TextInput
              value={password}
              onChangeText={(text) => setEmail(password)}
              secureTextEntry={true}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: password ?  16 : 16,
              }}
              placeholder="Enter your Password"
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 6,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            fontWeight: "500"
          }}
        >
          <Text style={{ fontWeight: "600" }}>Keep me logged in</Text>

          <Text style={{ color: "#007FFF", fontWeight: "500" }}>
            Forgot Password?
          </Text>
        </View>
        <View style={{ marginTop: 40 }} />

<Pressable
 // onPress={handleLogin}
  style={{
    width: 200,
    backgroundColor: "#FEBE10",
    borderRadius: 6,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15,
  }}
>
  <Text
    style={{
      textAlign: "center",
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    }}
  >
    Register
  </Text>
</Pressable>

<Pressable
  onPress={() => navigation.navigate("Register")}
  style={{ marginTop: 5 }}
>
  <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
    Already have an account? Sign In
  </Text>
</Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})