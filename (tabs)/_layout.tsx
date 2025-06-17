import { Tabs } from "expo-router";
import {Ionicons} from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs 
    screenOptions={{
        tabBarActiveTintColor: "#000"
    }}>
    
      <Tabs.Screen name="index" 
      options={{
        headerTitle: "HomePage",
        tabBarIcon: ({focused, color}) => <Ionicons name="home" size={30}/>
      }} />
      <Tabs.Screen name="Filter" 
      options={{
        headerTitle: "Filter",
        tabBarIcon: ({focused, color}) => <Ionicons name="filter" size={30}/>
        }}/>

      <Tabs.Screen name="AddDish"
      options={{
        headerTitle: "Add Dish",
        tabBarIcon: ({focused, color}) => <Ionicons name="add-circle-outline" size={30}/>
        }}/>

      <Tabs.Screen name="AddToMenu"
      options={{
        headerTitle: "Add To Menu",
        tabBarIcon: ({focused, color}) => <Ionicons name="checkbox-outline" size={30}/>
    }}/>

    </Tabs>
  );
}
