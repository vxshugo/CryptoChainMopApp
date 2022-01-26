import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Welcome } from "./screens/welcome/index"

export default function App() {
  return (
      <View>
        <Welcome />
      </View>
  )
}

