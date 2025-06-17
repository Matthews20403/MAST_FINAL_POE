import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text>finish the fucken app</Text>
      <Link href={"/Filter"} style={styles.button}>
        Go to filter page.
      </Link>
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
  button:{
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
