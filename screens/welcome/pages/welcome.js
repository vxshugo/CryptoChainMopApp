import React, {useState, useEffect} from "react";import {View, Text, SafeAreaView} from "react-native";import style from '../style';export default function Welcome(props) {    const { navigation } = props;    const [visible, setVisible] = useState(false);    useEffect(() => {        setTimeout(() => {            setVisible(true)        }, 2000)    }, [])    return (        <View style={style.mainView}>            <Text style={style.textStyle}>Re:Dead Coinbase</Text>        </View>    )}