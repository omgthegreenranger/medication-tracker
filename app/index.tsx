import { Text, View } from "react-native";
import { db } from "../scripts/sql-scripts";
import SqlTest from "../components/SQLstart"
import { Button } from 'react-native';
import * as SQLite from 'expo-sqlite';

export default function Index() {
 return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <SqlTest />
    </View>
  );
}
