import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';


const ProfileScreen = () => {
    return (
        <View style={StyleSheet.contianer}>
            <Text>ProfileScreen</Text>
            <Button
                title="Click here"
                onPress={() => alert('Button Worked')}/>
        </View>
    );
};
export default ProfileScreen;
const styles=StyleSheet.create({
    contianer: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
}) 