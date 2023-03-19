import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { colors, parameters, titletext } from "../Global/Style";
import { Icon } from "react-native-elements";

export default function Header({ title, type, navigation }) {
  return (
    <View style={styles.header}>
      <View>
        <Icon style={{ marginLeft: 10 }}
          type="material-community"
          name={type}
          color={colors.headerText}
          size={28}
          onPress={() => { navigation.goBack() }} />
      </View>

      <View>
        <Text style={styles.headerText}>
          {title}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  header: {
    flexDirection: "row",
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
  },

  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.headerText,
  }

})




