import { FlatList, RefreshControl, View, Text,Image,StyleSheet, Linking,TouchableOpacity } from "react-native";
import React, {useEffect, useState} from "react";
import {getNews} from "../../../service/requests";

const AboutNews = ({route}) => {
    const {Item} = route.params;


    return(
        <View>
            <Text style={{color: "#fff"}}>{Item.title}</Text>
            <Text style={{color: "#fff"}}>{Item.description}</Text>
        </View>
    )
}

export default AboutNews