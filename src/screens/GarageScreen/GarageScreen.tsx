import React from "react";
import { View, Text } from "react-native";
import { styles } from "./GarageStyle";
import CardView from "../../components/CardView";

export default function screens() {
  return (
    <View style={styles.container}>
      <View style={styles.cameraBox}>
        <View style={styles.trinagleCorner}></View>
        <View style={[styles.trinagleCorner, styles.topRight]}></View>
        <View style={[styles.trinagleCorner, styles.bottomLeft]}></View>
        <View style={[styles.trinagleCorner, styles.bottomRight]}></View>
        <CardView />
      </View>
    </View>
  );
}
