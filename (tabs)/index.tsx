import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import menuList from './menu.json';

function calculateAveragePrice(menu: any[], category: string) {
  const items = menu.filter(dish => dish.selectedOption.toUpperCase() === category.toUpperCase());
  const total = items.reduce((sum, dish) => sum + dish.Price, 0);
  return items.length ? (total / items.length).toFixed(2) : 0;
}

export default function Index() {

  const averageStarterPrice = calculateAveragePrice(menuList, 'starter');
  const averageMainPrice = calculateAveragePrice(menuList, 'main');
  const averageDessertPrice = calculateAveragePrice(menuList, 'dessert');

  return (
    <View
      style={styles.container}
    >
      <ScrollView style={styles.scrollview}>
        <Image source={require('./images/Fifis Restaurant.jpg')} style={styles.picture}/>
      <Text style={styles.title}>MENU</Text>
        <Text style={styles.courseAve}> Average price per course</Text>

        
        <View style={styles.rowContainer}>
          <View style={styles.averageContainer}>
              <Text style={styles.avgText}>Starters: R{averageStarterPrice}</Text>
          </View>

          <View style={styles.averageContainer}>
              <Text style={styles.avgText}>Main: R{averageMainPrice}</Text>
          </View>

          <View style={styles.averageContainer}>
              <Text style={styles.avgText}>Dessert: R{averageDessertPrice}</Text>
            </View>
        </View>

        
        {menuList.map(dish => (
          <View style={styles.card} key={dish.Name}>
            <View style={styles.row}>
              <Text style={styles.nametext}>{dish.Name}</Text>
              <Text>  - R{dish.Price}</Text>
            </View>
            <Text style={styles.cardText}>{dish.Description}</Text>
            <Text style={styles.courseText}>{dish.selectedOption}</Text>
          </View>
        ))}

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
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginBottom: 20,
  },
  courseAve:{
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
    marginBottom: 5,
  },
  rowContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  averageContainer:{
    width: 100,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#e0801c',
    borderRadius: 8,
  },
  avgText:{
    fontSize: 16,
    color: 'black',
    marginVertical: 2,
    fontWeight: 'bold',
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
  nametext:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardText:{
    fontSize: 14,
  },
  courseText:{
    color: '#black',
    fontSize:18,
  },
  picture:{
    width: '95%',
    height: 350,
  },
});
