import React from "react";
import { View, Text, Linking } from "react-native";

export function list({item}){
    return(
        <View style={{padding: 5}}>
            <Text>Name: {item.name}</Text>
            <Text>Descrição: {item.description}</Text>
            <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL(item.html_url)}>
            Link github: {item.name}
            </Text>
        </View>
    );
}