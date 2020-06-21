import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function MaterialCardWithoutImage(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bodyContent}>
        <Text style={styles.timestamp}>19:00</Text>
        <Text style={styles.liveHeartRate}>100bpm</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>80% sad</Text>
      </View>
      <View style={styles.actionBody}>
        <TouchableOpacity style={styles.actionButton1}>
          <Text style={styles.police}>POLICE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton2}>
          <Text style={styles.hospital}>HOSPITAL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center"
  },
  timestamp: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  liveHeartRate: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  body: {
    padding: 16,
    paddingTop: 8
  },
  bodyText: {
    lineHeight: 20,
    fontSize: 14,
    color: "#424242",
    flexWrap: "wrap"
  },
  actionBody: {
    padding: 8,
    flexDirection: "row"
  },
  actionButton1: {
    padding: 8,
    height: 36,
    backgroundColor: "rgba(208,2,27,1)"
  },
  police: {
    fontSize: 14,
    color: "rgba(255,255,255,1)",
    opacity: 0.9
  },
  actionButton2: {
    padding: 8,
    height: 36,
    backgroundColor: "rgba(65,117,5,1)"
  },
  hospital: {
    fontSize: 14,
    color: "rgba(255,255,255,1)",
    opacity: 0.9
  }
});

export default MaterialCardWithoutImage;
