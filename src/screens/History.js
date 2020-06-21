import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import MaterialCardWithoutImage from "../components/MaterialCardWithoutImage";

function History(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.text}>HISTORY</Text>
      </View>
      <View style={styles.materialCardWithoutImageStack}>
        <MaterialCardWithoutImage
          style={styles.materialCardWithoutImage}
        ></MaterialCardWithoutImage>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.rect2}>
              <Text style={styles.recommendedPolice}>Recommended:Police</Text>
            </View>
            <View style={styles.materialCardWithoutImage2Stack}>
              <MaterialCardWithoutImage
                style={styles.materialCardWithoutImage2}
              ></MaterialCardWithoutImage>
              <View style={styles.rect3}>
                <Text style={styles.recommendedHospital}>
                  Recommended:Hospital
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 375,
    height: 213,
    backgroundColor: "rgba(0,0,0,0.6)"
  },
  text: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 68,
    width: 233,
    fontSize: 34,
    marginTop: 126,
    marginLeft: 105
  },
  materialCardWithoutImage: {
    height: 197,
    width: 345,
    position: "absolute",
    left: 21,
    top: 27
  },
  scrollArea: {
    top: 0,
    left: 0,
    width: 375,
    height: 497,
    position: "absolute"
  },
  scrollArea_contentContainerStyle: {
    height: 497,
    width: 375
  },
  rect2: {
    width: 153,
    height: 31,
    backgroundColor: "#E6E6E6",
    marginTop: 178,
    marginLeft: 194
  },
  recommendedPolice: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 17,
    width: 148,
    marginTop: 7
  },
  materialCardWithoutImage2: {
    height: 197,
    width: 345,
    position: "absolute",
    left: 0,
    top: 0
  },
  rect3: {
    left: 177,
    width: 153,
    height: 31,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    top: 151
  },
  recommendedHospital: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 31,
    width: 153
  },
  materialCardWithoutImage2Stack: {
    width: 345,
    height: 197,
    marginTop: 36,
    marginLeft: 21
  },
  materialCardWithoutImageStack: {
    width: 375,
    height: 497,
    marginLeft: -10
  }
});

export default History;
