import {Platform, StyleSheet} from "react-native";import { RFValue } from "react-native-responsive-fontsize";import colors from "../../resources/colors";import {StatusBar} from "expo-status-bar";export default StyleSheet.create({    container: {        flex: 1,        backgroundColor: colors.primaryBlue,        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0    },    mainView: {        flex: 1,        alignItems: "center",        justifyContent: 'center',    },    textStyle:{        colors: colors.white,        fontWeight: "bold",        fontSize: RFValue,    }})