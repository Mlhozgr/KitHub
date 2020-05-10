import React from 'react';
import {View,Button,StyleSheet,SafeAreaView} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Drawer,
    Text,
    TouchableRiper,
    Switch,
    Paragraph,
    TouchableRipple
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {

const [isDarkTheme,setIsDarkTheme] = React.useState(false);
const toogleTheme = ()  => {
    setIsDarkTheme(!isDarkTheme);
}

    return(
        <SafeAreaView style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles .drawerContent}>
                    <View style={styles.drawerContent}>
                        <View style={styles.userInfoSection}>
                            <View style={{flexDirection:'row',marginTop:15}}>
                                <Avatar.Image style={{marginTop:5}}
                                    source={{
                                        uri:'data:image/jpeg;base64,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'
                                    }}
                                    size={50}
                                />
                                    <View style={{marginLeft:15,flexDirection:'column'}}>
                                        <Title style={styles.title}>Melih Özgör</Title>
                                        <Caption style={styles.caption}>@BörklüMerküt</Caption>
                                    </View>
                            </View>
                            <View style={styles.row}>
                            <View>
                                <Paragraph>16</Paragraph>
                                <Caption>Books in Library</Caption>
                            </View>
                            <View style={{marginLeft:15}}>
                                <Paragraph>56</Paragraph>
                                <Caption>Number of books read</Caption>
                            </View>
                        </View>
                        </View>
                        <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                    icon={({color,size}) => (
                        <Icon
                            name="home-outline"
                            color={color}
                            size={size}
                            />
                    ) }
                    label="Home"
                    onPress={() => {}}
                    ></DrawerItem>
                    <DrawerItem
                    icon={({color,size}) => (
                        <Icon
                            name="account-outline"
                            color={color}
                            size={size}
                            />
                    ) }
                    label="Profile"
                    onPress={() => {props.navigation.navigate('Profile')}}
                    ></DrawerItem>
                    <DrawerItem
                    icon={({color,size}) => (
                        <Icon
                            name="settings-outline"
                            color={color}
                            size={size}
                            />
                    ) }
                    label="Settings"
                    onPress={() => {}}
                    ></DrawerItem>
                    <DrawerItem
                    icon={({color,size}) => (
                        <Icon
                            name="book"
                            color={color}
                            size={size}
                            />
                    ) }
                    label="Library"
                    onPress={() => {}}
                    ></DrawerItem></Drawer.Section>
                    <Drawer.Section title="Preferences">
                            <TouchableRipple onPress={() => {toogleTheme()}}>
                                <View style={styles.preference}>
                                    <Text>Dark Theme</Text>
                                    <View pointerEvents="none">
                                        <Switch value={isDarkTheme}/>
                                    </View>
                                </View>
                            </TouchableRipple>

                    </Drawer.Section>
                    
                    </View>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color,size}) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                            />
                    ) }
                    label="Sign Out"
                    onPress={() => {}}
                    >
                    
                </DrawerItem>
            </Drawer.Section>
        </SafeAreaView>
    )
}

export default DrawerContent;

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });