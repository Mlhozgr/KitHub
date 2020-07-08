import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Button,
  Text,
  StatusBar,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';

  class App extends Component{
    constructor(props){
      super(props);
      this.state ={
        filePath:{},
        loadingImage : false
      }
    }
      chooseFile = () =>{
        let options ={
          title: 'Select image',
          customButtons: [
            {name: 'customOptionKey', 
            title: 'Choose photo from custom options'}
          ],
          storageOptions:{
            skipBackup: true,
            path: 'images',
          },
        };
        this.setState({loadingImage: true});
        ImagePicker.showImagePicker(options, response =>{
          console.log('Response =', response);
          if(response.didCancel){
             this.setState({loadingImage: false})
          }else if(response.error){
            console.log('ImagePicker Error', response.error)
          }else{
            let source = response
            this.setState({
              filePath:source
            })
          }
        });
      }
    
    render(){
      return(
        
            <LinearGradient
            style={{flex:1}}
            colors ={[
              "#fc575e",
              "#f7b42c"
            ]}>
              <View style={{flex:1, justifyContent:'center',
                alignItems:'center' }}>
                  <Text style={{margin:1, paddingBottom: 15,fontSize:20,color:'#FFFFFF',fontWeight:"bold"}}>DON'T FORGET READ THIS BOOK :)</Text>
              <Image
              source = {this.state.loadingImage
              ?
              {uri: this.state.filePath.uri}
              :
              require('../assets/kb.png')}
              style={{width:250, height:250, resizeMode: 'stretch'}}
              />

                <Button title="Upload image" 
                onPress={this.chooseFile.bind(this)}
                style={{margin:3 , padding: 3,}}/>
              </View>

            </LinearGradient>
         
      )
    }
  }

export default App;