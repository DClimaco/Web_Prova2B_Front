import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BemVindo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem-vindo ao sistema!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default BemVindo;
