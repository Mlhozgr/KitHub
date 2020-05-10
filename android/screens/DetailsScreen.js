import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
  } from 'react-native';



const DetailScreen = ({navigation}) => {
    return (
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
          <Text>Detail Screen</Text>
          <Button title='Go to Home screen'
          onPress ={() => navigation.navigate("Home")}
          ></Button>
          <Button title='Go back'
          onPress ={() => navigation.goBack()}
          ></Button>
        </View>
    );
  };

  export default DetailScreen;