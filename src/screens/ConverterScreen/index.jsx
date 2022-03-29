import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, View, Text,Image,StyleSheet, Linking,TouchableOpacity } from "react-native";
import {getNews} from "../../service/requests";
import {green} from "react-native-reanimated/src/reanimated2/Colors";
import { useNavigation } from "@react-navigation/native";

const ConverterScreen = () => {
    const [news, setNews] = useState({})

    const styles = StyleSheet.create({
        tinyLogo: {
            borderRadius: 50,
            width: 50,
            height: 50,
        },
        greenText: {
            color: '#fff'
        }
    });

    const navigation = useNavigation();

    const fetchNews = async () => {
      const fetchedNewsData = await getNews();
      setNews(fetchedNewsData)
    }
    useEffect(()=>{
        fetchNews()
    },[])

    return(
            <View style={{ padding: 10 }}>
                {
                    news?.articles?.map((item, key) => {
                        return(
                            <View
                                style={{border: '2px solid #fff', backgroundColor: 'gray', borderRadius: 10, padding: 15,marginBottom: 20}}

                            >
                                <TouchableOpacity
                                    style={{display: 'flex',flexDirection:'row', alignItems: "center", marginBottom: 10}}
                                    onPress={() => navigation.navigate("AboutNews", {Item: item})}
                                >
                                    <Image
                                        style={styles.tinyLogo}
                                        source={{
                                            uri: item.urlToImage
                                        }}
                                    />
                                    <Text style={{ color: 'white',flex: 1, marginLeft: 10 }}>{item.title}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => Linking.openURL(item.url)}>
                                    <Text style={{color: '#fff'}}>Источник:</Text>
                                    <Text
                                        style={{color: '#00FF7F'}}
                                    > {item.source.name}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </View>
        )
}
export default ConverterScreen;
