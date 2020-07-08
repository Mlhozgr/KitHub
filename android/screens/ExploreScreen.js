import React, { useState } from 'react';
import {View,Text,Button,StyleSheet,TextInput,TouchableOpacity} from 'react-native';

import Axios from 'axios';
const ExploreScreen = () => {
    const [book,setBook] = useState("");
        const [result,setResult] = useState([]);
        const [apiKey,setApiKey] = useState("AIzaSyBW3SP0vixN1EX8VueI9VL5wzbbjTmJ5FM")

    function handleChange(event){
        const book =event.target.value;
        setBook(book);
    }

    function handleSubmit(event){
        event.preventDefault();
        
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=40")
        .then(data => {
            console.log(data.data.items);
            setResult(data.data.items)
        })
    }

    return (
        <View style={StyleSheet.contianer}>
            <TextInput
            onChangeText={event => handleChange(event)}></TextInput>
            <TouchableOpacity
                title="Click here"
                onPress={event => handleSubmit(event)}/>
            {result.map(book =>(
                <a target="_blank" href={book.volumeInfo.previewLink}>
                <Image src={book.volumeInfo.imageLinks.thumbnail} alt={bookTitle}
                />
                </a>
            ))}
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