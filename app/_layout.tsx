import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  // return (
  //   <Stack>
  //     <Stack.Screen name="index" />
  //     <Stack.Screen name="medications" />
  //   </Stack>
  // );
  return( 
    <Tabs
    screenOptions={{
      headerShown: true,
    }}>
    <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
      }}
    />
    <Tabs.Screen
      name="medications"
      options={{
        title: 'Meds'
      }}
    />
  </Tabs>
  )
}
