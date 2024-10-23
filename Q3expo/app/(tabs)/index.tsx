import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export default () => {
  const [pressCount, setPressCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>You've pressed the button: {pressCount} time(s) </Text>
      <Button title="Press me" onPress={() => setPressCount(pressCount + 1)} />

      <View style={styles.grid}>
        {Array.from({ length: 9 }).map((_, index) => (
          <View key={index} style={styles.box}>
            <Text> {index + 1}</Text>
          </View>
        ))}

        {Array.from({ length: 4 }).map((_, index) => (
          <View key = {index}></View>
          
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
  baoga: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: 100,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  box: {
    width: 100,
    height: 100,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
