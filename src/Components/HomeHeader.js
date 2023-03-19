import React from 'react'
import { View, Text, StyleSheet } from "react-native"
import { Icon, withBadge } from 'react-native-elements'
import { colors, parameters } from "../Global/Style";

export default function HomeHeader({ navigation }) {

  const BadgeIcon = withBadge(0)(Icon)
  return (
    <View style={styles.header}>

      {/* ......<<<<<<<<<<<<<<<<<<<<<<<<Icon>>>>>>>>>>>>>>>>>>>.>>>>>>>>>>>>>>>>>>>..... */}

      <View style={{ alignItems: "center", justifyContent: "center", marginLeft: 15 }}>
        <Icon
          type="material-commmunity"
          name="menu"
          color={colors.cardbackground}
          size={32}
          onPress={() => {
            navigation.toggleDrawer()
          }}
        />




      </View>

      {/* ......<<<<<<<<<<<<<<<<<<<<<<<<Text>>>>>>>>>>>>>>>>>>.>>>>>>>>>>>>>>>>>>>..... */}

      <View style={{ alignItems: "center", justifyContent: "center" }}>

        <Text style={{
          color: colors.cardbackground,
          fontSize: 25,
          fontWeight: "bold"
        }}>

          XpressFood</Text>

      </View>

      {/* ......<<<<<<<<<<<<<<<<<<<<<<<<Icon>>>>>>>>>>>>>>>>>>>.>>>>>>>>>>>>>>>>>>>..... */}

      <View style={{ alignItems: "center", justifyContent: "center", marginLeft: 15 }}>
        <BadgeIcon
          type="material-community"
          name="cart"
          color={colors.cardbackground}
          size={35} />
      </View>
    </View>
  )
}

{/* ......<<<<<<<<<<<<<<<<<<<<<<<<STYLESHEET>>>>>>>>>>>>>>>>>>>.>>>>>>>>>>>>>>>>>>>..... */ }


const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    justifyContent: "space-between"
  },



})

