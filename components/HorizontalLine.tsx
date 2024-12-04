import React from "react";
import { View, StyleSheet } from "react-native";

const HorizontalLine = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <View style={styles.circle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    paddingVertical: 30,
    width: "100%",
  },
  line: {
    width: "100%",
    height: 4,
    backgroundColor: "#143C5E",
    borderRadius: 2,
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#143C5E",
    position: "absolute",
    left: 0,
    top: -6,
  },
});

export default HorizontalLine;
