import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';


const ExploreScreen = () => {
    return (
        <View style={StyleSheet.contianer}>
            <Text>ExploreScreen</Text>
            <Button
                title="Click here"
                onPress={() => alert('Button Clicked')}/>
        </View>
    );
};
export default ExploreScreen;

const styles=StyleSheet.create({
    contianer: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
}) 