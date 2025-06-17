import { StatusBar } from "react-native";
import { Text, View, StyleSheet, ImageBackground, Image,TextInput, TouchableOpacity, Button, ScrollView } from "react-native";
import { useState } from "react";

export default function AddDishPage() {
  const [Name, setName] = useState<string>('');
  const [Description, setDescription] = useState<string>();
  const [Price, setPrice] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<string |null>(null);
  const [Errors, setErrors] = useState<{ Name?: String; Description?: String; Price?: String; selectedOption?:string}>({});
  const handleSelectOption =(option: string) => {
    setSelectedOption(option);
  };  

  const validateForm = () => {
    let errors: { Name?: string; Decsription?: string; Price?: string; selectedOption?: string } = {};

    if (!Name) errors.Name = 'Please fill the name field';
    if (Description) errors.Decsription = 'Please fill the description field';
    if (Price == null) errors.Price = 'Please fill the Price field';
    if (!selectedOption) errors.selectedOption = 'select an option';
    setErrors(errors);
    return Object.keys(errors).length ===0;
  };

  return (
      <ScrollView>
        <Text style={styles.label}>NAME</Text>
        <TextInput
        style={styles.Input}
        value={Name}
        onChangeText={setName}
        placeholder="Name of the dish"/>

        <Text style={styles.label}>Description</Text>
        <TextInput
        style={[styles.Input, styles.multiLineText]}
        value={Description}
        onChangeText={setDescription}
        placeholder="Description of the dish"/>
        multiline

        <Text style={styles.label}>Price</Text>
        <TextInput
        style={styles.Input}
        value={Price ? Price.toString() : ''}
        onChangeText={(text) => setPrice(parseInt(text) || null)}
        placeholder="R.."
        keyboardType="numeric"/>

        <Text style={styles.label}>Choose an option</Text>
        <View style={styles.radioGroup}>
        {['STARTER', 'MAIN', 'DESSERT'].map((option) => (
          <TouchableOpacity
            key={option}
            style={styles.radioButton}
            onPress={() => handleSelectOption(option)}
          >
            <View
              style={[
                styles.radioCircle,
                { backgroundColor: selectedOption === option ? '#e0801c' : 'white' },
              ]}
            >
              {selectedOption === option && <View style={styles.selectedRadioInnerCircle} />}
            </View>
            <Text style={styles.option}>{option}</Text>
          </TouchableOpacity>
        ))}
        </View>

        <Button title="ADD" onPress={() => validateForm} color='#e0801c'/>


      </ScrollView>
    
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EBB866",
  },
  Input:{
    backgroundColor: "#EBB866",
    width: 300,
    height: 40,
    marginBottom: 30,
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    color: 'black',
    marginLeft:'auto',
    marginRight:'auto',
  },
  multiLineText:{
    minHeight: 100,
    textAlignVertical: 'top',
  },
  label:{
    color: 'black',
    fontSize: 16,
    marginBottom: 3,
    fontWeight: 'bold',
  },
  radioGroup:{
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  radioButton:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginRight: 20,
  },
  radioCircle:{
    height: 15,
    width: 15,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
  },
  selectedRadioInnerCircle:{
    height: 3,
    width: 3,
    borderRadius: 6,
    backgroundColor: "#EBB866",
  },
  option:{
    fontSize: 14,
    paddingLeft: 5,
    color: "black",
    fontWeight: 'bold'
  },


});
