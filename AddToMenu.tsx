import { Text, View, StyleSheet } from "react-native";

export default function AddToMenuPage() {
  return (
    <View
      style={styles.container}
    >
      <Text>So far so good.</Text>
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
});
