import { Text, View, StyleSheet } from "react-native";

export default function Medications() {
 return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "row"
      }}
    >
        <View
         style={{
            flex: 2,
            justifyContent: "flex-start",
            alignItems: "flex-start"
        }}
            ><Text>MEDICATION NAME</Text></View>
        <View
         style={{
            flex: 2,
            justifyContent: "flex-start",
            alignItems: "flex-start"
        }}><Text>CHEMICAL NAME PERHAPS</Text></View>
    </View>
 )
}