import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Checkbox from 'expo-checkbox';
import {StatusBar} from 'expo-status-bar';
import React, { useState } from "react";
import menuList from './data.json';



export default function AddToMenuPage() {
  const [selectedDishes, setSelectedDishes] = useState<Record<string,boolean>>({});

  const toggleSelection = (dishName: string) => {
    setSelectedDishes(prevSelected => ({
      ...prevSelected,
      [dishName]: !prevSelected[dishName]
    }));
  };
  return (
    <View
      style={styles.container}
    >
     <ScrollView style={styles.scrollview}>
     {
          menuList.map(dish => (
            <View style={styles.card} key={dish.Name}>
              <View style={styles.row}>
                <Checkbox
                style={styles.checkbox}
                value={selectedDishes[dish.Name] || false}
                onValueChange={() => toggleSelection(dish.Name)}/>
                
                <Text style={styles.nametext}>{dish.Name}  -  R{dish.Price}</Text>
              </View>
              <Text style={styles.cardtext}>{dish.Description}</Text>
              <Text style={styles.courseText}>{dish.selectedOption}</Text>
            </View>
          ))
        }
      
     </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EBB866",
  },
  scrollview:{
    paddingHorizontal: 16,
  },
  card:{
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox:{
    marginRight: 8,
  },
  nametext:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseText:{
    color: '#e0801c'
  },
  cardtext:{
    fontSize: 14,
  },

});
